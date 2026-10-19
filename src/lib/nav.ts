// Menu atas website + sub-menu (dropdown).
// Sumber data: src/data/menu.json (menu) dan src/data/kategori.json (kategori & sub-kategori),
// keduanya diatur lewat aplikasi TambangPedia.
//
// Isi "dropdown" pada item menu:
//   "semua-kategori"        -> sub-menu = semua kategori artikel
//   "kategori:<slug>"       -> sub-menu = sub-kategori milik kategori itu (otomatis ikut bertambah)
//   "manual"                -> sub-menu = daftar "children" yang diisi sendiri
import { getCollection } from 'astro:content';
import menu from '../data/menu.json';
import { CATEGORIES } from '../consts';

export type NavChild = { label: string; href: string; desc?: string; count?: number; mono?: string };
export type NavItem = { label: string; href: string; children: NavChild[] };

type RawItem = { label: string; href: string; dropdown?: string; children?: { label: string; href: string; desc?: string }[] };

/** Halaman "pintu" kategori (halaman yang frontmatter-nya berisi kategori: <slug>). */
export async function categoryHubs(): Promise<Record<string, string>> {
  const pages = await getCollection('halaman', ({ data }) => !data.draft && !!data.kategori);
  return Object.fromEntries(pages.map((p) => [p.data.kategori as string, `/${p.id}/`]));
}

export const categoryHref = (hubs: Record<string, string>, slug: string) => hubs[slug] ?? `/kategori/${slug}/`;

/** Dua huruf penanda untuk ikon kecil di sub-menu, contoh "Tutorial Software Deswik CAD" -> "DC". */
export function monogram(name: string) {
  const skip = /^(tutorial|software|sofware|dan|&|\(|-)$/i;
  const words = name.replace(/[()]/g, ' ').split(/\s+/).filter((w) => w && !skip.test(w));
  const letters = words.slice(0, 2).map((w) => w[0]).join('');
  return (letters || name.slice(0, 2)).toUpperCase();
}

export async function buildNav(): Promise<NavItem[]> {
  const posts = await getCollection('artikel', ({ data }) => !data.draft);
  const hubs = await categoryHubs();
  const count = (cat: string, sub?: string) =>
    posts.filter((p) => p.data.category === cat && (!sub || p.data.subcategory === sub)).length;

  return (menu.atas as RawItem[]).map((n) => {
    const mode = n.dropdown || (n.children?.length ? 'manual' : '');
    let children: NavChild[] = [];
    if (mode === 'semua-kategori') {
      children = CATEGORIES.map((c) => ({ label: c.name, href: categoryHref(hubs, c.slug), desc: c.desc, count: count(c.slug), mono: monogram(c.name) }));
    } else if (mode.startsWith('kategori:')) {
      const cat = CATEGORIES.find((c) => c.slug === mode.slice('kategori:'.length));
      if (cat) {
        children = (cat.sub ?? []).map((s) => ({
          label: s.name, href: `/kategori/${cat.slug}/${s.slug}/`, desc: s.desc, count: count(cat.slug, s.slug), mono: monogram(s.name),
        }));
      }
    } else if (mode === 'manual') {
      children = (n.children ?? []).map((c) => ({ label: c.label, href: c.href, desc: c.desc, mono: monogram(c.label) }));
    }
    return { label: n.label, href: n.href, children };
  });
}
