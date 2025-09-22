import { MapPin, Camera, Map, Calendar, Headphones, Plane } from 'lucide-react';
import NavigationTile from '@/components/NavigationTile';
import MonasteryTile from '@/components/MonasteryTile';
import heroImage from '@/assets/hero-monastery.jpg';
import encheyImage from '@/assets/enchey-monastery.jpg';
import pemayangtseImage from '@/assets/pemayangtse-monastery.jpg';
import tashidingImage from '@/assets/tashiding-monastery.jpg';
import phensangImage from '@/assets/phensang-monastery.jpg';

const featuredMonasteries = [
  {
    id: 'enchey',
    name: 'Enchey Monastery',
    location: 'Gangtok',
    description: 'An important monastery known for its religious significance and annual Cham festival.',
    image: encheyImage,
    founded: '1909',
    featured: true,
  },
  {
    id: 'pemayangtse',
    name: 'Pemayangtse Monastery',
    location: 'West Sikkim',
    description: 'One of the oldest and most premier monasteries of Sikkim, offering stunning Himalayan views.',
    image: pemayangtseImage,
    founded: '1705',
    featured: true,
  },
  {
    id: 'tashiding',
    name: 'Tashiding Monastery',
    location: 'West Sikkim',
    description: 'Revered as one of the most sacred Buddhist pilgrimage sites in Sikkim.',
    image: tashidingImage,
    founded: '1641',
    featured: true,
  },
  {
    id: 'phensang',
    name: 'Phensang Monastery',
    location: 'North Sikkim',
    description: 'A significant monastery housing a large number of monks and host to mask dances.',
    image: phensangImage,
    founded: '1721',
    featured: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section py-16 sm:py-24 relative" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Himalayan Monasteries
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90 animate-fade-in animation-delay-200">
              Discover the serene beauty and profound spirituality of Sikkim's ancient monastic traditions.
            </p>
            <div className="animate-fade-in animation-delay-400">
              <a 
                href="#explore" 
                className="monastery-button-secondary inline-flex items-center text-lg px-8 py-4"
              >
                Begin Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Dashboard */}
      <section id="explore" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Explore Key Sections</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Journey through sacred sites, immerse yourself in virtual experiences, and plan your spiritual adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <NavigationTile
              title="Explore Monasteries"
              description="Journey through sacred sites, learn their history and significance."
              href="/explore"
              icon={MapPin}
              variant="primary"
            />
            <NavigationTile
              title="Virtual Tours"
              description="Experience the tranquility of monasteries from anywhere in the world."
              href="/tours"
              icon={Camera}
              variant="secondary"
            />
            <NavigationTile
              title="Interactive Map"
              description="Pinpoint locations, plan routes, and discover nearby attractions."
              href="/map"
              icon={Map}
              variant="gold"
            />
            <NavigationTile
              title="Cultural Calendar"
              description="Stay informed about festivals, events, and important dates."
              href="/calendar"
              icon={Calendar}
              variant="secondary"
            />
            <NavigationTile
              title="Audio Guides"
              description="Listen to expert narrations and meditative chants for an immersive experience."
              href="/audio"
              icon={Headphones}
              variant="primary"
            />
            <NavigationTile
              title="Plan Visit"
              description="Find essential visitor information, accommodation, and travel tips."
              href="/plan"
              icon={Plane}
              variant="gold"
            />
          </div>
        </div>
      </section>

      {/* Featured Monasteries */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Monasteries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most sacred and historically significant monastic sites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredMonasteries.map((monastery) => (
              <MonasteryTile key={monastery.id} {...monastery} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/explore" 
              className="monastery-button-primary inline-flex items-center text-lg px-8 py-4"
            >
              Explore All Monasteries
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}