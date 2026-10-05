---
title: 'Cara Menganalisa Loss Produksi Tambang: Dari Jam Hilang ke Angka Rupiah'
description: 'Langkah praktis menganalisa kehilangan produksi tambang: memecah loss ke availability, utilisasi, dan produktivitas, lalu menghitung dampaknya dan menentukan prioritas.'
pubDate: 2026-10-05
category: operasi-produksi
tags: ['loss produksi', 'analisa produksi', 'KPI', 'losstime']
---

Setiap akhir bulan pertanyaannya sama: target 1 juta bcm, realisasi 870 ribu. Ke mana 130 ribu sisanya? Jawaban "karena hujan" memang sering benar, tapi jarang lengkap. Analisa loss produksi yang baik memecah selisih itu menjadi bagian-bagian yang bisa ditindaklanjuti.

## Rumus dasarnya

Produksi alat gali bisa ditulis sebagai perkalian tiga komponen:

```
Produksi = Jam tersedia × EU × Produktivitas
         = Jam tersedia × PA × UA × Produktivitas
```

- **PA** (physical availability) mewakili kesiapan alat, wilayah maintenance.
- **UA** (use of availability) mewakili pemakaian jam siap, wilayah operasi.
- **Produktivitas** (bcm per jam kerja) mewakili seberapa efektif alat saat bekerja.

Definisi lengkap PA dan UA ada di artikel [PA, UA, MA, dan EU](/artikel/kpi-alat-tambang-pa-ua-ma-eu/).

Dengan rumus ini, selisih produksi bisa dipecah ke tiga sumber. Itulah inti analisa loss.

## Langkah 1: Siapkan data plan dan aktual

Untuk setiap alat gali atau fleet, kumpulkan:

| Parameter | Plan | Aktual |
| --- | --- | --- |
| Jam tersedia (jam) | 720 | 720 |
| PA | 90% | 86% |
| UA | 80% | 72% |
| Produktivitas (bcm/jam) | 480 | 455 |
| **Produksi (bcm)** | **248.832** | **202.850** |

Selisihnya 45.982 bcm. Sekarang kita cari dari mana saja.

## Langkah 2: Pecah selisih secara bertahap

Cara yang mudah dipahami adalah mengganti satu faktor dari plan ke aktual secara berurutan, sambil faktor lainnya mengikuti:

1. **Loss karena PA.** Ganti PA ke aktual, sisanya plan:
   720 × 0,86 × 0,80 × 480 = 237.773 bcm. Loss = 248.832 − 237.773 = **11.059 bcm**.
2. **Loss karena UA.** Ganti juga UA ke aktual:
   720 × 0,86 × 0,72 × 480 = 213.996 bcm. Loss = 237.773 − 213.996 = **23.777 bcm**.
3. **Loss karena produktivitas.** Ganti produktivitas ke aktual:
   720 × 0,86 × 0,72 × 455 = 202.850 bcm. Loss = 213.996 − 202.850 = **11.146 bcm**.

Jumlah ketiganya 45.982 bcm, sama dengan selisih awal. Urutan penggantian sedikit memengaruhi hasil, jadi pakai urutan yang sama setiap bulan agar perbandingannya adil.

Dari contoh ini terlihat jelas: separuh lebih kehilangan datang dari **UA**, bukan dari kerusakan alat.

## Langkah 3: Bedah komponen terbesar

UA yang rendah berarti jam standby tinggi. Pecah jam standby itu berdasarkan kode delay:

| Penyebab standby | Jam | Porsi |
| --- | --- | --- |
| Hujan dan jalan licin | 62 | 35% |
| Menunggu truk / fleet tidak seimbang | 41 | 23% |
| Istirahat dan pergantian shift melebihi standar | 33 | 19% |
| Front kerja tidak siap | 25 | 14% |
| Lain-lain | 16 | 9% |

Hujan memang terbesar, tapi tidak bisa dikendalikan. Tiga baris berikutnya justru bisa diperbaiki: penyesuaian jumlah truk, disiplin pergantian shift, dan perencanaan front kerja yang lebih baik.

## Langkah 4: Ubah ke bahasa uang

Manajemen lebih cepat bergerak kalau melihat rupiah. Kalikan loss bcm dengan margin atau tarif per bcm. Misalnya dengan tarif kontrak Rp30.000 per bcm, loss UA 23.777 bcm berarti potensi pendapatan yang hilang sekitar Rp713 juta dalam sebulan, hanya dari satu fleet.

## Langkah 5: Tetapkan tindakan dan pemiliknya

Analisa yang berhenti di tabel tidak akan mengubah apa-apa. Untuk setiap penyebab utama, tulis:

- tindakan yang spesifik,
- siapa yang bertanggung jawab,
- kapan dicek ulang,
- target angka yang diharapkan.

Contohnya: "Tambah 1 unit truk di fleet 3 mulai minggu depan, PIC supervisor dispatch, target jam menunggu truk turun dari 41 ke 15 jam per bulan."

## Kunci utamanya: kualitas data

Analisa ini hanya sebaik data jam yang dicatat. Kode delay yang tidak konsisten, jam breakdown yang tercatat sebagai standby, atau timesheet yang diisi di akhir shift dari ingatan, semuanya membuat kesimpulan jadi salah arah. Investasi terbaik sebelum analisa adalah merapikan pencatatan di sumbernya.

Untuk menghitung KPI per alat dengan cepat, gunakan [kalkulator KPI alat](/alat/kpi-alat/).
