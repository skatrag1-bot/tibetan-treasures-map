import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users, Camera, Calendar, Phone, Globe, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import encheyImage from '@/assets/enchey-monastery.jpg';

// Mock data - would be fetched based on ID in real app
const monasteryData: Record<string, any> = {
  enchey: {
    name: 'Enchey Monastery',
    location: 'Gangtok, Sikkim',
    description: 'Enchey Monastery stands majestically on a hilltop overlooking Gangtok, serving as one of the most important religious sites in Sikkim. Built in 1909, this sacred monastery belongs to the Nyingma order of Tibetan Buddhism and is dedicated to Guru Padmasambhava.',
    founded: '1909',
    sect: 'Nyingma',
    images: [
      encheyImage,
      encheyImage,
      encheyImage,
      encheyImage,
      encheyImage,
    ],
    quickFacts: {
      founded: '1909',
      sect: 'Nyingma Order',
      standoutFeature: 'Annual Cham Festival',
      monks: '90 resident monks',
    },
    visitorInfo: {
      openingHours: '6:00 AM - 6:00 PM',
      entryFee: 'Free',
      dressCode: 'Modest clothing required',
      accessibility: 'Partial wheelchair access',
      bestTime: 'October to March',
      photography: 'Allowed in courtyard only',
    },
    features: [
      'Ancient prayer wheels',
      'Colorful Buddhist murals',
      'Traditional Tibetan architecture',
      'Meditation halls',
      'Sacred relics collection',
      'Annual masked dance festival',
    ],
    festivals: [
      { name: 'Cham Festival', date: 'December/January', description: 'Sacred masked dance performances' },
      { name: 'Losar', date: 'February/March', description: 'Tibetan New Year celebrations' },
    ],
  },
};

export default function MonasteryDetail() {
  const { id } = useParams<{ id: string }>();
  const monastery = id ? monasteryData[id] : null;

  if (!monastery) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Monastery not found</h1>
          <Link to="/explore" className="monastery-button-primary">
            Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/explore" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Explore
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${monastery.images[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-primary text-primary-foreground">
                  {monastery.sect}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  <Clock className="h-3 w-3 mr-1" />
                  Founded {monastery.founded}
                </Badge>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                {monastery.name}
              </h1>
              
              <div className="flex items-center text-white/90 text-lg mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                {monastery.location}
              </div>
              
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                {monastery.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="monastery-button-secondary">
                  <Camera className="h-4 w-4 mr-2" />
                  Start Virtual Tour
                </Button>
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  <Car className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Photo Gallery */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="h-5 w-5 mr-2" />
                    Photo Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {monastery.images.slice(1).map((image: string, index: number) => (
                      <div 
                        key={index}
                        className="aspect-square bg-cover bg-center rounded-lg hover:scale-105 transition-transform cursor-pointer"
                        style={{ backgroundImage: `url(${image})` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {monastery.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Festivals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Festivals & Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monastery.festivals.map((festival: any, index: number) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-lg">{festival.name}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{festival.date}</p>
                        <p className="text-sm">{festival.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Founded</span>
                    <span className="font-medium">{monastery.quickFacts.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Buddhist Sect</span>
                    <span className="font-medium">{monastery.quickFacts.sect}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Standout Feature</span>
                    <span className="font-medium">{monastery.quickFacts.standoutFeature}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Community</span>
                    <span className="font-medium">{monastery.quickFacts.monks}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Visitor Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Visitor Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">Opening Hours</h4>
                    <p className="text-sm text-muted-foreground">{monastery.visitorInfo.openingHours}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Entry Fee</h4>
                    <p className="text-sm text-muted-foreground">{monastery.visitorInfo.entryFee}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Dress Code</h4>
                    <p className="text-sm text-muted-foreground">{monastery.visitorInfo.dressCode}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Accessibility</h4>
                    <p className="text-sm text-muted-foreground">{monastery.visitorInfo.accessibility}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Best Time to Visit</h4>
                    <p className="text-sm text-muted-foreground">{monastery.visitorInfo.bestTime}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Photography</h4>
                    <p className="text-sm text-muted-foreground">{monastery.visitorInfo.photography}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                    <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                  </div>
                  <Button className="w-full monastery-button-primary">
                    <Car className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}