import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
 * Content Collections — Astro 6 Content Layer (glob loader).
 * Modele wg PRD §5. Dodano pole `alt` (a11y / WCAG — PRD §7, DESIGN-SPEC §7).
 * Galeria modelowana jako { src, alt } — każdy obraz ma własny alt-text
 * (świadome rozszerzenie `image[]` z PRD, by spełnić Definition of Done).
 * id wpisu pochodzi z nazwy pliku — służy jako slug w trasach.
 */

const interiors = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/interiors' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      location: z.string().optional(),
      category: z.enum(['mieszkanie', 'dom', 'komercyjne', 'inne']),
      cover: image().optional(), // brak = gradientowy placeholder wg kategorii
      alt: z.string().optional(), // wymagany gdy jest cover (a11y)
      gallery: z
        .array(z.object({ src: image(), alt: z.string() }))
        .default([]),
      description: z.string(),
      scope: z.array(z.string()).optional(),
      video: z.string().optional(), // URL do /public/videos/xxx.mp4
      featured: z.boolean().default(false),
      order: z.number().optional(), // kuratorowana kolejność (np. selected works)
    }),
});

const artworks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artworks' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['malarstwo', 'meble', 'dekoracje', 'sciany', 'rysunki', 'mozaiki']),
      year: z.number().optional(),
      cover: image().optional(), // brak = gradientowy placeholder wg kategorii
      alt: z.string().optional(), // wymagany gdy jest cover (a11y)
      gallery: z
        .array(z.object({ src: image(), alt: z.string() }))
        .optional(),
      medium: z.string().optional(), // np. "olej na płótnie", "akryl UV"
      dimensions: z.string().optional(), // np. "60 × 80 cm"
      isUV: z.boolean().default(false), // flaga malarstwa ściennego UV -> badge
      forSale: z.boolean().default(false), // info, nie sklep
      etsyUrl: z.string().url().optional(),
      description: z.string().optional(),
      video: z.string().optional(), // URL do /public/videos/xxx.mp4
      featured: z.boolean().default(false),
      order: z.number().optional(), // kuratorowana kolejność (np. selected works)
    }),
});

export const collections = { interiors, artworks };
