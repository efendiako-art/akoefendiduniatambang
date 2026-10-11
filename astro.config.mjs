// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ganti dengan domain Anda setelah online (contoh: https://tambangpedia.com)
export default defineConfig({
  site: 'https://tambangpedia.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
