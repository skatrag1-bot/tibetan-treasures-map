import { Link } from 'react-router-dom';
import { MapPin, Clock, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface MonasteryTileProps {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  founded?: string;
  featured?: boolean;
}

export default function MonasteryTile({
  id,
  name,
  location,
  description,
  image,
  founded,
  featured = false,
}: MonasteryTileProps) {
  return (
    <div className="monastery-tile group">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-between min-h-[320px] sm:min-h-[360px]">
        <div className="flex justify-between items-start">
          {featured && (
            <Badge className="bg-gold text-gold-dark font-semibold">
              Featured
            </Badge>
          )}
          {founded && (
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              <Clock className="h-3 w-3 mr-1" />
              Est. {founded}
            </Badge>
          )}
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center text-white/80 text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
              {name}
            </h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
              {description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              asChild 
              className="monastery-button-primary flex-1"
            >
              <Link to={`/monastery/${id}`}>
                View Details
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white"
            >
              <Link to={`/tours/${id}`} className="flex items-center">
                <Camera className="h-4 w-4 mr-2" />
                Virtual Tour
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}