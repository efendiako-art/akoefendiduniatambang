---
title: 'Maintenance Alat Berat Tambang: Periodic Service, Backlog, & MTBF'
description: 'Dasar manajemen perawatan alat berat tambang: jenis maintenance, periodic service, pengelolaan backlog, serta indikator MTBF dan MTTR.'
pubDate: 2026-10-05
updatedDate: 2026-11-18
category: alat-berat
tags: [maintenance, 'periodic service', backlog, 'MTBF', 'MTTR']
image: '/images/artikel/perawatan-alat-berat-pm-backlog/sampul.webp'
imageAlt: 'Maintenance Alat Berat Tambang: Periodic Service, Backlog, & MTBF'
draft: false
---

![Monitoring progress](/images/artikel/perawatan-alat-berat-pm-backlog/screenshot-2026-11-18-152329.webp)

Maintenance Alat Berat Tambang Hampir semua orang di tambang pernah mendengar kalimat ini: "alat breakdown lagi". Kerusakan memang tidak bisa dihilangkan sama sekali, tapi bisa dikendalikan. Perbedaan antara tambang dengan PA 85% dan tambang dengan PA 92% sering kali bukan pada umur alatnya, melainkan pada disiplin perawatannya.

Persiapan yang buruk adalah penyebab nomor satu pekerjaan service yang molor, dikerjakan dua kali, atau berujung kecelakaan. Paket service yang "hanya" 250 jam pun bisa berubah menjadi 12 jam downtime kalau part-nya belum ada, alat isolasi energinya hilang, dan unit masuk bengkel dalam kondisi bak penuh material.

## Jenis-jenis perawatan

| Jenis | Kapan dilakukan | Contoh |
| ----- | --------------- | ------ |
| **Breakdown maintenance** | Setelah alat rusak | Ganti selang hidrolik pecah di front |
| **Preventive maintenance** | Terjadwal berdasarkan jam operasi | Periodic service ganti oli dan filter |
| **Predictive maintenance** | Berdasarkan kondisi alat | Analisa sampel oli, pemantauan getaran dan suhu |
| **Overhaul** | Komponen mencapai batas umur | Ganti atau rekondisi engine, transmisi |

Strategi yang sehat berusaha memindahkan sebanyak mungkin pekerjaan dari kolom breakdown ke kolom terjadwal. Perbaikan terjadwal lebih murah, lebih cepat, dan tidak mengejutkan produksi.

## Periodic service (PS)

Periodic service adalah servis berkala berdasarkan jam kerja (hour meter) alat, misalnya setiap 250, 500, 1.000, dan 2.000 jam, mengikuti buku manual pabrikan. Isinya bertingkat: servis 500 jam biasanya mencakup semua pekerjaan 250 jam ditambah item lain.

Hal yang sering membuat PS tidak efektif:

* **Ditunda karena "produksi sedang kejar target".** Penundaan kecil menumpuk menjadi kerusakan besar.
* **Suku cadang tidak siap saat jadwal tiba.** Alat sudah masuk workshop tapi filter belum datang.
* **Tidak ada temuan yang dicatat.** Padahal PS adalah kesempatan terbaik melihat gejala awal kerusakan.

## Backlog: daftar pekerjaan yang tertunda

Backlog adalah pekerjaan perawatan yang sudah teridentifikasi tapi belum dikerjakan. Contohnya: rembesan oli kecil, lampu kerja mati, bushing mulai aus. Temuan ini biasanya datang dari P2H operator, inspeksi mekanik, atau saat PS.

## Mengelola Backlog Tanpa Menenggelamkan Tim

Backlog yang sehat punya batas. Aturan praktis yang banyak dipakai di tambang besar: backlog tenaga kerja di kisaran 2–4 minggu untuk pekerjaan rutin, dengan backlog kritis (keselamatan dan produksi) dijaga di bawah satu minggu. Di bawah 2 minggu, tim cenderung kehabisan pekerjaan dan mulai mengerjakan hal yang tidak perlu. Di atas 6 minggu, backlog mulai "membusuk": item tertua kehilangan konteks, part-nya hilang, dan unit tetap beroperasi dengan defect.

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

* **MTBF rendah** berarti alat sering rusak. Cari akar masalah keandalan: kualitas PS, kondisi operasi, atau cara operator memakai alat.
* **MTTR tinggi** berarti perbaikan lambat. Cari penyebabnya: menunggu mekanik, menunggu suku cadang, atau keahlian yang kurang.

Hubungannya dengan MA cukup langsung. Semakin tinggi MTBF dan semakin rendah MTTR, semakin tinggi MA. Rumus MA dan KPI lainnya dijelaskan di artikel [PA, UA, MA, dan EU](/artikel/kpi-alat-tambang-pa-ua-ma-eu/).

## Peran operator dalam perawatan

Operator adalah orang pertama yang tahu kalau alat mulai tidak normal: bunyi aneh, tenaga berkurang, suhu naik. P2H yang diisi dengan jujur dan laporan gejala sejak awal bisa mencegah kerusakan besar. Budaya "jalan terus selama masih bisa jalan" adalah salah satu penyebab biaya perawatan membengkak.

Komunikasi yang baik antara tim produksi dan tim maintenance juga menentukan. Produksi butuh alat sebanyak mungkin hari ini; maintenance butuh waktu supaya alat tetap sehat bulan depan. Jadwal perawatan yang disepakati bersama di awal minggu adalah jalan tengah yang paling sehat.
[Hydraulic Breaker di Tambang: Cara Kerja, Pemakaian, dan Keselamatannya](/artikel/hydraulic-breaker-excavator-tambang/)

## Contoh: mengelola backlog dengan prioritas

Backlog yang dibiarkan menumpuk akhirnya menjadi kerusakan besar. Cara sederhana mengelolanya adalah memberi prioritas:

| Prioritas | Contoh pekerjaan | Batas waktu umum |
| --------- | ---------------- | ---------------- |
| 1 (kritis) | Rem, kemudi, sistem keselamatan | Segera, unit tidak dioperasikan |
| 2 (penting) | Kebocoran oli, bunyi tidak normal | Dalam beberapa hari atau pada jadwal service terdekat |
| 3 (biasa) | Kaca retak, jok sobek | Dijadwalkan bersama pekerjaan lain |
| 4 (kosmetik) | Cat, stiker | Saat ada waktu |

Batas waktu pastinya ditentukan kebijakan perusahaan. Yang penting, tiap temuan punya prioritas, penanggung jawab, dan target selesai.

## Contoh menghitung MTBF dan MTTR

Sebuah unit bekerja 600 jam dalam sebulan dan mengalami 4 kali kerusakan dengan total waktu perbaikan 48 jam.

```
MTBF = 600 / 4 = 150 jam
MTTR = 48 / 4 = 12 jam
```

MTBF 150 jam berarti rata-rata unit bekerja 150 jam di antara dua kerusakan. MTTR 12 jam berarti rata-rata satu kerusakan diperbaiki dalam 12 jam. MTBF naik dan MTTR turun adalah arah yang diinginkan.

## Pertanyaan yang sering diajukan

### Apa bedanya preventive dan predictive maintenance?

Preventive dilakukan berdasarkan jadwal tetap, misalnya setiap 250 jam. Predictive dilakukan berdasarkan kondisi aktual, misalnya hasil uji oli atau pemantauan getaran.

### Kenapa periodic service tidak boleh ditunda?

Penundaan membuat oli dan filter bekerja melewati batas, sehingga keausan meningkat. Biaya perbaikan akibat menunda biasanya jauh lebih besar daripada waktu service.

### Apa itu uji oli (oil sampling)?

Sampel oli dikirim ke laboratorium untuk mengetahui kandungan logam aus dan kontaminan. Hasilnya memberi sinyal awal kerusakan komponen sebelum terjadi.

### Apakah operator terlibat dalam perawatan?

Ya. Operator adalah orang pertama yang merasakan perubahan suara, getaran, dan performa. Laporan operator lewat P2H dan komunikasi langsung sangat berharga.

### Referensi

* [P2H: Pemeriksaan Alat dan Kendaraan Sebelum Dipakai | TambangPedia](https://tambangpedia.com/artikel/p2h-inspeksi-alat-sebelum-dipakai/) 
* [PA, UA, MA, dan EU: Arti dan Rumus KPI Alat Tambang | TambangPedia](https://tambangpedia.com/artikel/kpi-alat-tambang-pa-ua-ma-eu/) 
* [Tutorial Analisa Produksi Tambang: Loss, KPI Alat, Produktivitas | TambangPedia](https://tambangpedia.com/tutorial-analisa-produksi/) 
* [Artikel Alat Berat | TambangPedia](https://tambangpedia.com/kategori/alat-berat/)


## Kesimpulan

* **Periodic service adalah tulang punggung keandalan**, tetapi hanya berfungsi kalau intervalnya berbasis jam operasi dan kondisi lapangan, bukan asal salin dari manual atau kalender.
* **Backlog bukan tanda kegagalan** — backlog yang tidak dikelolalah yang berbahaya. Urutkan dengan matriks prioritas, review setiap hari, dan tutup pekerjaan yang sudah tidak relevan.
* **Backlog sehat punya batas angka**: 2–4 minggu untuk pekerjaan rutin, di bawah satu minggu untuk item kritis keselamatan dan produksi.
* **MTBF hanya bermakna bila definisi batas kegagalan ditetapkan lebih dulu** dan angkanya selalu dibaca bersama MTTR serta availability, bukan sendirian.
* **Pisahkan pengukuran per komponen** (engine, transmisi, final drive, ban, hidrolik). MTBF fleet gabungan menyembunyikan komponen terburuk.
* **Rasio PM:korektif yang sehat 70:30 sampai 80:20.** Kalau korektif mendominasi, program perawatan sedang berjalan reaktif.
* **Kesalahan paling mahal adalah memotong analisa kondisi demi penghematan** — biayanya kembali sebagai kegagalan komponen besar dalam hitungan minggu.
* **Pekerjaan maintenance tanpa LOTO adalah sumber kecelakaan utama**, terutama pada tugas yang dianggap "cuma sebentar".
* **Yang membedakan tambang dengan downtime rendah bukan teknologi mahal**, melainkan keputusan prioritas yang jelas, data kondisi yang hidup, dan disiplin administrasi WO.
* **Tiga pilar ini saling mengoreksi**: service menjaga keandalan, backlog menjaga eksekusi tetap realistis, MTBF memberi umpan balik apakah strategi benar-benar bekerja.

Kalau mau, saya bisa membuat versi poin-poin yang lebih padat (5 butir) untuk kebutuhan ringkasan lapangan, atau menambahkan bagian rekomendasi tindak lanjut setelah kesimpulan.

###
