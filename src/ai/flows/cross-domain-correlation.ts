'use server';

/**
 * @fileOverview Performs cross-disciplinary correlation analysis to study relationships between ocean parameters,
 * biodiversity, fish distribution, and ecosystem health.
 *
 * - crossDomainCorrelation - A function that handles the cross domain correlation process.
 * - CrossDomainCorrelationInput - The input type for the crossDomainCorrelation function.
 * - CrossDomainCorrelationOutput - The return type for the crossDomainCorrelation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DatasetSelectionSchema = z.object({
  oceanographicDatasets: z
    .array(z.string())
    .describe('List of selected oceanographic datasets.'),
  biodiversityDatasets: z
    .array(z.string())
    .describe('List of selected biodiversity datasets.'),
});

const CorrelationAnalysisParametersSchema = z.object({
  correlationType: z
    .string()
    .describe('Type of correlation analysis to perform (e.g., Pearson, Spearman).'),
  significanceLevel: z
    .number()
    .describe('Significance level for determining statistical significance.'),
});

const CrossDomainCorrelationInputSchema = z.object({
  datasetSelection: DatasetSelectionSchema.describe('Selected datasets for analysis.'),
  analysisParameters: CorrelationAnalysisParametersSchema.describe('Parameters for correlation analysis.'),
  searchRefinementQuery: z
    .string()
    .describe(
      'A query to refine the search and analysis based on specific research interests.'
    ),
});

export type CrossDomainCorrelationInput = z.infer<
  typeof CrossDomainCorrelationInputSchema
>;

const CrossDomainCorrelationOutputSchema = z.object({
  analysisResults: z.string().describe('The results of the cross-domain correlation analysis.'),
  insights: z.string().describe('Key insights derived from the analysis.'),
});

export type CrossDomainCorrelationOutput = z.infer<
  typeof CrossDomainCorrelationOutputSchema
>;

const datasetSelectorTool = ai.defineTool(
  {
    name: 'datasetSelector',
    description: 'Selects relevant oceanographic and biodiversity datasets based on user criteria.',
    inputSchema: z.object({
      keywords: z.string().describe('Keywords describing the desired datasets.'),
    }),
    outputSchema: z.object({
      oceanographicDatasets: z
        .array(z.string())
        .describe('List of relevant oceanographic datasets.'),
      biodiversityDatasets: z
        .array(z.string())
        .describe('List of relevant biodiversity datasets.'),
    }),
  },
  async (input) => {
    // Placeholder implementation for dataset selection based on keywords.
    // In a real application, this would query a database or external API.
    console.log(`Selecting datasets based on keywords: ${input.keywords}`);
    return {
      oceanographicDatasets: [
        'Temperature Data',
        'Salinity Data',
        'Nutrient Data',
      ],
      biodiversityDatasets: [
        'Fish Abundance Data',
        'Species Richness Data',
        'Plankton Biomass Data',
      ],
    };
  }
);

const correlationAnalysisPrompt = ai.definePrompt({
  name: 'correlationAnalysisPrompt',
  input: {schema: CrossDomainCorrelationInputSchema},
  output: {schema: CrossDomainCorrelationOutputSchema},
  tools: [datasetSelectorTool],
  prompt: `You are a marine data analyst. Use the datasetSelector tool to get relevant datasets. Analyze the relationship between the following oceanographic and biodiversity datasets, considering the analysis parameters and search refinement query provided.

Datasets: Oceanographic - {{{datasetSelection.oceanographicDatasets}}}, Biodiversity - {{{datasetSelection.biodiversityDatasets}}}
Analysis Parameters: Type - {{{analysisParameters.correlationType}}}, Significance - {{{analysisParameters.significanceLevel}}}
Search Refinement Query: {{{searchRefinementQuery}}}

Provide a concise analysis of the correlations found and key insights derived from the analysis.

Analysis Results: {{analysisResults}}
Insights: {{insights}}`,
});

const crossDomainCorrelationFlow = ai.defineFlow(
  {
    name: 'crossDomainCorrelationFlow',
    inputSchema: CrossDomainCorrelationInputSchema,
    outputSchema: CrossDomainCorrelationOutputSchema,
  },
  async input => {
    const {output} = await correlationAnalysisPrompt(input);
    return output!;
  }
);

export async function crossDomainCorrelation(
  input: CrossDomainCorrelationInput
): Promise<CrossDomainCorrelationOutput> {
  return crossDomainCorrelationFlow(input);
}
