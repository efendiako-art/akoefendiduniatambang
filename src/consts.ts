// ============================================================
//  PENGATURAN UTAMA WEBSITE — cukup ubah file ini
// ============================================================

export const SITE = {
  name: 'TambangPedia',
  tagline: 'Ilmu tambang dari lapangan, untuk semua',
  description:
    'Panduan praktis pertambangan berbahasa Indonesia: operasi produksi, KPI alat berat, geologi, K3, dan karier tambang — ditulis oleh praktisi lapangan.',
  author: 'Redaksi TambangPedia',
  email: 'efendiako@gmail.com',
  locale: 'id_ID',
};

// ------------------------------------------------------------
//  GOOGLE ADSENSE
//  Isi setelah akun AdSense disetujui, contoh: 'ca-pub-1234567890123456'
//  Selama masih kosong, tidak ada kode iklan yang dimuat.
// ------------------------------------------------------------
export const ADSENSE_CLIENT = '';

// ID slot iklan (dibuat di dashboard AdSense > Iklan > Menurut unit iklan)
export const AD_SLOTS = {
  articleTop: '',
  articleMiddle: '',
  articleBottom: '',
  sidebar: '',
};

export const CATEGORIES = [
  { slug: 'operasi-produksi', name: 'Operasi Produksi', desc: 'Perencanaan, produksi harian, dan KPI tambang.' },
  { slug: 'alat-berat', name: 'Alat Berat', desc: 'Excavator, dump truck, dozer, dan produktivitasnya.' },
  { slug: 'geologi-eksplorasi', name: 'Geologi & Eksplorasi', desc: 'Endapan, cadangan, dan pemboran eksplorasi.' },
  { slug: 'k3-tambang', name: 'K3 Tambang', desc: 'Keselamatan kerja dan regulasi K3 pertambangan.' },
  { slug: 'karier-regulasi', name: 'Karier & Regulasi', desc: 'Sertifikasi, lowongan, dan aturan pertambangan.' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const categoryName = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
