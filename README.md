# TambangPedia

Website edukasi pertambangan yang siap dipasangi Google AdSense.
Dibangun dengan **Astro**, dan bisa di-hosting **gratis** di Cloudflare Pages.

## Isi proyek

| Folder / file | Fungsi |
| --- | --- |
| `src/consts.ts` | **Pengaturan utama**: nama situs, email, ID AdSense, kategori |
| `src/content/artikel/` | Artikel dalam format Markdown (`.md`) |
| `src/pages/` | Halaman: beranda, artikel, kalkulator, tentang, kontak, privasi, disclaimer |
| `src/components/AdSlot.astro` | Slot iklan AdSense |
| `src/styles/global.css` | Warna, huruf, dan tampilan |
| `public/` | File statis: favicon, `ads.txt` |

## 1. Menjalankan di komputer sendiri

Butuh [Node.js](https://nodejs.org) versi 22 atau lebih baru.

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`. Setiap perubahan file langsung terlihat.

## 2. Menulis artikel baru

Buat file baru di `src/content/artikel/`, misalnya `jenis-alat-berat-tambang.md`.
Nama file menjadi alamat halaman: `/artikel/jenis-alat-berat-tambang/`.

```markdown
---
title: 'Jenis Alat Berat di Tambang Batubara dan Fungsinya'
description: 'Ringkasan 140–160 karakter yang muncul di hasil Google.'
pubDate: 2026-10-10
category: alat-berat
tags: ['alat berat', 'excavator']
---

Paragraf pembuka...

## Subjudul pertama

Isi artikel...
```

Kategori yang tersedia: `operasi-produksi`, `alat-berat`, `geologi-eksplorasi`, `k3-tambang`, `karier-regulasi`.
Tambahkan `draft: true` untuk menyembunyikan artikel yang belum selesai.

## 3. Online gratis di Cloudflare Pages

1. Buat akun gratis di [github.com](https://github.com), lalu buat repository baru (misalnya `tambangpedia`).
2. Unggah seluruh isi folder ini ke repository tersebut (tanpa folder `node_modules` dan `dist`).
3. Buat akun gratis di [dash.cloudflare.com](https://dash.cloudflare.com).
4. Buka **Workers & Pages → Create → Pages → Connect to Git**, pilih repository Anda.
5. Isi pengaturan build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Klik **Save and Deploy**. Situs tayang di alamat `nama-proyek.pages.dev`.

Setiap kali Anda menambah artikel dan mengunggahnya ke GitHub, Cloudflare membangun ulang situs secara otomatis.

## 4. Domain sendiri

1. Beli domain (`.com` atau `.id`) di registrar mana saja.
2. Di Cloudflare Pages: **Custom domains → Set up a custom domain**, ikuti petunjuknya.
3. Ubah `site` di `astro.config.mjs` menjadi domain Anda, misalnya `https://tambangpedia.com`.
4. Ubah `email` di `src/consts.ts` menjadi email Anda.

## 5. Google Search Console

1. Daftarkan domain di [search.google.com/search-console](https://search.google.com/search-console).
2. Kirim sitemap: `https://domainanda.com/sitemap-index.xml`.

## 6. Memasang Google AdSense

Daftar AdSense **setelah** ada 20–30 artikel orisinal dan setiap kategori sudah berisi artikel.

1. Daftar di [adsense.google.com](https://adsense.google.com) dengan domain Anda.
2. Isi `ADSENSE_CLIENT` di `src/consts.ts` dengan ID penerbit Anda (contoh `ca-pub-1234567890123456`). Kode AdSense otomatis terpasang di semua halaman.
3. Setelah disetujui:
   - Ganti nama `public/ads.txt.contoh` menjadi `public/ads.txt` dan isi ID penerbit Anda.
   - Aktifkan **Auto Ads** di dashboard AdSense, atau buat unit iklan dan isi ID slotnya di `AD_SLOTS` (`src/consts.ts`).

Selama `ADSENSE_CLIENT` masih kosong, tidak ada kode iklan yang dimuat.
Untuk melihat posisi slot iklan saat mengembangkan, jalankan `PUBLIC_AD_PREVIEW=1 npm run dev`.

## Sebelum mendaftar AdSense

- [x] Profil penulis di halaman Tentang
- [x] Email kontak aktif
- [x] 30 artikel, setiap kategori terisi 5–7 artikel
- [ ] Domain sendiri sudah tersambung
- [ ] Situs sudah terindeks di Google Search Console
