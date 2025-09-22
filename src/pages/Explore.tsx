import { useState } from 'react';
import { Search, Filter, MapPin, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MonasteryTile from '@/components/MonasteryTile';

import encheyImage from '@/assets/enchey-monastery.jpg';
import pemayangtseImage from '@/assets/pemayangtse-monastery.jpg';
import tashidingImage from '@/assets/tashiding-monastery.jpg';
import phensangImage from '@/assets/phensang-monastery.jpg';

const monasteries = [
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
  {
    id: 'rumtek',
    name: 'Rumtek Monastery',
    location: 'East Sikkim',
    description: 'The largest monastery in Sikkim, known as the Dharma Chakra Centre.',
    image: encheyImage, // Reusing image for now
    founded: '1966',
  },
  {
    id: 'labrang',
    name: 'Labrang Monastery',
    location: 'North Sikkim',
    description: 'One of the six great monasteries of the Gelug school of Tibetan Buddhism.',
    image: phensangImage, // Reusing image for now
    founded: '1709',
  },
  {
    id: 'dubdi',
    name: 'Dubdi Monastery',
    location: 'West Sikkim',
    description: 'The first monastery built in Sikkim, offering panoramic valley views.',
    image: tashidingImage, // Reusing image for now
    founded: '1701',
  },
  {
    id: 'ralong',
    name: 'Ralong Monastery',
    location: 'South Sikkim',
    description: 'Known for its annual masked dance festival and beautiful architecture.',
    image: pemayangtseImage, // Reusing image for now
    founded: '1768',
  },
];

const locations = ['All Locations', 'Gangtok', 'West Sikkim', 'East Sikkim', 'North Sikkim', 'South Sikkim'];

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredMonasteries = monasteries.filter((monastery) => {
    const matchesSearch = monastery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         monastery.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'All Locations' || monastery.location === selectedLocation;
    const matchesFeatured = !showFeaturedOnly || monastery.featured;
    
    return matchesSearch && matchesLocation && matchesFeatured;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Explore Monasteries</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the sacred monasteries of Sikkim, each with its unique history, architecture, and spiritual significance.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-2xl p-6 mb-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Search Monasteries</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <div className="flex flex-wrap gap-1">
                {locations.map((location) => (
                  <Badge
                    key={location}
                    variant={selectedLocation === location ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setSelectedLocation(location)}
                  >
                    <MapPin className="h-3 w-3 mr-1" />
                    {location}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Featured Filter */}
            <div>
              <Button
                variant={showFeaturedOnly ? "default" : "outline"}
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                className="w-full"
              >
                <Filter className="h-4 w-4 mr-2" />
                Featured Only
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-muted-foreground">
            Showing {filteredMonasteries.length} of {monasteries.length} monasteries
          </p>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Founded between 1641 - 1966
            </span>
          </div>
        </div>

        {/* Monastery Grid */}
        {filteredMonasteries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredMonasteries.map((monastery) => (
              <MonasteryTile key={monastery.id} {...monastery} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No monasteries found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all monasteries.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedLocation('All Locations');
                setShowFeaturedOnly(false);
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}