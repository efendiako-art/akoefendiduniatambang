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
export const ADSENSE_CLIENT = 'ca-pub-5609847039173018';

// ID slot iklan (dibuat di dashboard AdSense > Iklan > Menurut unit iklan)
// Kosongkan slot = AdSlot otomatis tidak menampilkan apa pun di posisi itu (aman).
export const AD_SLOTS = {
  articleTop: '',      // di atas isi artikel, setelah judul
  articleBottom: '',   // di bawah isi artikel, sebelum tombol share
  sidebar: '',         // sidebar desktop di halaman artikel, di bawah daftar isi
  homeBelowHero: '',   // di bawah hero beranda, sebelum "Artikel pilihan"
  inFeed: '',          // native in-feed, disisipkan di antara kartu artikel (listing)
  sopTop: '',          // di atas isi dokumen SOP/IK, setelah judul
  sopBottom: '',       // di bawah isi dokumen SOP/IK, setelah tombol unduh
  sopInFeed: '',       // native in-feed di daftar SOP & IK
};

export const SOP_CATEGORIES = [
  { slug: 'operasional-tambang', name: 'Operasional Tambang', desc: 'Loading, hauling, dumping, dan pengoperasian unit tambang.' },
  { slug: 'k3-lingkungan', name: 'K3 & Lingkungan', desc: 'APD, manajemen risiko, dan keselamatan kerja tambang.' },
  { slug: 'perawatan-alat', name: 'Perawatan Alat Berat', desc: 'Pemeliharaan terjadwal dan keandalan unit tambang.' },
  { slug: 'logistik-stockpile', name: 'Logistik & Stockpile', desc: 'Manajemen stockpile, jalan angkut, dan area penimbunan.' },
] as const;

export type SopCategorySlug = (typeof SOP_CATEGORIES)[number]['slug'];

export const sopCategoryName = (slug: string) =>
  SOP_CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;

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
