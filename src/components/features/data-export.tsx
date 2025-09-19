'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Download } from 'lucide-react';
import { useState } from 'react';

const datasets = [
  { id: '2023-temp-data', name: 'Global Sea Surface Temperature (2023)', size: '1.2 GB' },
  { id: '2023-salinity-data', name: 'Ocean Salinity Profiles (2023)', size: '800 MB' },
  { id: 'tuna-migration-q2', name: 'Bluefin Tuna Migration Patterns (Q2 2024)', size: '50 MB' },
  { id: 'edna-coral-sea', name: 'eDNA Survey - Coral Sea (2024)', size: '4.5 GB' },
  { id: 'plankton-density-na', name: 'North Atlantic Plankton Density (2023)', size: '320 MB' },
];

export default function DataExport() {
  const { toast } = useToast();
  const [selected, setSelected] = useState<string[]>([]);

  const handleDownload = () => {
    if (selected.length === 0) {
      toast({
        variant: 'destructive',
        title: 'No Datasets Selected',
        description: 'Please select at least one dataset to download.',
      });
      return;
    }
    toast({
      title: 'Download Started',
      description: `Your download of ${selected.length} dataset(s) has started.`,
    });
  };

  const handleSelect = (id: string) => {
    setSelected(prev => 
        prev.includes(id) 
            ? prev.filter(item => item !== id)
            : [...prev, id]
    );
  }

  return (
    <Card className="w-full bg-card/70 backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-accent flex items-center gap-2">
          <Download /> Data Export
        </CardTitle>
        <CardDescription>
          Select and download curated datasets in standard formats (CSV, NetCDF) for further analysis.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4 rounded-lg border p-4">
            <h3 className="font-semibold">Available Datasets</h3>
            {datasets.map(dataset => (
                <div key={dataset.id} className='flex items-center space-x-3'>
                    <Checkbox 
                        id={dataset.id} 
                        onCheckedChange={() => handleSelect(dataset.id)}
                        checked={selected.includes(dataset.id)}
                    />
                    <Label htmlFor={dataset.id} className="flex justify-between w-full cursor-pointer">
                        <span>{dataset.name}</span>
                        <span className="text-muted-foreground">{dataset.size}</span>
                    </Label>
                </div>
            ))}
        </div>
        <Button onClick={handleDownload} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Download className="mr-2 h-4 w-4" /> Download Selected ({selected.length})
        </Button>
      </CardContent>
    </Card>
  );
}
