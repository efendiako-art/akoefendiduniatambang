// Data layanan Jasa Konsultan — dipakai di halaman /jasa-konsultan/ dan promosi di beranda.
// Ubah teks layanan cukup di file ini.
export type Jasa = { code: string; icon: string; color: string; title: string; desc: string; items: string[]; hasil: string };

export const JASA_ICON: Record<string, string> = {
  doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  cost: '<path d="M4 19V5M4 19h16"/><path d="M8 15l3-4 3 2 5-6"/><circle cx="19" cy="7" r="1.4"/>',
  kpi: '<circle cx="12" cy="13" r="8"/><path d="M12 13l4-4M12 5V3"/>',
  plan: '<path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3z"/><path d="M9 4v13M15 7v13"/>',
  fleet: '<rect x="3" y="9" width="12" height="7" rx="1"/><path d="M15 11h3l3 3v2h-6"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  sop: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  train: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M10 8l4 2-4 2z"/>',
  contract: '<path d="M6 3h9l3 3v15H6z"/><path d="M9 9h6M9 13h6M9 17l2 1 4-3"/>',
  report: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 17v-4M12 17V9M16 17v-6"/>',
};

export const JASA: Jasa[] = [
  { code: 'JK-01', icon: 'doc', color: '#FFB067', title: 'Penyusunan Proposal Tender',
    desc: 'Dokumen penawaran teknis dan komersial untuk tender jasa pertambangan: overburden removal, coal getting, hauling, dan rental alat.',
    items: ['Metode kerja dan jadwal pelaksanaan', 'Struktur organisasi dan daftar alat', 'Rencana Anggaran Biaya (RAB)', 'Cek kelengkapan dokumen sesuai syarat tender'],
    hasil: 'Proposal siap kirim (Word/PDF) + RAB Excel' },
  { code: 'JK-02', icon: 'cost', color: '#FFC400', title: 'Analisa Harga Project Tambang',
    desc: 'Hitung harga satuan yang wajar dan tetap untung, sebelum menawar atau negosiasi kontrak.',
    items: ['Harga satuan Rp/BCM, Rp/ton, Rp/ton-km', 'Owning & operating cost alat, BBM, ban', 'Biaya man power dan overhead site', 'Margin, titik impas, dan analisa sensitivitas'],
    hasil: 'Workbook harga satuan + ringkasan 1 halaman' },
  { code: 'JK-03', icon: 'kpi', color: '#5FE3D5', title: 'Analisa Produksi & KPI Alat',
    desc: 'Cari penyebab produksi tidak tercapai dan berapa nilai kerugiannya.',
    items: ['PA, UA, EU, EWH, dan produktivitas (PTY)', 'Loss produksi dan variance plan vs aktual', 'Match factor excavator–truk', 'Rekomendasi perbaikan yang bisa dijalankan'],
    hasil: 'Laporan analisa + dashboard harian/bulanan' },
  { code: 'JK-04', icon: 'plan', color: '#7FF0B5', title: 'Perencanaan & Desain Tambang',
    desc: 'Desain dan jadwal tambang memakai software tambang standar industri.',
    items: ['Desain pit, ramp, jalan angkut, dan disposal', 'Perhitungan volume dan cut & fill', 'Penjadwalan produksi (Deswik / MineSched)', 'Peta kemajuan tambang'],
    hasil: 'File desain + laporan volume' },
  { code: 'JK-05', icon: 'fleet', color: '#B9A4FF', title: 'Kebutuhan Alat, Man Power & Budget',
    desc: 'Susun kebutuhan armada, tenaga kerja, dan anggaran proyek yang masuk akal.',
    items: ['Fleet sizing sesuai target produksi', 'Perencanaan man power dan roster', 'Budget operasional tahunan', 'Simulasi skenario target produksi'],
    hasil: 'Workbook budget + rekap kebutuhan' },
  { code: 'JK-06', icon: 'sop', color: '#FF7A5C', title: 'SOP, IK & Sistem Operasional',
    desc: 'Dokumen kerja standar agar operasi aman, rapi, dan siap diaudit.',
    items: ['SOP dan Instruksi Kerja operasional', 'Alur pelaporan produksi', 'Form inspeksi dan checklist', 'Penyesuaian dengan aturan K3 tambang'],
    hasil: 'Paket dokumen SOP/IK siap pakai' },
  { code: 'JK-07', icon: 'train', color: '#8FD1FF', title: 'Pelatihan Software & Analisa Tambang',
    desc: 'Pelatihan untuk tim engineering dan produksi, bisa online atau di site.',
    items: ['Deswik CAD dan Surpac dari dasar', 'Analisa produksi dan KPI alat', 'Penyusunan RAB dan harga satuan', 'Materi dan file latihan disesuaikan data perusahaan'],
    hasil: 'Modul pelatihan + file latihan' },
  { code: 'JK-08', icon: 'contract', color: '#FFD25A', title: 'Review Kontrak & Perhitungan Klaim',
    desc: 'Periksa isi kontrak jasa tambang dan hitung klaim atau backcharge secara wajar.',
    items: ['Review pasal harga, eskalasi, dan denda', 'Perhitungan eskalasi harga BBM', 'Klaim standby, jarak angkut, dan perubahan lingkup', 'Rekonsiliasi volume dan backcharge'],
    hasil: 'Catatan review + perhitungan klaim' },
  { code: 'JK-09', icon: 'report', color: '#7FF0B5', title: 'Laporan Bulanan untuk Manajemen',
    desc: 'Laporan rutin yang ringkas untuk direksi atau pemilik tambang.',
    items: ['Ringkasan produksi vs target', 'Biaya per BCM / per ton', 'Kinerja alat dan kontraktor', 'Temuan dan rekomendasi bulan berikutnya'],
    hasil: 'Laporan bulanan (PDF) + data Excel' },
];

export const JASA_PILIHAN = ['Proposal tender', 'Analisa harga', 'Analisa produksi', 'Perencanaan tambang', 'Alat, man power & budget', 'SOP & IK', 'Pelatihan', 'Review kontrak & klaim', 'Laporan bulanan', 'Lainnya'];
