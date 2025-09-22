import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MapPin, Navigation, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

/// <reference types="@types/google.maps" />

interface GoogleMapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  title: string;
  address: string;
}

export default function GoogleMap({ coordinates, title, address }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);

  const initializeMap = async (key: string) => {
    if (!mapRef.current) return;

    try {
      const loader = new Loader({
        apiKey: key,
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker');

      const mapInstance = new Map(mapRef.current, {
        center: coordinates,
        zoom: 15,
        mapTypeId: 'terrain',
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }],
          },
        ],
      });

      // Add marker for monastery
      new Marker({
        position: coordinates,
        map: mapInstance,
        title: title,
        icon: {
          url: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#dc2626" stroke="#fff" stroke-width="2"/>
              <path d="M20 10l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" fill="#fff"/>
            </svg>
          `),
          scaledSize: new google.maps.Size(40, 40),
        },
      });

      setMap(mapInstance);
      setIsLoading(false);
      setShowApiKeyInput(false);
    } catch (error) {
      console.error('Error loading Google Maps:', error);
      setIsLoading(false);
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      setIsLoading(true);
      initializeMap(apiKey.trim());
    }
  };

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
    window.open(url, '_blank');
  };

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
    window.open(url, '_blank');
  };

  if (showApiKeyInput) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              To display the interactive map, please enter your Google Maps API key:
            </p>
            <form onSubmit={handleApiKeySubmit} className="space-y-3">
              <Input
                type="password"
                placeholder="Enter Google Maps API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <Button type="submit" disabled={!apiKey.trim()} className="w-full">
                Load Map
              </Button>
            </form>
            <div className="space-y-2">
              <Button onClick={openInGoogleMaps} variant="outline" className="w-full">
                <MapPin className="h-4 w-4 mr-2" />
                View in Google Maps
              </Button>
              <Button onClick={getDirections} variant="outline" className="w-full">
                <Navigation className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Don't have an API key? Get one from{' '}
              <a
                href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Maps Platform
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <MapPin className="h-5 w-5 mr-2" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Loading map...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div ref={mapRef} className="h-64 w-full rounded-lg" />
            <div className="grid grid-cols-2 gap-2">
              <Button onClick={openInGoogleMaps} variant="outline" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                View in Maps
              </Button>
              <Button onClick={getDirections} variant="outline" size="sm">
                <Navigation className="h-4 w-4 mr-2" />
                Directions
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              {address}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}