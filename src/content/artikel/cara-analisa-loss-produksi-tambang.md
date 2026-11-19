---
title: 'Analisa Loss Produksi Tambang: Dari Jam Hilang ke Rupiah'
description: 'Langkah praktis menganalisa kehilangan produksi tambang: memecah loss ke availability, utilisasi, dan produktivitas, lalu menghitung dampaknya dan menentukan prioritas.'
pubDate: 2026-10-05
updatedDate: 2026-11-19
category: tutorial-analisa-produksi
subcategory: analisa-loss-produksi
tags: ['loss produksi', 'analisa produksi', 'KPI', losstime]
image: '/images/artikel/cara-analisa-loss-produksi-tambang/sampul.webp'
imageAlt: 'Grafik selisih rencana dan realisasi produksi tambang yang dipecah per penyebab loss'
draft: false
---

Analisa loss produksi tambang adalah cara memecah selisih antara rencana dan realisasi produksi menjadi penyebab yang bisa ditindaklanjuti. Hasilnya bukan sekadar angka, tetapi daftar tindakan dengan pemilik dan target. Artikel ini membahasnya langkah demi langkah, dari data jam alat sampai nilai rupiah.

Setiap akhir bulan pertanyaannya sama: target 1 juta bcm, realisasi 870 ribu. Ke mana 130 ribu sisanya? Jawaban "karena hujan" memang sering benar, tapi jarang lengkap. Analisa yang baik menunjukkan berapa bagian dari selisih itu yang datang dari kesiapan alat, dari pemakaian jam siap, dan dari kecepatan kerja alat.

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

![Diagram alur analisa loss produksi: data plan dan aktual, pecah per faktor, bedah penyebab, rupiah, lalu tindakan](/images/artikel/cara-analisa-loss-produksi-tambang/diagram-alur-analisa-loss.webp)

## Langkah 1: Siapkan data plan dan aktual

Untuk setiap alat gali atau fleet, kumpulkan:

| Parameter | Plan | Aktual |
| --- | --- | --- |
| Jam tersedia (jam) | 720 | 720 |
| PA | 90% | 86% |
| UA | 80% | 72% |
| Produktivitas (bcm/jam) | 480 | 455 |
| **Produksi (bcm)** | **248.832** | **202.850** |

Selisihnya 45.982 bcm. Angka di atas adalah contoh. Sekarang kita cari dari mana saja.

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

![Grafik batang loss produksi per faktor: PA 11.059 bcm, UA 23.777 bcm, produktivitas 11.146 bcm](/images/artikel/cara-analisa-loss-produksi-tambang/diagram-pecahan-loss.webp)

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

Untuk menghitung KPI per alat dengan cepat, gunakan [kalkulator KPI alat](/alat/kpi-alat/). Jika produktivitas yang menjadi penyumbang loss terbesar, telusuri cycle time dan match factor seperti dijelaskan di [cara menghitung produktivitas excavator dan dump truck](/artikel/produktivitas-excavator-dan-dump-truck/).

## Contoh: dua fleet dengan selisih sama, penyebab berbeda

Bayangkan dua fleet sama-sama kehilangan 20.000 bcm dari rencana bulan ini. Setelah loss dipecah, hasilnya berbeda (angka ilustrasi):

| Sumber loss | Fleet A (bcm) | Fleet B (bcm) |
| --- | --- | --- |
| Loss karena PA | 12.000 | 2.000 |
| Loss karena UA | 5.000 | 15.000 |
| Loss karena produktivitas | 3.000 | 3.000 |
| **Total** | **20.000** | **20.000** |

Totalnya sama, tetapi tindakannya bertolak belakang. Fleet A kehilangan produksi karena alatnya sering tidak siap, jadi fokusnya ke maintenance: kepatuhan periodic service, backlog, dan ketersediaan suku cadang. Fleet B alatnya sehat tetapi banyak menganggur, jadi fokusnya ke operasi: jumlah truk, kesiapan front, dan disiplin pergantian shift. Kalau hanya melihat total, bantuan bisa dikirim ke tempat yang salah.

## Daftar periksa sebelum analisa dimulai

1. Jam tiap alat sudah dibagi ke working, repair, dan standby, dan jumlahnya sama dengan jam kalender.
2. Kode delay konsisten, dan satu kejadian hanya punya satu penyebab utama.
3. Produksi dari dispatch atau ritase sudah direkonsiliasi dengan survei terakhir.
4. Rencana memakai asumsi yang sama dengan rencana bulanan dan kontrak.
5. Kejadian luar biasa seperti banjir, longsor, atau akses terblokir ditandai terpisah supaya tidak mengaburkan tren.

## Kesalahan umum saat menganalisa loss

- **Langsung menyalahkan hujan.** Hujan memang besar, tetapi jam slippery yang terlalu panjang setelah hujan berhenti sering kali adalah masalah drainase dan perawatan jalan, bukan cuaca.
- **Mencampur jam breakdown dengan standby.** Alat yang menunggu mekanik tercatat standby, sehingga PA terlihat bagus dan UA terlihat buruk. Tindakannya jadi salah alamat.
- **Memakai produktivitas rata-rata bulanan.** Produktivitas siang dan malam, atau material lunak dan keras, sering berbeda jauh. Pecah per shift atau per jenis material agar penyebabnya terlihat.
- **Tidak ada pemilik tindakan.** Rapat selesai, semua setuju, tapi tidak ada yang ditugaskan. Bulan berikutnya loss yang sama muncul lagi.
- **Mengubah urutan pemecahan setiap bulan.** Perbandingan tren jadi tidak adil dan sulit dijelaskan ke manajemen.

## Kesimpulan

Analisa loss produksi yang baik selalu dimulai dari rumus sederhana: produksi sama dengan jam tersedia dikali PA, UA, dan produktivitas. Dengan mengganti satu faktor dari plan ke aktual secara berurutan, selisih produksi bisa dipecah menjadi loss karena maintenance, loss karena operasi, dan loss karena kecepatan kerja. Komponen terbesar lalu dibedah dengan kode delay, diterjemahkan ke rupiah, dan diberi tindakan yang jelas pemilik serta targetnya.

Kualitas data adalah fondasinya. Rapikan pencatatan jam di sumbernya, dan pastikan definisi KPI sama dengan yang dijelaskan di [arti dan rumus PA, UA, MA, dan EU](/artikel/kpi-alat-tambang-pa-ua-ma-eu/), supaya hasil analisa bisa dipercaya dan dibandingkan dari bulan ke bulan.

## Pertanyaan yang sering diajukan

### Kenapa urutan penggantian faktor memengaruhi hasil?

Karena PA, UA, dan produktivitas saling dikalikan, selisih gabungannya tidak bisa dipisahkan dengan sempurna. Selisih kecil yang muncul akibat interaksi antarfaktor akan dibagi berbeda jika urutannya diubah. Pilih satu urutan baku, misalnya PA, UA, lalu produktivitas, dan pakai terus agar perbandingan antarbulan adil.

### Hujan masuk ke PA atau UA?

Alat yang sehat tetapi tidak bisa bekerja karena hujan dicatat sebagai standby, jadi memengaruhi UA, bukan PA. Alat yang rusak karena terendam banjir baru masuk repair dan memengaruhi PA.

### Seberapa sering analisa dilakukan?

Ringkasan harian atau per shift berguna untuk koreksi cepat. Analisa mingguan dipakai untuk tindakan yang lebih besar, misalnya penambahan truk atau perbaikan jalan. Analisa bulanan dipakai untuk laporan manajemen dan melihat tren.

### Bagaimana jika data dispatch dan timesheet berbeda?

Tetapkan satu sumber sebagai acuan resmi, lalu telusuri penyebab selisihnya. Selisih yang berulang biasanya menunjuk masalah di proses pencatatan, bukan di lapangan.

## Referensi

- Caterpillar Inc. *Caterpillar Performance Handbook*, edisi terbaru, bagian Mining and Earthmoving.
- Komatsu Ltd. *Specifications & Application Handbook*, bagian perhitungan produksi alat.
- Peurifoy, R. L., dkk. *Construction Planning, Equipment, and Methods*. McGraw-Hill.
- Hartman, H. L. & Mutmansky, J. M. *Introductory Mining Engineering*, edisi ke-2. John Wiley & Sons.
