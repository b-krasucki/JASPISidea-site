// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  // TODO: ustawić finalną domenę po decyzji klientki (potrzebne dla sitemap/SEO/OG)
  site: 'https://https://sales-suggested-riders-cruises.trycloudflare.com',
  output: 'static',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'da'],
    routing: {
      prefixDefaultLocale: false, // pl bez prefiksu; /da/ gotowe pod Fazę 2
    },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
});
