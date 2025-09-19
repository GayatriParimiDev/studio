'use server';

import {
  crossDomainCorrelation,
  type CrossDomainCorrelationInput,
  type CrossDomainCorrelationOutput,
} from '@/ai/flows/cross-domain-correlation';
import {
  identifySpecies,
  type IdentifySpeciesInput,
  type IdentifySpeciesOutput,
} from '@/ai/flows/taxonomic-assistant-species-identification';
import { z } from 'zod';

const CrossDomainCorrelationInputSchema = z.object({
  datasetSelection: z.object({
    oceanographicDatasets: z.array(z.string()),
    biodiversityDatasets: z.array(z.string()),
  }),
  analysisParameters: z.object({
    correlationType: z.string(),
    significanceLevel: z.number(),
  }),
  searchRefinementQuery: z.string(),
});

const IdentifySpeciesInputSchema = z.object({
  characteristics: z.string().min(10, "Please provide more detailed characteristics."),
});

export async function runCrossDomainCorrelation(
  input: CrossDomainCorrelationInput
): Promise<CrossDomainCorrelationOutput> {
  const validatedInput = CrossDomainCorrelationInputSchema.parse(input);
  return await crossDomainCorrelation(validatedInput);
}

export async function runIdentifySpecies(
  input: IdentifySpeciesInput
): Promise<IdentifySpeciesOutput> {
  const validatedInput = IdentifySpeciesInputSchema.parse(input);
  return await identifySpecies(validatedInput);
}
