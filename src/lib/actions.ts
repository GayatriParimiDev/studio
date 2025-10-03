'use server';

import {
  crossDomainCorrelation,
  type CrossDomainCorrelationInput,
  type CrossDomainCorrelationOutput,
} from '@/ai/flows/cross-domain-correlation';
import {
  generateOceanArticles,
  type OceanArticleInput,
  type OceanArticleOutput,
} from '@/ai/flows/generate-ocean-articles';
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

const OceanArticleInputSchema = z.object({
  topic: z.string(),
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

export async function runGenerateOceanArticles(
  input: OceanArticleInput
): Promise<OceanArticleOutput> {
  const validatedInput = OceanArticleInputSchema.parse(input);
  return await generateOceanArticles(validatedInput);
}
