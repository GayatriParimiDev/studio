'use server';
/**
 * @fileOverview An AI-powered tool to identify unknown species from input characteristics.
 *
 * - identifySpecies - A function that handles the species identification process.
 * - IdentifySpeciesInput - The input type for the identifySpecies function.
 * - IdentifySpeciesOutput - The return type for the identifySpecies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdentifySpeciesInputSchema = z.object({
  characteristics: z
    .string()
    .describe('The key characteristics of the unknown species.'),
});
export type IdentifySpeciesInput = z.infer<typeof IdentifySpeciesInputSchema>;

const IdentifySpeciesOutputSchema = z.object({
  classification: z.string().describe('The taxonomic classification of the species.'),
  potentialHabitats: z
    .string()
    .describe('The potential habitats where the species can be found.'),
});
export type IdentifySpeciesOutput = z.infer<typeof IdentifySpeciesOutputSchema>;

export async function identifySpecies(input: IdentifySpeciesInput): Promise<IdentifySpeciesOutput> {
  return identifySpeciesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'identifySpeciesPrompt',
  input: {schema: IdentifySpeciesInputSchema},
  output: {schema: IdentifySpeciesOutputSchema},
  prompt: `You are an expert marine biologist specializing in species identification.

  Based on the provided characteristics, provide the taxonomic classification and potential habitats of the unknown species.

  Characteristics: {{{characteristics}}}
  `,
});

const identifySpeciesFlow = ai.defineFlow(
  {
    name: 'identifySpeciesFlow',
    inputSchema: IdentifySpeciesInputSchema,
    outputSchema: IdentifySpeciesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
