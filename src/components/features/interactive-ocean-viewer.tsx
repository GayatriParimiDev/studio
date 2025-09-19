'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Droplets, Fish, Thermometer } from 'lucide-react';

const dataPoints = [
  { id: 1, top: '25%', left: '20%', title: 'North Atlantic Gyre', data: 'High Salinity Anomaly', icon: Droplets },
  { id: 2, top: '50%', left: '70%', title: 'Great Barrier Reef', data: 'Coral Bleaching Event', icon: Thermometer },
  { id: 3, top: '65%', left: '15%', title: 'Peruvian Upwelling', data: 'High Anchovy Biomass', icon: Fish },
  { id: 4, top: '80%', left: '55%', title: 'Southern Ocean', data: 'High Plankton Density', icon: Droplets },
  { id: 5, top: '30%', left: '55%', title: 'Indian Ocean Dipole', data: 'SST Fluctuation', icon: Thermometer },
];

export default function InteractiveOceanViewer() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'ocean-map');

  return (
    <Card className="w-full h-full bg-card/70 backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-accent">Interactive Ocean Viewer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border">
          {mapImage && (
            <Image
              src={mapImage.imageUrl}
              alt={mapImage.description}
              fill
              className="object-cover"
              data-ai-hint={mapImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-blue-900/40" />

          {dataPoints.map((point) => (
            <Popover key={point.id}>
              <PopoverTrigger asChild>
                <button
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: point.top, left: point.left }}
                >
                  <div className="w-4 h-4 rounded-full bg-accent animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-accent/50 scale-150 animate-ping" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto" side="top">
                <div className="flex items-center gap-4">
                  <point.icon className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-bold">{point.title}</h4>
                    <p className="text-sm text-muted-foreground">{point.data}</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
