'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Upload, Loader2, CheckCircle } from 'lucide-react';
import { useIngestion } from '@/context/ingestion-context';

const formSchema = z.object({
  dataType: z.string({ required_error: 'Please select a data type.' }),
  file: z.any().refine((files) => files?.length == 1, 'File is required.'),
});

export default function IngestionForm() {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const { addIngestedFile } = useIngestion();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dataType: undefined,
      file: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsUploading(true);
    const file = values.file[0];

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);

      const newFile = {
        name: file.name,
        type: values.dataType,
        ingestedAt: new Date(),
      };
      addIngestedFile(newFile);

      toast({
        title: 'Upload Successful',
        description: `${file.name} has been ingested successfully.`,
        action: <CheckCircle className="text-green-500" />,
      });

      form.reset({ dataType: values.dataType, file: undefined });
      const fileInput = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card className="w-full bg-card/70 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-accent flex items-center gap-2">
            <Upload /> Data Ingestion
          </CardTitle>
          <CardDescription>
            Upload oceanographic, fisheries, taxonomic, otolith morphology, and
            molecular biodiversity datasets.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="dataType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dataset Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a dataset type to upload" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="oceanographic">
                          Oceanographic Data
                        </SelectItem>
                        <SelectItem value="fisheries">Fisheries Data</SelectItem>
                        <SelectItem value="taxonomic">Taxonomic Data</SelectItem>
                        <SelectItem value="otolith">
                          Otolith Morphology
                        </SelectItem>
                        <SelectItem value="edna">Molecular/eDNA Data</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dataset File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="file:text-primary"
                        onChange={(e) => field.onChange(e.target.files)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isUploading}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Ingesting...
                  </>
                ) : (
                  'Ingest Data'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
