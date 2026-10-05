---
title: 'Perawatan Alat Berat Tambang: Periodic Service, Backlog, dan MTBF'
description: 'Dasar manajemen perawatan alat berat tambang: jenis maintenance, periodic service, pengelolaan backlog, serta indikator MTBF dan MTTR.'
pubDate: 2026-10-05
category: alat-berat
tags: ['maintenance', 'periodic service', 'backlog', 'MTBF', 'MTTR']
---

Hampir semua orang di tambang pernah mendengar kalimat ini: "alat breakdown lagi". Kerusakan memang tidak bisa dihilangkan sama sekali, tapi bisa dikendalikan. Perbedaan antara tambang dengan PA 85% dan tambang dengan PA 92% sering kali bukan pada umur alatnya, melainkan pada disiplin perawatannya.

## Jenis-jenis perawatan

| Jenis | Kapan dilakukan | Contoh |
| --- | --- | --- |
| **Breakdown maintenance** | Setelah alat rusak | Ganti selang hidrolik pecah di front |
| **Preventive maintenance** | Terjadwal berdasarkan jam operasi | Periodic service ganti oli dan filter |
| **Predictive maintenance** | Berdasarkan kondisi alat | Analisa sampel oli, pemantauan getaran dan suhu |
| **Overhaul** | Komponen mencapai batas umur | Ganti atau rekondisi engine, transmisi |

Strategi yang sehat berusaha memindahkan sebanyak mungkin pekerjaan dari kolom breakdown ke kolom terjadwal. Perbaikan terjadwal lebih murah, lebih cepat, dan tidak mengejutkan produksi.

## Periodic service (PS)

Periodic service adalah servis berkala berdasarkan jam kerja (hour meter) alat, misalnya setiap 250, 500, 1.000, dan 2.000 jam, mengikuti buku manual pabrikan. Isinya bertingkat: servis 500 jam biasanya mencakup semua pekerjaan 250 jam ditambah item lain.

Hal yang sering membuat PS tidak efektif:

- **Ditunda karena "produksi sedang kejar target".** Penundaan kecil menumpuk menjadi kerusakan besar.
- **Suku cadang tidak siap saat jadwal tiba.** Alat sudah masuk workshop tapi filter belum datang.
- **Tidak ada temuan yang dicatat.** Padahal PS adalah kesempatan terbaik melihat gejala awal kerusakan.

## Backlog: daftar pekerjaan yang tertunda

Backlog adalah pekerjaan perawatan yang sudah teridentifikasi tapi belum dikerjakan. Contohnya: rembesan oli kecil, lampu kerja mati, bushing mulai aus. Temuan ini biasanya datang dari P2H operator, inspeksi mekanik, atau saat PS.

Cara mengelola backlog dengan baik:

1. **Catat semua temuan** dengan nomor unit, deskripsi, tingkat prioritas, dan suku cadang yang dibutuhkan.
2. **Pesan suku cadang segera**, jangan menunggu alat masuk workshop.
3. **Jadwalkan pengerjaan bersamaan dengan PS** atau saat alat sedang standby karena hujan.
4. **Pantau umur backlog.** Backlog yang dibiarkan berbulan-bulan sering berakhir menjadi breakdown.

## Indikator keandalan: MTBF dan MTTR

Selain PA dan MA, dua angka ini membantu melihat kualitas perawatan:

```
MTBF (Mean Time Between Failure) = Jam kerja / Jumlah breakdown
MTTR (Mean Time To Repair)       = Jam perbaikan / Jumlah breakdown
```

Contoh satu bulan: excavator bekerja 480 jam, mengalami 6 kali breakdown dengan total jam perbaikan 54 jam.

```
MTBF = 480 / 6 = 80 jam
MTTR = 54 / 6  = 9 jam
```

Cara membacanya:

- **MTBF rendah** berarti alat sering rusak. Cari akar masalah keandalan: kualitas PS, kondisi operasi, atau cara operator memakai alat.
- **MTTR tinggi** berarti perbaikan lambat. Cari penyebabnya: menunggu mekanik, menunggu suku cadang, atau keahlian yang kurang.

Hubungannya dengan MA cukup langsung. Semakin tinggi MTBF dan semakin rendah MTTR, semakin tinggi MA. Rumus MA dan KPI lainnya dijelaskan di artikel [PA, UA, MA, dan EU](/artikel/kpi-alat-tambang-pa-ua-ma-eu/).

## Peran operator dalam perawatan

Operator adalah orang pertama yang tahu kalau alat mulai tidak normal: bunyi aneh, tenaga berkurang, suhu naik. P2H yang diisi dengan jujur dan laporan gejala sejak awal bisa mencegah kerusakan besar. Budaya "jalan terus selama masih bisa jalan" adalah salah satu penyebab biaya perawatan membengkak.

Komunikasi yang baik antara tim produksi dan tim maintenance juga menentukan. Produksi butuh alat sebanyak mungkin hari ini; maintenance butuh waktu supaya alat tetap sehat bulan depan. Jadwal perawatan yang disepakati bersama di awal minggu adalah jalan tengah yang paling sehat.
