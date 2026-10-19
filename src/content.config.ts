import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import kategori from './data/kategori.json';

const slugs = (list: { slug: string }[]) => list.map((k) => k.slug) as [string, ...string[]];

const artikel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artikel' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(slugs(kategori.artikel)),
    // sub-kategori (opsional), harus salah satu "sub" milik kategori di src/data/kategori.json
    subcategory: z.string().optional(),
    // gambar utama / sampul artikel (alamat di folder public, contoh /images/artikel/slug/sampul.webp)
    image: z.string().optional(),
    imageAlt: z.string().optional(),
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
    category: z.enum(slugs(kategori.sop)),
    pdfFile: z.string(),
    draft: z.boolean().default(false),
  }),
});

const halaman = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/halaman' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    eyebrow: z.string().default('Info'),
    lead: z.string().optional(),
    // bila diisi slug kategori, halaman ini menjadi "pintu" kategori: menampilkan sub-kategori & artikelnya
    kategori: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { artikel, sop, halaman };
