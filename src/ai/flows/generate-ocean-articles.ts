'use server';
/**
 * @fileOverview Generates articles about marine topics using AI.
 *
 * - generateOceanArticles - A function that fetches articles on a given topic.
 * - OceanArticleInput - The input type for the generateOceanArticles function.
 * - OceanArticleOutput - The return type for the generateOceanArticles function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const OceanArticleInputSchema = z.object({
  topic: z.string().describe('The topic for the articles to be generated.'),
});
export type OceanArticleInput = z.infer<typeof OceanArticleInputSchema>;

const ArticleSchema = z.object({
  title: z.string().describe('The title of the article.'),
  summary: z.string().describe('A brief summary of the article content.'),
  link: z
    .string()
    .url()
    .describe('A URL to a real, publicly accessible source for the article.'),
});

const OceanArticleOutputSchema = z.object({
  articles: z
    .array(ArticleSchema)
    .describe('A list of generated articles.'),
});
export type OceanArticleOutput = z.infer<typeof OceanArticleOutputSchema>;

export async function generateOceanArticles(
  input: OceanArticleInput
): Promise<OceanArticleOutput> {
  return generateOceanArticlesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateOceanArticlesPrompt',
  input: { schema: OceanArticleInputSchema },
  output: { schema: OceanArticleOutputSchema },
  prompt: `You are a marine science research assistant. Generate a list of 5 recent, engaging mini-articles about the provided topic. For each article, create a compelling title, a concise summary, and find a URL to a real, publicly accessible article from a reputable source like National Geographic, Science Daily, a major university, or a scientific journal.

Topic: {{{topic}}}
`,
});

const generateOceanArticlesFlow = ai.defineFlow(
  {
    name: 'generateOceanArticlesFlow',
    inputSchema: OceanArticleInputSchema,
    outputSchema: OceanArticleOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
