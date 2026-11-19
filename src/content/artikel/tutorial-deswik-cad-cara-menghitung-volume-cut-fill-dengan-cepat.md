---
title: 'Tutorial Deswik CAD: Cara Menghitung Volume Cut & Fill'
description: 'Tutorial Deswik CAD menghitung volume cut dan fill antara topografi dan solid desain lewat menu Survey > Query, lengkap dengan contoh kasus dan kesalahan umum.'
pubDate: 2026-10-19
updatedDate: 2026-11-19
category: tutorial-software-tambang
subcategory: deswik-cad
tags: ['tutorial deswik cad', 'cut and fill', 'volume cut fill', 'deswik', 'software tambang']
image: '/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/sampul.webp'
imageAlt: 'Tutorial Deswik CAD menghitung volume cut dan fill antara solid desain dan topografi'
featured: true
draft: false
---

Tutorial Deswik CAD ini membahas cara menghitung volume cut dan fill antara permukaan topografi dan solid desain hanya dengan beberapa klik. Fitur yang dipakai adalah Surface Cut and Fill Volumes di menu Survey. Hasilnya bisa langsung dipakai untuk perencanaan alat gali, kebutuhan material timbunan, dan pengecekan desain.

![Simulasi desain cut dan fill di Deswik CAD: solid desain berwarna magenta di atas topografi pit](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-20-222646-e1.webp)

## Pengertian cut dan fill

Cut dan fill adalah istilah dalam teknik sipil dan pertambangan untuk volume tanah yang digali (cut) dan ditimbun (fill) agar permukaan lapangan sesuai desain. Deswik CAD adalah perangkat lunak perencanaan tambang yang bisa menghitung kedua volume ini secara presisi dari dua permukaan.

### Apa itu cut?

Cut adalah volume material yang harus digali dan dipindahkan dari permukaan tanah asli agar elevasi lapangan sesuai dengan desain akhir. Cut terjadi ketika permukaan desain berada di bawah ground asli, sehingga kelebihan tanah atau batuan perlu dibuang. Volume cut menjadi dasar perencanaan alat gali, jarak angkut, lokasi disposal, dan perkiraan biaya pekerjaan tanah.

### Apa itu fill?

Fill adalah volume material yang harus ditambahkan atau diurug agar elevasi lapangan mencapai desain. Fill terjadi ketika permukaan desain berada di atas ground asli. Material fill dapat berasal dari hasil cut di area lain pada proyek yang sama, atau didatangkan dari luar jika cut tidak mencukupi. Volume fill menentukan kebutuhan material, pekerjaan pemadatan, dan urutan kerja.

Secara sederhana, rumus yang dikerjakan software untuk setiap titik grid adalah:

```
Beda elevasi  = Elevasi desain − Elevasi topografi
Beda < 0      → termasuk cut  (desain di bawah tanah asli)
Beda > 0      → termasuk fill (desain di atas tanah asli)
Volume        = Σ (luas sel grid × |beda elevasi|)
```

![Alur menghitung volume cut dan fill di Deswik CAD dari persiapan data sampai pengecekan hasil](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/diagram-alur-cut-fill-deswik.webp)

## Persiapan sebelum menghitung

Sebelum membuka menu perhitungan, pastikan beberapa hal berikut sudah siap:

- **Surface topografi** (permukaan awal) dalam bentuk solid atau surface yang tertutup rapi, hasil survei terbaru.
- **Solid atau surface desain** yang akan dihitung, misalnya desain pit, jalan, atau timbunan.
- **Sistem koordinat yang sama** untuk kedua data. Data dari Surpac, Vulcan, Minescape, atau software lain harus satu datum dan satu satuan (meter).
- **Batas area** bila hanya ingin menghitung sebagian wilayah, dalam bentuk polygon tertutup.

Data topografi yang dipakai pada contoh ini:

![Data topografi berupa surface tanah asli yang akan menjadi start surface](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142208.webp)

Data desain yang akan dihitung, ditampilkan di atas topografi:

![Solid desain berwarna magenta dan hijau ditampilkan di atas topografi](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142323.webp)

## Langkah-langkah menghitung volume cut dan fill di Deswik CAD

### 1. Import data ke Deswik CAD

- Buka Deswik CAD dan buat atau buka project.
- Pilih **File → Import** untuk memasukkan surface tanah asli (original ground). Data juga bisa langsung diseret (drag) dari Windows Explorer ke layar Deswik.
- Import juga solid atau surface desain yang akan dianalisis.
- Pastikan kedua data tampil di posisi yang sama, tidak bergeser atau berbeda elevasi secara tidak wajar.

### 2. Buka menu Survey

Masuk ke tab **Survey** pada ribbon menu di bagian atas.

![Ribbon menu Deswik CAD dengan tab Survey terbuka](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142417.webp)

Pada grup **Measure & Query**, cari tombol **Query**.

![Grup Measure dan Query pada tab Survey berisi Distance, Point, dan Query](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142526.webp)

### 3. Pilih Surface Cut and Fill Volumes

Klik panah kecil di samping **Query** sampai daftar perintah muncul.

![Daftar perintah pada drop down Query di menu Survey Deswik CAD](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142650-2.webp)

Pilih **Surface Cut and Fill Volumes**. Keterangan perintah menjelaskan bahwa fitur ini menghitung volume cut dan fill antara dua surface, dan bisa dibatasi di dalam polygon.

![Perintah Surface Cut and Fill Volumes beserta keterangan fungsinya](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142859.webp)

Jendela **Surface Volumes** akan terbuka.

![Jendela Surface Volumes berisi Pick start surface, Pick finish surface, dan tab Entire surface](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-143015.webp)

### 4. Pilih start surface (topografi)

Klik tombol panah pada **Pick start surface**, lalu klik di mana saja pada permukaan topografi. Selama yang diklik masih bagian dari topografi, posisinya bebas.

![Mengklik permukaan topografi untuk dijadikan start surface](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-10.webp)

Tanda bahwa pemilihan berhasil adalah munculnya kode ID entitas di kolom start surface.

![Kode ID entitas topografi muncul di kolom Pick start surface](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-11.webp)

### 5. Pilih finish surface (desain)

Lakukan hal yang sama pada **Pick finish surface**, kali ini klik solid desain yang ingin dihitung.

![Solid desain yang diklik sebagai finish surface](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-12.webp)

![Kode ID entitas desain muncul di kolom Pick finish surface](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-13.webp)

Gunakan tab **Entire surface** untuk menghitung seluruh area, atau **Within polygons** bila hanya ingin menghitung di dalam batas polygon tertentu.

### 6. Klik Calculate

Klik **Calculate** dan tunggu beberapa saat. Lama prosesnya tergantung kerapatan titik kedua surface.

![Tombol Calculate di bagian bawah jendela Surface Volumes](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-14.webp)

### 7. Baca hasil perhitungan

Hasil tampil langsung di jendela yang sama.

![Hasil perhitungan Surface Volumes menampilkan volume cut dan volume fill](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-15.webp)

**Cut volume to remove from start surface** adalah volume yang harus digali dari topografi:

![Nilai cut volume to remove from start surface sebesar 34.171,8 meter kubik](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-16.webp)

**Fill volume to add to start surface** adalah volume yang harus ditimbun di atas topografi:

![Nilai fill volume to add to start surface sebesar 158.055,5 meter kubik](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-17.webp)

Gunakan tombol **Copy** untuk menyalin hasil ke Excel atau laporan.

## Cara membaca dan mengolah hasil

Deswik menampilkan dua angka utama dalam meter kubik kondisi padat (bank). Angka turunan seperti selisih dan rasio dihitung sendiri:

| Parameter | Sumber | Penjelasan |
| --- | --- | --- |
| Cut volume | Langsung dari Deswik | Volume material yang perlu digali (m³) |
| Fill volume | Langsung dari Deswik | Volume material yang perlu ditimbun (m³) |
| Balance | Dihitung sendiri: cut − fill | Positif berarti surplus material, negatif berarti kekurangan |
| Rasio cut/fill | Dihitung sendiri: cut ÷ fill | Menunjukkan keseimbangan pekerjaan tanah |

## Contoh kasus: desain timbunan yang kekurangan material

Pada contoh di atas, hasilnya adalah cut 34.171,8 m³ dan fill 158.055,5 m³. Mari olah angka ini:

```
Balance       = 34.171,8 − 158.055,5 = −123.883,7 m³ (kekurangan)
Rasio cut/fill = 34.171,8 ÷ 158.055,5 = 0,22
```

Artinya hasil galian di area desain hanya menutup sekitar 22% kebutuhan timbunan. Sisanya, sekitar 124 ribu m³, harus didatangkan dari area lain, misalnya overburden dari pit aktif. Jika material timbunan dipadatkan, kebutuhan materialnya perlu dikoreksi lagi dengan faktor susut atau pengembangan, seperti dijelaskan di artikel [konversi BCM, LCM, dan ton dengan swell factor](/artikel/konversi-bcm-lcm-ton-swell-factor/).

Dari angka kekurangan ini, perencana bisa menghitung kebutuhan ritase dan armada. Misalnya jika satu dump truck membawa 20 m³ padat per ritase (angka contoh), dibutuhkan sekitar 6.200 ritase. Cara menghitung kebutuhan alatnya ada di artikel [produktivitas excavator dan dump truck](/artikel/produktivitas-excavator-dan-dump-truck/).

## Tips agar hasil bisa dipercaya

- **Verifikasi data survei** sebelum dihitung: tanggal survei, cakupan area, dan titik yang tidak wajar.
- **Cek satuan**: pastikan kedua data dalam meter.
- **Cek kasar secara manual**: luas area × beda elevasi rata-rata. Hasilnya harus berada di kisaran yang sama dengan angka Deswik.
- **Dokumentasikan**: simpan tangkapan layar hasil, nama surface yang dipakai, batas area, dan tanggal data.
- **Optimalkan desain**: jika rasio cut/fill jauh dari kebutuhan, pertimbangkan mengubah elevasi desain untuk mengurangi material yang harus didatangkan atau dibuang.

## Kesalahan umum saat menghitung cut dan fill

- **Start dan finish surface tertukar.** Akibatnya angka cut dan fill terbalik. Start surface selalu kondisi awal (topografi), finish surface kondisi akhir (desain).
- **Topografi lama.** Memakai survei beberapa bulan lalu di area yang sudah digali membuat volume terlalu besar.
- **Surface tidak menutupi seluruh area desain.** Bagian desain di luar cakupan topografi tidak terhitung atau terhitung salah.
- **Lupa membatasi dengan polygon.** Menghitung seluruh surface padahal yang dibutuhkan hanya satu blok membuat angka melebar.
- **Mengabaikan faktor pemadatan dan pengembangan.** Volume dari Deswik adalah volume geometri, belum termasuk perubahan volume material.

## Masalah yang sering muncul dan solusinya

**Hasil perhitungan tidak muncul.** Pastikan kedua surface valid, tidak ada bagian yang terbuka, dan polygon batas (jika dipakai) tertutup.

**Angka volume tidak realistis.** Periksa satuan, akurasi data topografi, dan apakah desain sudah versi final.

**Software lambat atau berhenti merespons.** Sederhanakan surface yang terlalu rapat titiknya, tutup program lain, dan gunakan versi Deswik yang didukung perusahaan.

## Kesimpulan

Menghitung volume cut dan fill di Deswik CAD pada dasarnya membandingkan permukaan tanah asli dengan permukaan desain lewat menu Survey, Query, lalu Surface Cut and Fill Volumes. Prosesnya cepat: pilih start surface, pilih finish surface, lalu Calculate. Angka yang keluar mengikuti data yang dimasukkan, sehingga pastikan surface tidak tertukar, topografi terbaru, dan batas area tepat. Sebelum dipakai untuk rencana gali atau kebutuhan timbunan, lakukan cek kasar luas × beda elevasi, hitung balance dan rasionya, lalu catat surface, batas area, dan asumsi pemadatan yang dipakai agar hasilnya bisa ditelusuri ulang.

## Pertanyaan yang sering diajukan

### Apakah satuan hasil Deswik dalam bcm?

Hasilnya adalah volume geometri dalam satuan koordinat, umumnya meter kubik. Karena dihitung dari permukaan sebelum dan sesudah, volume ini setara kondisi padat di tempat (bank) untuk cut. Untuk fill, sesuaikan dengan faktor pemadatan material.

### Apa beda tab Entire surface dan Within polygons?

Entire surface menghitung seluruh area tumpang tindih kedua surface. Within polygons membatasi perhitungan hanya di dalam polygon yang dipilih, berguna untuk menghitung per blok atau per zona.

### Bisakah menghitung progres galian bulanan dengan cara ini?

Bisa. Gunakan topografi awal bulan sebagai start surface dan topografi akhir bulan sebagai finish surface. Volume cut adalah material yang tergali selama bulan itu.

### Mengapa volume fill jauh lebih besar dari cut?

Karena desain berada lebih tinggi daripada tanah asli di sebagian besar area, misalnya desain timbunan atau jalan di atas lembah. Itu bukan kesalahan, tetapi tanda bahwa material harus didatangkan dari luar area.

## Referensi

- Deswik.CAD Help, dokumentasi resmi Deswik untuk perintah Survey dan Surface Cut and Fill Volumes.
- Peurifoy, R. L. et al. *Construction Planning, Equipment, and Methods*. McGraw-Hill.
- Hartman, H. L. & Mutmansky, J. M. *Introductory Mining Engineering*. Wiley.
- Keputusan Menteri ESDM Nomor 1827 K/30/MEM/2018 tentang Pedoman Pelaksanaan Kaidah Teknik Pertambangan yang Baik.
