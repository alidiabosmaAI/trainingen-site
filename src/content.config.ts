import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Elke training is een Markdown-bestand in src/content/trainingen/.
// Kopieer een bestaand bestand om een nieuwe training toe te voegen.
const trainingen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trainingen' }),
  schema: z.object({
    titel: z.string(),
    samenvatting: z.string(),
    thema: z.enum(['AI-geletterdheid', 'Algoritmisch bestuur', 'AI in de praktijk']),
    doelgroep: z.string(),
    duur: z.string(),
    vorm: z.array(z.string()),
    groepsgrootte: z.string(),
    prijsindicatie: z.string(),
    volgorde: z.number().default(99),
  }),
});

export const collections = { trainingen };
