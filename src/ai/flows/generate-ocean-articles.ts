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
  content: z.string().describe('The full content of the article.'),
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
  prompt: `You are a marine science content creator. Generate a list of 3 recent, engaging mini-articles about the provided topic. For each article, create a compelling title and write the full article content (around 2-3 paragraphs).

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
