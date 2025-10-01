'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Microscope } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function OtolithShape({
  length,
  width,
  rings,
}: {
  length: number;
  width: number;
  rings: number;
}) {
  const viewBoxWidth = 200;
  const viewBoxHeight = 150;
  const scaleX = (length / 100) * 0.8 + 0.2;
  const scaleY = (width / 100) * 0.8 + 0.2;

  const centerX = viewBoxWidth / 2;
  const centerY = viewBoxHeight / 2;

  const pathData = `
    M ${centerX - 80 * scaleX}, ${centerY}
    C ${centerX - 80 * scaleX}, ${centerY - 40 * scaleY}
      ${centerX - 30 * scaleX}, ${centerY - 60 * scaleY}
      ${centerX}, ${centerY - 60 * scaleY}
    S ${centerX + 80 * scaleX}, ${centerY - 40 * scaleY}
      ${centerX + 80 * scaleX}, ${centerY}
    S ${centerX + 30 * scaleX}, ${centerY + 60 * scaleY}
      ${centerX}, ${centerY + 60 * scaleY}
    S ${centerX - 80 * scaleX}, ${centerY + 40 * scaleY}
      ${centerX - 80 * scaleX}, ${centerY}
    Z
  `;

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-background flex items-center justify-center p-4">
       <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d={pathData} fill="hsl(var(--muted))" stroke="hsl(var(--primary))" strokeWidth="1" />
        {Array.from({ length: rings }).map((_, i) => {
           const ringScale = 1 - (i + 1) / (rings + 1) * 0.9;
           const ringPathData = `
            M ${centerX - 80 * scaleX * ringScale}, ${centerY}
            C ${centerX - 80 * scaleX * ringScale}, ${centerY - 40 * scaleY * ringScale}
              ${centerX - 30 * scaleX * ringScale}, ${centerY - 60 * scaleY * ringScale}
              ${centerX}, ${centerY - 60 * scaleY * ringScale}
            S ${centerX + 80 * scaleX * ringScale}, ${centerY - 40 * scaleY * ringScale}
              ${centerX + 80 * scaleX * ringScale}, ${centerY}
            S ${centerX + 30 * scaleX * ringScale}, ${centerY + 60 * scaleY * ringScale}
              ${centerX}, ${centerY + 60 * scaleY * ringScale}
            S ${centerX - 80 * scaleX * ringScale}, ${centerY + 40 * scaleY * ringScale}
              ${centerX - 80 * scaleX * ringScale}, ${centerY}
            Z
          `;
          return <path key={i} d={ringPathData} fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity={0.5} />;
        })}
         <circle cx={centerX} cy={centerY} r="1.5" fill="hsl(var(--accent))" />
      </svg>
    </div>
  );
}


export default function OtolithVisualizer() {
  const [length, setLength] = useState(50);
  const [width, setWidth] = useState(50);
  const [rings, setRings] = useState(5);
  const otolithImage = PlaceHolderImages.find(img => img.id === 'otolith');

  return (
    <Card className="w-full bg-card/70 backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-accent flex items-center gap-2">
          <Microscope /> Otolith Visualizer
        </CardTitle>
        <CardDescription>
          Interactive visualization for otolith shape and morphometrics analysis. Adjust the sliders to see how otolith characteristics change.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className='space-y-4'>
                <OtolithShape length={length} width={width} rings={rings} />
                <h3 className='text-center font-semibold text-muted-foreground'>Interactive Model</h3>
            </div>
            <div className='space-y-4'>
                {otolithImage && (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border">
                         <Image
                            src={otolithImage.imageUrl}
                            alt={otolithImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={otolithImage.imageHint}
                        />
                    </div>
                )}
                 <h3 className='text-center font-semibold text-muted-foreground'>Reference Image</h3>
            </div>
          <div className="space-y-6 md:col-span-2">
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
