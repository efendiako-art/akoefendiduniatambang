---
title: 'Tutorial Deswik CAD - Cara Menghitung Volume Cut & Fill'
description: 'Cara Menghitung dengan mudah dan cepat  Volume desain/design Cut & fill menggunakan software pertambangan Deswik Cad dengan dua kali Klik'
pubDate: 2026-10-19
updatedDate: 2026-10-24
category: tutorial-software-tambang
subcategory: belajar-deswik
tags: ['#Tutorial Deswik CAD', '#Cara Menghitung Volume Cut & Fill', '#tambangpedia', '#tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat']
image: '/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/sampul.webp'
imageAlt: 'Tutorial Deswik CAD_Menghitung Volume Design Solid dengan Topografi'
featured: true
draft: false
---

![Perhitungan Cut & Fill Deswik Cad](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-20-222646-e1.webp)

## Pendahuluan

Cut & Fill adalah istilah dalam teknik sipil dan pertambangan yang mengacu pada perhitungan volume tanah yang digali (cut) dan ditimbun (fill) dalam suatu proyek desain. Deswik CAD adalah perangkat lunak khusus yang digunakan untuk merancang operasi penambangan, termasuk perhitungan volume cut & fill secara presisi.

***

## Pengertian Cut & Fill

### Apa itu Cut?

Cut adalah volume material yang harus digali dan dipindahkan dari permukaan tanah asli agar elevasi lapangan sesuai dengan desain akhir yang direncanakan. Cut terjadi ketika permukaan desain berada di bawah kondisi ground asli, sehingga kelebihan tanah, batuan, atau material lain perlu dibuang. Volume cut dihitung dari selisih antara elevasi tanah asli dan elevasi desain pada setiap area. Hasilnya menjadi dasar perencanaan alat gali, jarak angkut, lokasi disposal, serta perkiraan biaya pekerjaan tanah.

### Apa itu Fill?

Fill adalah volume material yang harus ditambahkan atau diurug ke suatu area agar elevasi lapangan mencapai desain yang direncanakan. Fill terjadi ketika permukaan desain berada di atas kondisi ground asli, sehingga diperlukan material timbunan untuk menutup kekurangan elevasi. Material fill dapat berasal dari hasil cut di area lain pada proyek yang sama, atau didatangkan dari sumber luar apabila volume cut tidak mencukupi. Perhitungan volume fill menentukan kebutuhan material, pemadatan, serta urutan kerja agar permukaan akhir stabil dan sesuai gambar desain.

***

## Langkah-Langkah Menghitung Volume Cut & Fill di Deswik CAD

### 1\. Persiapan Data

Sebelum memulai perhitungan, pastikan Anda memiliki:

* Data Topografi (Solid )

![Gambar Topografi](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142208.webp)

* Data Design ( Solid )

![Contoh Gambar Design](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142323.webp)

### 2\. Import Data ke Deswik CAD

* Buka Deswik CAD dan buat project baru
* Pilih menu File → Import untuk memasukkan surface data asli (original ground surface) data ini bisa di ambil dari berbagai sumber software seperti surpac, vulcan, minescape dan software pertambangan lainnya, atau bisa juga langsung di drag dari data explorer di komputer.
* Import design surface yang akan dianalisis
    Setelah data sudah sudah tersedia, sudah bisa melangkah ke stip selanjutnya

### 3\. Mengakses Tools Cut & Fill

Langkah-langkah mengakses fitur cut & fill:

* masuk ke tools menu pada **SURVEY** seperti pada gambar berikut

![Gambar tools Menu pada survey](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142417.webp)

![Gambar tools Menu survey](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142526.webp)

* Pilih sub menu drop down querry seperti pada gambar di bawah ini

![Drop Down Query](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142650-2.webp)

* selanjutnya pilih menu surface cut and fill volumes seperti pada gambar di bawah ini

![Gambar surface cut & Fill](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-142859.webp)

* Maka muncul jendela top up seperti pada gambar di bawah ini

![gambar :](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/screenshot-2026-10-21-143015.webp)

* kemudian pilih Pick star surface ( dalam melakukan klik disini yang di klik adalah surfacenya atau topo solidnya seperti pada gambar di bawa. Jadi bebas di klik di area manapun selama masih di dalam area topo, tanda bahwa porses klik sudah berhasila dengan adanya code yang sudah tertera seperti di gambar kedua di bawah ini

![image.png](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-10.webp)

```
![image.png](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-11.webp)
```

* langkah selanjutnya sama dengan yang di atas yang dipilih adalah solid dari desain yang sebelumnya sudah di buat atau data solid desain yang ingin dihitung cut & fillnya seperti pada langakah sebelumnya

    ![image.png](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-12.webp)

    ![image.png](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-13.webp)
* selanjutnya klik calculate, tunggu beberapa menu sampai jendela top up keluar sebagai hasil dari perhitungan volume tersebut

    ![image.png](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-14.webp)

### 4\. Hasil Perhiutngan data

Atur parameter berikut:

* Klik Calculate atau Run Analysis
* Software akan memproses perbedaan antara original surface dan design surface
* Hasilnya akan menampilkan volume cut dan fill
* hasil data hiutngan Cut & Fill

    ![image.png](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-15.webp)
* Cut volume
    ![image.png](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-16.webp)
* fill volume
    ![image.png](/images/artikel/tutorial-deswik-cad-cara-menghitung-volume-cut-fill-dengan-cepat/image-17.webp)

### 5\. Interpretasi Hasil

Deswik CAD akan memberikan output:

| Parameter | Penjelasan |
| --------- | ---------- |
| Total Cut Volume | Volume total material yang perlu digali (dalam m³) |
| Total Fill Volume | Volume total material yang perlu ditambahkan (dalam m³) |
| Balance | Selisih antara cut dan fill (positif = surplus, negatif = deficit) |
| Cut-Fill Ratio | Perbandingan volume cut terhadap fill |

***

## Tips dan Best Practices

### 1\. Validasi Data Input

* Selalu verifikasi bahwa data survey akurat sebelum perhitungan
* Pastikan unit measurement konsisten (meter atau feet)
* Cek untuk outliers atau data yang tidak logis

### 2\. Cross\-Check Hasil

* Bandingkan hasil dengan perhitungan manual sederhana sebagai sanity check
* Gunakan formula dasar: Volume ≈ (Area × Average Height)
* Jika ada perbedaan signifikan, periksa kembali input data

### 3\. Dokumentasi

* Simpan screenshot hasil perhitungan
* Catat parameter dan setting yang digunakan
* Buat laporan tertulis dengan breakdown volume per zona jika diperlukan

### 4\. Optimisasi Design

* Jika cut-fill ratio tidak ideal (terlalu banyak cut atau fill), pertimbangkan adjust design
* Tujuannya adalah mencapai keseimbangan optimal antara cut dan fill
* Kurangi biaya transportasi material dengan meminimalkan borrow atau waste

***

## Troubleshooting Umum

Masalah: Hasil perhitungan tidak muncul

* Pastikan boundary sudah didefinisikan dengan benar
* Verifikasi bahwa kedua surface valid dan tidak ada missing data

Masalah: Angka volume terlihat tidak realistis

* Periksa unit measurement (m³ vs km³)
* Validasi akurasi survey data original surface
* Cek apakah design surface sudah final dan benar

Masalah: Software hang atau crash

* Kurangi jumlah points dalam surface (simplify mesh jika terlalu padat)
* Tutup program lain yang sedang berjalan
* Update software ke versi terbaru

***

## Kesimpulan

Volume cut dan fill di Deswik CAD pada dasarnya membandingkan permukaan tanah asli dengan permukaan desain di dalam batas area yang ditentukan. Angka yang keluar mengikuti data yang dimasukkan. Kalau surface-nya tertukar, batas hitungannya melebar ke luar area kerja, atau faktor pemadatan belum dimasukkan, volumenya tetap tampil rapi di laporan padahal tidak bisa dipakai.

Sebelum angka itu dibawa ke rencana gali, kebutuhan alat, atau perkiraan material timbunan, cek dulu secara kasar. Kalikan luas area dengan beda elevasi rata-rata, lalu bandingkan dengan total cut dan fill dari Deswik. Lihat juga peta zonanya. Area yang harusnya digali jangan sampai terbaca sebagai timbunan, dan sebaliknya. Selisih yang besar biasanya datang dari situ, bukan dari rumus perhitungannya.

1. Kalau kedua cek itu masuk akal, volume tersebut sudah cukup untuk perencanaan. Catat surface mana yang dipakai, batas areanya, dan asumsi pemadatan atau pengembangan materialnya. Orang yang membuka file yang sama bulan depan tidak perlu mengulang hitungan dari awal hanya karena asumsinya tidak tertulis.
