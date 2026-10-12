import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artikel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artikel' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'operasi-produksi',
      'alat-berat',
      'geologi-eksplorasi',
      'k3-tambang',
      'karier-regulasi',
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const sop = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sop' }),
  schema: z.object({
    title: z.string(),
    docCode: z.string(),
    docType: z.enum(['SOP', 'IK']),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['operasional-tambang', 'k3-lingkungan', 'perawatan-alat', 'logistik-stockpile']),
    pdfFile: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { artikel, sop };
