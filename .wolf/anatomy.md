# anatomy.md

> Auto-maintained by OpenWolf. Last scanned: 2026-06-22T19:42:24.917Z
> Files: 90 tracked | Anatomy hits: 0 | Misses: 0

## ./

- `.gitignore` — Git ignore rules (~79 tok)
- `astro.config.mjs` — Astro configuration (~190 tok)
- `CLAUDE.md` — OpenWolf (~57 tok)
- `lh2.json` (~112987 tok)
- `package-lock.json` — npm lock file (~75279 tok)
- `package.json` — Node.js package manifest (~202 tok)
- `tsconfig.json` — TypeScript configuration (~66 tok)

## .astro/

- `content-assets.mjs` (~8391 tok)
- `content-modules.mjs` (~7 tok)
- `content.d.ts` — Exports RenderResult, RenderedContent, CollectionKey, CollectionEntry + 22 more (~2087 tok)
- `data-store.json` (~12327 tok)
- `settings.json` (~17 tok)
- `types.d.ts` — / <reference types="astro/client" /> (~22 tok)

## .astro/collections/

- `artworks.schema.json` (~541 tok)
- `interiors.schema.json` (~489 tok)

## .claude/

- `settings.json` (~441 tok)
- `settings.local.json` (~35 tok)

## .claude/rules/

- `openwolf.md` (~313 tok)

## doc/

- `DESIGN-SPEC.md` — Design Spec — Jaspis Idea (portfolio) (~2432 tok)
- `PRD-portfolio.md` — PRD — Strona portfolio: artystka i projektantka wnętrz (~2524 tok)

## public/

- `robots.txt` (~19 tok)

## scripts/

- `generate-og.mjs` — Generuje domyślny obraz OG (1200×630) z logo + tekstem marki. (~404 tok)

## src/

- `content.config.ts` — Exports collections (~708 tok)

## src/components/gallery/

- `CategoryTile.astro` — Astro: CategoryTile (~208 tok)
- `GalleryItem.astro` — Link do podstrony (np. case wnętrza). Wyklucza się z lightbox. (~857 tok)

## src/components/sections/

- `AboutTeaser.astro` — Astro: AboutTeaser (~334 tok)
- `ContactCTA.astro` — Astro: ContactCTA (~218 tok)
- `ContactForm.astro` — Astro: ContactForm (~2053 tok)
- `Hero.astro` — Astro: Hero (~206 tok)
- `Pillars.astro` — Astro: Pillars (~593 tok)
- `SelectedWorks.astro` — Astro: SelectedWorks (~711 tok)

## src/components/seo/

- `JsonLd.astro` — Renderuje blok JSON-LD. Przekaz dowolny obiekt schema.org. (~65 tok)

## src/components/ui/

- `Badge.astro` — Tekst badge; domyślnie etykieta UV z i18n. (~165 tok)
- `Button.astro` — Astro: Button, 2 slot(s) (~183 tok)
- `Footer.astro` — Astro: Footer (~642 tok)
- `Header.astro` — Astro: Header (~754 tok)
- `Lightbox.astro` — Astro: Lightbox (~1628 tok)
- `Logo.astro` — Wysokość logo w px (szerokość auto wg proporcji). Domyślnie 30 (DESIGN-SPEC §6). (~115 tok)

## src/content/artworks/

- `.gitkeep` (~0 tok)
- `malarstwo-chlopczyk.md` (~46 tok)
- `malarstwo-dzieci-kompozycja.md` (~49 tok)
- `malarstwo-dziewczynka.md` (~48 tok)
- `malarstwo-maki.md` (~49 tok)
- `malarstwo-pomarancza.md` (~48 tok)
- `malarstwo-portret-i.md` (~46 tok)
- `malarstwo-portret-ii.md` (~46 tok)
- `malarstwo-sakralne-i.md` (~47 tok)
- `malarstwo-sakralne-ii.md` (~47 tok)
- `malarstwo-sakralne-iii.md` (~48 tok)
- `malarstwo-sakralne-iv.md` (~48 tok)
- `malarstwo-seria3-06.md` (~47 tok)
- `malarstwo-seria3-z3.md` (~53 tok)
- `malarstwo-seria3-z4.md` (~47 tok)
- `malarstwo-seria3-z5.md` (~47 tok)
- `malarstwo-seria3-z7.md` (~47 tok)
- `malarstwo-seria3-zmz9.md` (~48 tok)
- `meble-kiss.md` (~135 tok)
- `meble-lips.md` (~100 tok)
- `meble-warszawa.md` (~168 tok)
- `mozaika-a1.md` (~42 tok)
- `mozaika-a2.md` (~41 tok)
- `mural-pub.md` (~110 tok)
- `rysunek-000.md` (~44 tok)
- `rysunek-001.md` (~49 tok)
- `rysunek-002.md` (~45 tok)
- `rysunek-005.md` (~44 tok)
- `rysunek-006.md` (~44 tok)

## src/content/interiors/

- `.gitkeep` (~0 tok)
- `cleopatra.md` (~117 tok)
- `herbarium-realizacja.md` (~590 tok)
- `herbarium.md` (~607 tok)
- `olsztyn.md` (~182 tok)
- `poddasze-herbarium.md` (~434 tok)
- `poddasze-olsztyn.md` (~408 tok)
- `sheherezada.md` (~126 tok)

## src/i18n/

- `da.json` (~77 tok)
- `pl.json` (~1590 tok)
- `utils.ts` — Zwraca funkcję t() dla danego języka. (~437 tok)

## src/layouts/

- `BaseLayout.astro` — Ścieżka do obrazu OG (względem site). Domyślnie brandowy /og-default.png. (~1049 tok)
- `GalleryLayout.astro` — Eyebrow / etykieta sekcji (DESIGN-SPEC §3 wzorzec wersalików) (~183 tok)

## src/lib/

- `categories.ts` — Klucz tintu w tokens.css (np. --tint-malarstwo-1). (~408 tok)

## src/pages/

- `index.astro` — Astro: index, 7 imports (~271 tok)
- `kontakt.astro` — Astro: kontakt (~258 tok)
- `o-mnie.astro` — Astro: o-mnie, 4 imports (~664 tok)

## src/pages/sztuka/

- `[kategoria].astro` — Astro: [kategoria] (~669 tok)
- `index.astro` — Astro: index (~306 tok)

## src/pages/wnetrza/

- `[slug].astro` — Astro: [slug], 4 imports (~1075 tok)
- `index.astro` — Astro: index (~348 tok)

## src/styles/

- `global.css` — Styles: 9 rules, 12 vars, 2 media queries, 2 layers (~999 tok)
- `tokens.css` — Styles: 31 vars (~483 tok)
