'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { runCrossDomainCorrelation } from '@/lib/actions';
import { type CrossDomainCorrelationOutput } from '@/ai/flows/cross-domain-correlation';
import { Unplug, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  oceanographicDatasets: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one oceanographic dataset.",
  }),
  biodiversityDatasets: z.array(z.string()).refine((value) => value.some((item) => item), {
     message: "You have to select at least one biodiversity dataset.",
  }),
  searchRefinementQuery: z.string().min(1, 'Refinement query is required.'),
});

const oceanographicItems = [
    { id: 'temp', label: 'Temperature Data' },
    { id: 'salinity', label: 'Salinity Data' },
    { id: 'nutrient', label: 'Nutrient Data' },
]

const biodiversityItems = [
    { id: 'fish', label: 'Fish Abundance Data' },
    { id: 'species', label: 'Species Richness Data' },
    { id: 'plankton', label: 'Plankton Biomass Data' },
]

export default function CorrelationForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CrossDomainCorrelationOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        oceanographicDatasets: ["temp", "salinity"],
        biodiversityDatasets: ["fish"],
        searchRefinementQuery: "Impact of rising sea temperatures on coastal fish populations"
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setResult(null);

    const input = {
      datasetSelection: {
        oceanographicDatasets: values.oceanographicDatasets.map(id => oceanographicItems.find(i => i.id === id)!.label),
        biodiversityDatasets: values.biodiversityDatasets.map(id => biodiversityItems.find(i => i.id === id)!.label),
      },
      analysisParameters: {
        correlationType: 'Pearson',
        significanceLevel: 0.05,
      },
      searchRefinementQuery: values.searchRefinementQuery,
    };

    try {
      const response = await runCrossDomainCorrelation(input);
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: 'An error occurred while running the correlation analysis.',
        action: <AlertCircle />,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='space-y-6'>
    <Card className="w-full bg-card/70 backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-accent flex items-center gap-2">
          <Unplug /> Cross-Domain Correlation Analysis
        </CardTitle>
        <CardDescription>
          Study relationships between ocean parameters, biodiversity, fish distribution, and ecosystem health.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                <FormField
                control={form.control}
                name="oceanographicDatasets"
                render={() => (
                    <FormItem>
                    <div className="mb-4">
                        <FormLabel className="text-base">Oceanographic Datasets</FormLabel>
                    </div>
                    {oceanographicItems.map((item) => (
                        <FormField
                        key={item.id}
                        control={form.control}
                        name="oceanographicDatasets"
                        render={({ field }) => {
                            return (
                            <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                    return checked
                                        ? field.onChange([...(field.value || []), item.id])
                                        : field.onChange(
                                            field.value?.filter(
                                            (value) => value !== item.id
                                            )
                                        )
                                    }}
                                />
                                </FormControl>
                                <FormLabel className="font-normal">{item.label}</FormLabel>
                            </FormItem>
                            )
                        }}
                        />
                    ))}
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="biodiversityDatasets"
                render={() => (
                    <FormItem>
                    <div className="mb-4">
                        <FormLabel className="text-base">Biodiversity Datasets</FormLabel>
                    </div>
                    {biodiversityItems.map((item) => (
                        <FormField
                        key={item.id}
                        control={form.control}
                        name="biodiversityDatasets"
                        render={({ field }) => {
                            return (
                            <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                    return checked
                                        ? field.onChange([...(field.value || []), item.id])
                                        : field.onChange(
                                            field.value?.filter(
                                            (value) => value !== item.id
                                            )
                                        )
                                    }}
                                />
                                </FormControl>
                                <FormLabel className="font-normal">{item.label}</FormLabel>
                            </FormItem>
                            )
                        }}
                        />
                    ))}
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            
            <FormField
              control={form.control}
              name="searchRefinementQuery"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Research Focus</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Impact of rising sea temperatures on coastal fish populations" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
              {isLoading ? 'Analyzing...' : 'Run AI Analysis'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>

    {isLoading && (
         <Card className="w-full bg-card/70 backdrop-blur-lg animate-pulse">
            <CardHeader><CardTitle>Generating Analysis...</CardTitle></CardHeader>
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
                    <Sparkles /> Analysis Results
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 prose prose-invert max-w-none">
                <h3 className="text-lg font-semibold text-primary">Key Insights</h3>
                <p>{result.insights}</p>
                <Separator />
                <h3 className="text-lg font-semibold text-primary">Analysis Details</h3>
                <p>{result.analysisResults}</p>
            </CardContent>
        </Card>
    )}
    </div>
  );
}
