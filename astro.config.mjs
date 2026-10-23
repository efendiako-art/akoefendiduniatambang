// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * Alamat yang TIDAK dimasukkan ke peta situs (sitemap) untuk Google:
 * - halaman sub-kategori / kategori yang belum punya artikel (halamannya bertanda noindex)
 * - halaman /kategori/<slug>/ yang sudah punya halaman pintu (alamat utamanya halaman pintu itu)
 * Peta situs hanya berisi halaman yang memang ingin diindeks, supaya laporan Search Console bersih.
 */
function sitemapExclusions() {
  const dir = (p) => fileURLToPath(new URL(p, import.meta.url));
  const read = (p) => fs.readFileSync(p, 'utf-8');
  const fm = (text) => (text.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || '';
  const field = (f, key) => (f.match(new RegExp(`^${key}:\\s*['"]?([\\w-]+)`, 'm')) || [])[1];
  const isDraft = (f) => /^draft:\s*true/m.test(f);
  const list = (d) => (fs.existsSync(dir(d)) ? fs.readdirSync(dir(d)).filter((n) => n.endsWith('.md')).map((n) => fm(read(dir(d) + '/' + n))) : []);

  const kategori = JSON.parse(read(dir('./src/data/kategori.json')));
  const posts = list('./src/content/artikel/').filter((f) => !isDraft(f)).map((f) => ({ cat: field(f, 'category'), sub: field(f, 'subcategory') }));
  const hubs = new Set(list('./src/content/halaman/').filter((f) => !isDraft(f)).map((f) => field(f, 'kategori')).filter(Boolean));

  const out = new Set();
  for (const c of kategori.artikel || []) {
    const n = posts.filter((p) => p.cat === c.slug).length;
    if (n === 0 || hubs.has(c.slug)) out.add(`/kategori/${c.slug}/`);
    for (const s of c.sub || []) {
      if (!posts.some((p) => p.cat === c.slug && p.sub === s.slug)) out.add(`/kategori/${c.slug}/${s.slug}/`);
    }
  }
  return out;
}
const EXCLUDE = sitemapExclusions();

// Ganti dengan domain Anda setelah online (contoh: https://tambangpedia.com)
export default defineConfig({
  site: 'https://tambangpedia.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !EXCLUDE.has(new URL(page).pathname) })],
});
