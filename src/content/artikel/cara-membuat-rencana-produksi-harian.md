---
title: 'Cara Menyusun Rencana Produksi Harian di Tambang'
description: 'Panduan menyusun daily plan tambang terbuka: dari target bulanan, pembagian per fleet, kebutuhan alat, hingga kontrol realisasi per shift.'
pubDate: 2026-10-05
category: operasi-produksi
tags: ['rencana produksi', 'daily plan', 'short term planning', 'fleet']
---

Target bulanan yang besar terasa jauh dan abstrak bagi orang di lapangan. Supervisor shift tidak berpikir "kita harus 1 juta bcm bulan ini". Yang ia butuhkan adalah jawaban sederhana: hari ini fleet saya kerja di mana, berapa targetnya, dan buang ke mana. Rencana produksi harian (daily plan) adalah jembatan antara angka bulanan itu dan pekerjaan nyata di pit.

## 1. Mulai dari target bulanan dan hari kerja efektif

Jangan bagi target bulanan rata dengan jumlah hari kalender. Kurangi dulu dengan perkiraan hari yang hilang karena hujan, berdasarkan data curah hujan dan jam hujan bulan yang sama di tahun-tahun sebelumnya.

```
Target harian = Target bulanan / Hari kerja efektif
```

Contoh: target OB 900.000 bcm, 30 hari kalender, perkiraan kehilangan setara 4 hari karena hujan dan slippery. Target harian menjadi 900.000 / 26 ≈ 34.600 bcm per hari.

## 2. Bagi ke setiap fleet

Setiap fleet (satu alat gali dengan truk-truknya) diberi target sesuai kapasitasnya:

```
Target fleet per hari = Produktivitas × Jam kerja efektif per hari
```

| Fleet | Excavator | Produktivitas (bcm/jam) | Jam kerja efektif | Target (bcm/hari) |
| --- | --- | --- | --- | --- |
| EX-01 | Kelas 200 ton | 750 | 17 | 12.750 |
| EX-02 | Kelas 100 ton | 460 | 17 | 7.820 |
| EX-03 | Kelas 100 ton | 460 | 17 | 7.820 |
| EX-04 | Kelas 70 ton | 330 | 18 | 5.940 |
| **Total** | | | | **34.330** |

Jam kerja efektif di sini sudah memperhitungkan PA, UA, dan waktu pergantian shift. Kalau totalnya belum menutup target harian, ada tiga pilihan: tambah alat, naikkan jam efektif dengan memperbaiki delay, atau terima bahwa target perlu dikoreksi.

## 3. Tentukan lokasi kerja dan disposal

Untuk setiap fleet, tulis dengan jelas:

- blok atau lokasi front yang digali, termasuk elevasi kerjanya,
- jenis material (OB lunak, OB hasil peledakan, batubara),
- lokasi disposal dan rute jalannya,
- jarak angkut, karena ini menentukan jumlah truk yang dibutuhkan.

Rencana yang baik juga memastikan front kerja besok sudah disiapkan hari ini: area peledakan sudah dibor, drainase sudah dibuat, jalan sudah diperbaiki.

## 4. Hitung kebutuhan truk per fleet

Jarak angkut berbeda, kebutuhan truk juga berbeda. Gunakan cycle time truk dan produktivitas excavator untuk menghitung jumlah truk ideal, lalu cek match factor-nya. Cara hitungnya dijelaskan di artikel [produktivitas excavator dan dump truck](/artikel/produktivitas-excavator-dan-dump-truck/), dan bisa langsung dicoba di [kalkulator produktivitas](/alat/produktivitas/).

## 5. Jaga stok batubara yang siap gali

Untuk tambang batubara, daily plan OB harus memperhatikan exposed coal. Kalau pengupasan OB hanya mengejar volume di lokasi yang mudah tapi tidak membuka batubara, beberapa minggu kemudian produksi batubara akan tersendat. Rencana harian harus mengikuti urutan penambangan dari rencana mingguan dan bulanan.

## 6. Komunikasikan dengan sederhana

Rencana yang hebat tidak ada gunanya kalau tidak dipahami pelaksana. Format yang paling efektif biasanya:

- satu halaman per shift,
- peta pit dengan lokasi fleet dan rute angkut,
- tabel target per fleet,
- catatan khusus: area bahaya, jadwal peledakan, perbaikan jalan.

Bahas di briefing awal shift (P5M atau safety talk) supaya semua orang mendengar target dan risikonya secara bersamaan.

## 7. Kontrol per jam, evaluasi per shift

Rencana harian hidup dari pengawasan. Pantau produksi per jam (dari dispatch atau ritase) dibanding target per jam. Kalau sampai jam ketiga sebuah fleet sudah tertinggal jauh, cari penyebabnya saat itu juga: truk kurang, antrean di disposal, atau alat bermasalah.

Di akhir shift, catat realisasi dan penyebab selisihnya. Data inilah bahan untuk [analisa loss produksi](/artikel/cara-analisa-loss-produksi-tambang/) di akhir bulan.

## Kesalahan yang sering terjadi

1. **Target tanpa memperhitungkan hujan.** Hasilnya rencana yang selalu gagal dan lama-lama tidak dipercaya.
2. **Semua fleet diberi target sama.** Padahal ukuran alat dan jarak angkut berbeda.
3. **Mengejar volume, lupa urutan.** Produksi bulan ini aman, bulan depan bermasalah.
4. **Rencana tidak sampai ke operator.** Hanya berhenti di grup WhatsApp para supervisor.
