'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '../ui/textarea';
import { Dna, Search, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function EdnaModule() {
  const { toast } = useToast();
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get('query') as string;
    // Simulate search
    setSearchResult(`Search results for sequence ID: ${query}. Match found: Gadus morhua (Atlantic Cod). Confidence: 99.8%.`);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
        title: 'Submission Received',
        description: 'Your eDNA sequence has been submitted for processing.'
    })
  }

  return (
    <Card className="w-full bg-card/70 backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-accent flex items-center gap-2">
          <Dna /> eDNA Data Module
        </CardTitle>
        <CardDescription>
          Secure storage, retrieval, and species matching for molecular and eDNA data.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="search" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="search">
              <Search className="mr-2 h-4 w-4" /> Species Matching
            </TabsTrigger>
            <TabsTrigger value="submit">
              <Upload className="mr-2 h-4 w-4" /> Submit Data
            </TabsTrigger>
          </TabsList>
          <TabsContent value="search" className="mt-6">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="search-query">eDNA Sequence ID or Snippet</Label>
                <Input id="search-query" name="query" placeholder="Enter sequence ID..." />
              </div>
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Search className="mr-2 h-4 w-4" /> Match Sequence
              </Button>
            </form>
            {searchResult && (
                <div className='mt-6 p-4 border rounded-lg bg-muted/50'>
                    <p className='font-mono text-sm'>{searchResult}</p>
                </div>
            )}
          </TabsContent>
          <TabsContent value="submit" className="mt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sequence-id">Sequence ID</Label>
                <Input id="sequence-id" placeholder="Unique identifier for the sequence" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sequence-data">Raw Sequence Data</Label>
                <Textarea id="sequence-data" placeholder="Paste raw FASTA or FASTQ data here..." className="min-h-[150px] font-mono" />
              </div>
              <Button type="submit">Submit for Analysis</Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
