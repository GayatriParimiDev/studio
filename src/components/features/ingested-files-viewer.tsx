'use client';

import { useIngestion } from '@/context/ingestion-context';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FileCheck } from 'lucide-react';
import { format } from 'date-fns';

export default function IngestedFilesViewer() {
  const { ingestedFiles } = useIngestion();

  return (
    <Card className="w-full bg-card/70 backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-accent flex items-center gap-2">
          <FileCheck /> Recently Ingested Datasets
        </CardTitle>
        <CardDescription>
          A log of the datasets you have recently uploaded. This list will reset
          if you refresh the page.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {ingestedFiles.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>Dataset Type</TableHead>
                <TableHead>Ingestion Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ingestedFiles.map((file, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{file.name}</TableCell>
                  <TableCell className="capitalize">{file.type}</TableCell>
                  <TableCell>{format(file.ingestedAt, 'PPpp')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center text-muted-foreground py-8">
            No datasets have been ingested in this session yet.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
