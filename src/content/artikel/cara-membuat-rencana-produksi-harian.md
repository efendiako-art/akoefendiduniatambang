---
title: 'Cara Menyusun Rencana Produksi Harian di Tambang'
description: 'Panduan menyusun daily plan tambang terbuka: dari target bulanan, pembagian per fleet, kebutuhan alat, hingga kontrol realisasi per shift.'
pubDate: 2026-10-05
updatedDate: 2026-10-19
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

<figure class="photo"><img src="/images/dokumentasi/dozer-dan-excavator-bekerja-di-front.jpg" alt="Dozer dan excavator bekerja di front" width="1280" height="872" loading="lazy" decoding="async"><figcaption>Beberapa unit bekerja bersamaan di satu front, yang perlu diatur dalam rencana harian. Dokumentasi lapangan TambangPedia.</figcaption></figure>

## Contoh format daily plan satu halaman

Rencana yang baik bisa dibaca dalam satu menit oleh supervisor dan operator. Susunan berikut cukup umum dan mudah disesuaikan:

| Bagian | Isi |
| --- | --- |
| Header | Tanggal, shift, kondisi cuaca, penanggung jawab |
| Target | Total bcm overburden, ton batubara, dan ritase per fleet |
| Fleet dan alat | Excavator, truk, dozer, grader, dan water truck, lengkap dengan status siap atau tidak siap |
| Lokasi kerja | Blok atau pit, elevasi, lokasi disposal, dan rute angkut |
| Peledakan | Jadwal, area terlarang, dan waktu area aman kembali |
| Jalan dan disposal | Area yang diperbaiki, kondisi tanggul, dan area yang dibatasi |
| Risiko hari ini | Hujan, jalan licin, pekerjaan dekat lereng, atau pekerjaan kritis lain |
| Catatan serah terima | Masalah yang belum selesai dari shift sebelumnya |

## Skenario: hujan turun di jam ketiga

Rencana hari itu 34.330 bcm. Di jam ketiga, hujan lebat turun selama dua jam dan jalan tanah menjadi licin. Langkah yang masuk akal bagi supervisor:

1. Tentukan jalan mana yang masih aman dilalui. Jangan memaksa truk melewati jalan yang licin.
2. Pindahkan fleet ke front dengan jalan paling pendek dan paling kuat, misalnya yang sudah dilapisi material keras.
3. Kerahkan grader dan dozer untuk memperbaiki jalan dan drainase yang kritis.
4. Hitung ulang target sisa shift dan informasikan ke atasan sejak dini, bukan di akhir shift.
5. Catat jam hujan dengan kode delay yang benar supaya analisa loss di akhir bulan akurat.

Keselamatan selalu lebih tinggi daripada target produksi. Target yang meleset karena hujan bisa dijelaskan. Kecelakaan di jalan licin tidak bisa dikembalikan.

## Pertanyaan yang sering diajukan

### Apa bedanya rencana harian, mingguan, dan bulanan?

Rencana bulanan menetapkan target dan urutan penambangan besar. Rencana mingguan menetapkan area kerja dan kebutuhan alat. Rencana harian menetapkan eksekusi per shift. Ketiganya harus konsisten supaya pekerjaan hari ini tidak merusak rencana bulan depan.

### Siapa yang menyusun rencana harian?

Umumnya perencana jangka pendek atau engineer produksi bersama supervisor, dan disetujui oleh superintendent. Hal yang menyangkut keselamatan, seperti area peledakan, mengikuti persetujuan penanggung jawab keselamatan di lokasi.

### Bagaimana menentukan jam kerja efektif per hari?

Gunakan data historis PA dan UA pada bulan dengan cuaca serupa, lalu kurangi waktu pergantian shift, istirahat, dan P5M. Jam efektif hampir selalu lebih rendah dari jam kalender yang terasa.

### Apa itu exposed coal dan berapa idealnya?

Exposed coal adalah batubara yang sudah tersingkap dan siap digali. Tidak ada angka ideal yang berlaku umum. Biasanya perencana menentukannya dalam satuan hari atau minggu produksi, sesuai kemampuan alat gali batubara dan risiko hujan.
