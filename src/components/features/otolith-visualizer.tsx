'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Microscope } from 'lucide-react';
import { useState } from 'react';

export default function OtolithVisualizer() {
  const otolithImage = PlaceHolderImages.find((img) => img.id === 'otolith');
  const [length, setLength] = useState(50);
  const [width, setWidth] = useState(50);
  const [rings, setRings] = useState(5);

  return (
    <Card className="w-full bg-card/70 backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-accent flex items-center gap-2">
          <Microscope /> Otolith Visualizer
        </CardTitle>
        <CardDescription>
          Interactive visualization for otolith shape and morphometrics analysis.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border">
            {otolithImage && (
              <Image
                src={otolithImage.imageUrl}
                alt={otolithImage.description}
                fill
                className="object-cover"
                data-ai-hint={otolithImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="length-slider">Length: {length} mm</Label>
              <Slider
                id="length-slider"
                defaultValue={[length]}
                max={100}
                step={1}
                onValueChange={(value) => setLength(value[0])}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="width-slider">Width: {width} mm</Label>
              <Slider
                id="width-slider"
                defaultValue={[width]}
                max={100}
                step={1}
                onValueChange={(value) => setWidth(value[0])}
              />
            </div>
             <div className="space-y-2">
              <Label htmlFor="rings-slider">Growth Rings: {rings}</Label>
              <Slider
                id="rings-slider"
                defaultValue={[rings]}
                max={20}
                step={1}
                onValueChange={(value) => setRings(value[0])}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
