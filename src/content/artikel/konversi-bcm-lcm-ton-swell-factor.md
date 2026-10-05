---
title: 'BCM, LCM, dan Ton: Cara Konversi dengan Swell Factor dan Densitas'
description: 'Arti bcm, lcm, dan ccm di tambang, cara menghitung swell factor dan persen pengembangan, serta konversi volume ke ton dengan densitas material.'
pubDate: 2026-10-05
category: operasi-produksi
tags: ['bcm', 'lcm', 'swell factor', 'densitas', 'konversi']
---

Banyak selisih angka produksi di lapangan bukan karena salah hitung, tapi karena satuan yang tercampur. Survei bicara bcm, dispatch menghitung ritase truk yang isinya lcm, sementara batubara ditimbang dalam ton. Kalau tidak dikonversi dengan benar, rekonsiliasi akhir bulan pasti ribut.

## Tiga kondisi volume material

| Satuan | Kepanjangan | Kondisi material |
| --- | --- | --- |
| **bcm** | bank cubic meter | Volume asli di tempatnya, belum digali |
| **lcm** | loose cubic meter | Volume setelah digali, gembur dan mengembang |
| **ccm** | compacted cubic meter | Volume setelah dipadatkan, misalnya di timbunan atau jalan |

Saat tanah digali, butirannya terlepas dan rongga di antaranya bertambah. Akibatnya volume membesar walaupun beratnya tetap sama. Itulah kenapa 1 bcm tanah bisa menjadi lebih dari 1 lcm di bak truk.

## Swell factor dan persen pengembangan

Ada dua cara menyatakan pengembangan ini, dan keduanya sering tertukar:

```
Persen swell = (Volume lepas − Volume asli) / Volume asli × 100%
Swell factor (SF) = Volume asli / Volume lepas = 1 / (1 + persen swell)
```

Contoh: material dengan persen swell 25% punya swell factor 1 / 1,25 = 0,8. Artinya setiap 1 lcm setara 0,8 bcm.

Rumus praktis yang dipakai sehari-hari:

```
bcm = lcm × SF
lcm = bcm / SF
```

## Contoh: menghitung produksi dari ritase truk

Dalam satu shift, sebuah fleet mencatat 180 ritase. Kapasitas bak truk 29 lcm dan material OB punya SF 0,8.

```
Volume lepas = 180 × 29 = 5.220 lcm
Volume asli  = 5.220 × 0,8 = 4.176 bcm
```

Angka 4.176 bcm inilah yang nanti dibandingkan dengan hasil survei. Kalau survei bulanan selalu lebih kecil dari hitungan ritase, ada dua kemungkinan: truk sering tidak penuh, atau nilai SF yang dipakai terlalu optimistis.

## Dari volume ke ton

Untuk material yang dibayar per ton, seperti batubara, dipakai densitas:

```
Ton = Volume × Densitas
```

Pastikan densitasnya sesuai kondisi volume. Densitas asli (bank density) dipakai untuk bcm, densitas lepas (loose density) untuk lcm. Hubungannya:

```
Densitas lepas = Densitas asli × SF
```

Contoh: OB dengan densitas asli 2,2 ton/bcm dan SF 0,8 punya densitas lepas 2,2 × 0,8 = 1,76 ton/lcm. Truk berkapasitas 29 lcm berarti membawa sekitar 29 × 1,76 = 51 ton. Angka ini penting untuk memastikan truk tidak kelebihan muatan dari batas payload pabrikan.

## Nilai SF tidak boleh asal ambil

Nilai swell factor berbeda untuk tiap material: tanah lempung, pasir, batu pasir, batuan hasil peledakan, semuanya berbeda. Bahkan di satu pit, nilai SF bisa berubah ketika formasi batuannya berganti.

Cara paling benar adalah mengukurnya di lokasi sendiri:

1. Ukur volume asli sebuah blok kecil dengan survei sebelum digali.
2. Gali blok tersebut dan hitung volume lepasnya dari jumlah ritase truk yang penuh dan rata.
3. Bandingkan keduanya.

Ulangi uji ini secara berkala, terutama saat material berubah. Nilai dari tabel buku referensi cukup untuk perkiraan awal, tapi untuk dasar pembayaran kontrak, angka uji lapangan jauh lebih bisa dipertanggungjawabkan.

## Kesalahan yang sering terjadi

- **Mengalikan lcm dengan densitas asli.** Hasil tonase jadi terlalu besar.
- **Memakai SF satu angka untuk semua material.** Selisih kecil per ritase menjadi besar dalam satu bulan.
- **Menganggap bak truk selalu penuh.** Padahal kapasitas yang tertulis adalah kapasitas munjung ideal. Pantau payload aktual lewat timbangan atau sistem monitoring kalau ada.

Konsep ini juga dipakai di [kalkulator produktivitas excavator dan truk](/alat/produktivitas/), yang memakai swell factor untuk mengubah hasil lcm menjadi bcm.
