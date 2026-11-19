---
title: 'Maintenance Alat Berat Tambang: Periodic Service, Backlog, & MTBF'
description: 'Dasar manajemen perawatan alat berat tambang: jenis maintenance, periodic service, pengelolaan backlog, serta indikator MTBF dan MTTR.'
pubDate: 2026-10-05
updatedDate: 2026-11-19
category: alat-berat
tags: [maintenance, 'periodic service', backlog, 'MTBF', 'MTTR']
image: '/images/artikel/perawatan-alat-berat-pm-backlog/sampul.webp'
imageAlt: 'Mekanik melakukan maintenance alat berat tambang di workshop'
draft: false
---

Maintenance alat berat tambang adalah rangkaian pekerjaan perawatan yang menjaga unit tetap siap pakai, mulai dari periodic service, pengelolaan backlog, sampai pemantauan MTBF dan MTTR. Hampir semua orang di tambang pernah mendengar kalimat "alat breakdown lagi", dan kerusakan memang tidak bisa dihilangkan sama sekali. Tetapi kerusakan bisa dikendalikan, dan perbedaan antara tambang dengan PA 85% dan PA 92% sering kali terletak pada disiplin perawatannya, bukan umur alatnya.

Artikel ini membahas jenis perawatan, persiapan service, pengelolaan backlog, indikator keandalan, contoh kasus, dan kesalahan umum.

![Tim maintenance membahas papan monitoring progres periodic service dan backlog unit](/images/artikel/perawatan-alat-berat-pm-backlog/screenshot-2026-11-18-152329.webp)

## Jenis-jenis perawatan

| Jenis | Kapan dilakukan | Contoh |
| ----- | --------------- | ------ |
| **Breakdown maintenance** | Setelah alat rusak | Ganti selang hidrolik pecah di front |
| **Preventive maintenance** | Terjadwal berdasarkan jam operasi | Periodic service ganti oli dan filter |
| **Predictive maintenance** | Berdasarkan kondisi alat | Analisa sampel oli, pemantauan getaran dan suhu |
| **Overhaul** | Komponen mencapai batas umur | Ganti atau rekondisi engine, transmisi |

Strategi yang sehat berusaha memindahkan sebanyak mungkin pekerjaan dari kolom breakdown ke kolom terjadwal. Perbaikan terjadwal lebih murah, lebih cepat, dan tidak mengejutkan produksi.

![Diagram empat jenis perawatan alat berat dari reaktif sampai terencana](/images/artikel/perawatan-alat-berat-pm-backlog/diagram-jenis-perawatan.webp)

## Persiapan sebelum periodic service

Persiapan yang buruk adalah penyebab nomor satu pekerjaan service yang molor, dikerjakan dua kali, atau berujung kecelakaan. Paket service yang "hanya" 250 jam pun bisa berubah menjadi 12 jam downtime kalau part-nya belum ada, alat isolasi energinya hilang, dan unit masuk bengkel dalam kondisi bak penuh material.

Daftar persiapan minimal:

- **Jadwal disepakati** dengan tim produksi paling lambat beberapa hari sebelumnya.
- **Paket suku cadang** (filter, oli, seal) sudah dikumpulkan per unit dan per interval service.
- **Backlog unit itu ditarik** agar bisa dikerjakan sekaligus.
- **Alat LOTO dan peralatan kerja** lengkap dan berfungsi.
- **Unit masuk dalam kondisi bersih,** bak kosong, dan sudah dicuci bila perlu.

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

Komunikasi yang baik antara tim produksi dan tim maintenance juga menentukan. Produksi butuh alat sebanyak mungkin hari ini; maintenance butuh waktu supaya alat tetap sehat bulan depan. Jadwal perawatan yang disepakati bersama di awal minggu adalah jalan tengah yang paling sehat. Item P2H yang menjadi sumber backlog dibahas di artikel [P2H: pemeriksaan alat sebelum dipakai](/artikel/p2h-inspeksi-alat-sebelum-dipakai/).

## Contoh: mengelola backlog dengan prioritas

Backlog yang dibiarkan menumpuk akhirnya menjadi kerusakan besar. Cara sederhana mengelolanya adalah memberi prioritas:

![Diagram alur pengelolaan backlog dari temuan sampai pekerjaan ditutup](/images/artikel/perawatan-alat-berat-pm-backlog/diagram-alur-backlog.webp)

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

## Contoh kasus: PA naik setelah PS tidak lagi ditunda

Sebuah fleet dump truck mencatat PA rata-rata 84% selama tiga bulan (angka contoh). Data menunjukkan hampir separuh periodic service ditunda satu sampai dua hari karena produksi sedang mengejar target, dan backlog prioritas 2 rata-rata berumur lebih dari enam minggu. Breakdown kecil seperti selang bocor dan kipas radiator rusak muncul hampir setiap hari.

Tim produksi dan maintenance kemudian menyepakati jadwal PS mingguan yang tidak boleh digeser tanpa persetujuan kepala departemen, menyiapkan paket part sehari sebelumnya, dan menggabungkan backlog dengan PS. Tiga bulan kemudian PA naik ke kisaran 90%, MTBF naik, dan jam lembur mekanik justru turun.

## Kesalahan umum dalam maintenance alat berat

- **Menunda PS demi target harian,** yang kembali sebagai breakdown berbiaya besar.
- **Backlog tidak diberi prioritas,** sehingga item kritis tenggelam di antara item kosmetik.
- **Memotong analisa kondisi (uji oli) demi penghematan,** padahal biayanya kembali sebagai kegagalan komponen besar.
- **MTBF dihitung untuk satu fleet gabungan,** sehingga komponen terburuk tidak terlihat. Pisahkan per komponen: engine, transmisi, final drive, hidrolik, ban.
- **Rasio PM terhadap korektif terbalik.** Rasio yang sehat sekitar 70:30 sampai 80:20; bila korektif dominan, perawatan sedang berjalan reaktif.
- **Bekerja tanpa LOTO** pada pekerjaan yang dianggap "cuma sebentar".

## Kesimpulan

Periodic service adalah tulang punggung keandalan alat, backlog menjaga temuan kecil tidak menjadi kerusakan besar, dan MTBF serta MTTR memberi umpan balik apakah strategi perawatan berhasil. Jaga backlog rutin di kisaran 2 sampai 4 minggu dan item kritis di bawah satu minggu, beri setiap temuan prioritas dan penanggung jawab, serta baca MTBF bersama MTTR dan availability.

Yang membedakan tambang dengan downtime rendah bukan teknologi mahal, melainkan jadwal yang disepakati produksi dan maintenance, persiapan part sebelum unit masuk, dan disiplin LOTO. Dampaknya terhadap produksi bisa dibaca melalui [KPI alat PA, UA, MA, dan EU](/artikel/kpi-alat-tambang-pa-ua-ma-eu/).

## Pertanyaan yang sering diajukan

### Apa bedanya preventive dan predictive maintenance?

Preventive dilakukan berdasarkan jadwal tetap, misalnya setiap 250 jam. Predictive dilakukan berdasarkan kondisi aktual, misalnya hasil uji oli atau pemantauan getaran.

### Kenapa periodic service tidak boleh ditunda?

Penundaan membuat oli dan filter bekerja melewati batas, sehingga keausan meningkat. Biaya perbaikan akibat menunda biasanya jauh lebih besar daripada waktu service.

### Apa itu uji oli (oil sampling)?

Sampel oli dikirim ke laboratorium untuk mengetahui kandungan logam aus dan kontaminan. Hasilnya memberi sinyal awal kerusakan komponen sebelum terjadi.

### Apakah operator terlibat dalam perawatan?

Ya. Operator adalah orang pertama yang merasakan perubahan suara, getaran, dan performa. Laporan operator lewat P2H dan komunikasi langsung sangat berharga.

## Referensi

- Caterpillar Performance Handbook dan Operation & Maintenance Manual unit terkait.
- Komatsu Specifications & Application Handbook.
- Moubray, J. *Reliability-Centered Maintenance*. Industrial Press.
- Keputusan Menteri ESDM Nomor 1827 K/30/MEM/2018 tentang Pedoman Pelaksanaan Kaidah Teknik Pertambangan yang Baik.
- [Tutorial Analisa Produksi TambangPedia](/tutorial-analisa-produksi/), kumpulan artikel KPI dan loss produksi.
