'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { runIdentifySpecies } from '@/lib/actions';
import { type IdentifySpeciesOutput } from '@/ai/flows/taxonomic-assistant-species-identification';
import { Ship, Loader2, Sparkles, AlertCircle, Trees, Binary } from 'lucide-react';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  characteristics: z.string().min(10, 'Please provide detailed characteristics for identification.'),
});

export default function TaxonomicAssistant() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<IdentifySpeciesOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        characteristics: "A small, silvery fish with a single dorsal fin, a forked tail, and large eyes. Found in deep, cold Atlantic waters. Approximately 15cm in length."
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await runIdentifySpecies(values);
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Identification Failed',
        description: 'An error occurred while identifying the species.',
        action: <AlertCircle />,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="w-full bg-card/70 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-accent flex items-center gap-2">
            <Ship /> Taxonomic Assistant
          </CardTitle>
          <CardDescription>
            Utilize AI to identify unknown species based on their characteristics.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="characteristics"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Species Characteristics</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Small, silver-colored fish with a prominent dorsal fin..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                {isLoading ? 'Identifying...' : 'Identify Species'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isLoading && (
         <Card className="w-full bg-card/70 backdrop-blur-lg animate-pulse">
            <CardHeader><CardTitle>AI is Identifying...</CardTitle></CardHeader>
            <CardContent className='space-y-4'>
                <div className='h-4 bg-muted rounded w-1/4'></div>
                <div className='h-4 bg-muted rounded w-full'></div>
                <div className='h-4 bg-muted rounded w-3/4'></div>
                <Separator />
                <div className='h-4 bg-muted rounded w-1/4'></div>
                <div className='h-4 bg-muted rounded w-full'></div>
                <div className='h-4 bg-muted rounded w-2/3'></div>
            </CardContent>
         </Card>
      )}

      {result && (
        <Card className="w-full bg-card/70 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-accent flex items-center gap-2">
              <Sparkles /> Identification Result
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2"><Binary/> Taxonomic Classification</h3>
              <p className="text-muted-foreground">{result.classification}</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2"><Trees/> Potential Habitats</h3>
              <p className="text-muted-foreground">{result.potentialHabitats}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
