// Daftar kategori disimpan di src/data/kategori.json (diatur lewat aplikasi TambangPedia)
import kategori from './data/kategori.json';

// ============================================================
//  PENGATURAN UTAMA WEBSITE — cukup ubah file ini
// ============================================================

export const SITE = {
  name: 'TambangPedia',
  tagline: 'Ilmu tambang dari lapangan, untuk semua',
  description:
    'Panduan praktis pertambangan berbahasa Indonesia: operasi produksi, KPI alat berat, geologi, K3, dan karier tambang — ditulis oleh praktisi lapangan.',
  author: 'Redaksi TambangPedia',
  // email yang TAMPIL di website (alamat domain, diteruskan ke Gmail lewat Cloudflare Email Routing)
  email: 'redaksi@tambangpedia.com',
  locale: 'id_ID',
};

// ------------------------------------------------------------
//  FORMULIR KONTAK (Web3Forms, gratis)
//  Isi dengan "Access Key" dari web3forms.com (didaftarkan memakai Gmail pemilik).
//  Pesan dari formulir di /kontak/ dikirim ke Gmail itu, tanpa menampilkan alamat Gmail di website.
//  Selama masih kosong, tombol formulir membuka aplikasi email pengunjung ke alamat SITE.email.
// ------------------------------------------------------------
export const CONTACT_FORM_KEY = '8026f4c9-fe5e-4fde-bfdb-8adffe54e5a8';

// ------------------------------------------------------------
//  GOOGLE ADSENSE
//  Isi setelah akun AdSense disetujui, contoh: 'ca-pub-1234567890123456'
//  Selama masih kosong, tidak ada kode iklan yang dimuat.
// ------------------------------------------------------------
export const ADSENSE_CLIENT = 'ca-pub-5609847039173018';

// ID slot iklan (dibuat di dashboard AdSense > Iklan > Menurut unit iklan)
// Kosongkan slot = AdSlot otomatis tidak menampilkan apa pun di posisi itu (aman).
export const AD_SLOTS = {
  articleTop: '4572537844',      // di atas isi artikel, setelah judul
  articleBottom: '6148334234',   // di bawah isi artikel, sebelum tombol share
  sidebar: '9577452516',         // sidebar desktop di halaman artikel, di bawah daftar isi
  homeBelowHero: '2209089229',   // di bawah hero beranda, sebelum "Artikel pilihan"
  inFeed: '1754802819',          // native in-feed, disisipkan di antara kartu artikel (listing)
  sopTop: '4572537844',          // di atas isi dokumen SOP/IK (memakai unit yang sama dengan articleTop)
  sopBottom: '6148334234',       // di bawah isi dokumen SOP/IK (memakai unit yang sama dengan articleBottom)
  sopInFeed: '1754802819',       // native in-feed di daftar SOP & IK (memakai unit yang sama dengan inFeed)
};

// Kunci tata letak untuk unit Dalam Feed (dari kode iklan AdSense unit "inFeed")
export const IN_FEED_LAYOUT_KEY = '-6t+ed+2i-1n-4w';

export type SubCategory = { slug: string; name: string; desc: string };
export type Category = { slug: string; name: string; desc: string; sub?: SubCategory[] };

export const SOP_CATEGORIES: Category[] = kategori.sop;

export type SopCategorySlug = string;

export const sopCategoryName = (slug: string) =>
  SOP_CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;

// Kategori artikel. Setiap kategori boleh punya sub-kategori (field "sub"),
// contoh: Tutorial Software Tambang -> Deswik CAD, Surpac, MineSched, ArcGIS.
export const CATEGORIES: Category[] = kategori.artikel;

export type CategorySlug = string;

export const categoryName = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;

export const subCategories = (cat: string): SubCategory[] =>
  CATEGORIES.find((c) => c.slug === cat)?.sub ?? [];

export const findSub = (cat: string, sub?: string): SubCategory | undefined =>
  sub ? subCategories(cat).find((s) => s.slug === sub) : undefined;

export const subUrl = (cat: string, sub: string) => `/kategori/${cat}/${sub}/`;
