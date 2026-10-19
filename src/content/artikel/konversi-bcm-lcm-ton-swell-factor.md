---
title: 'BCM, LCM, dan Ton: Cara Konversi dengan Swell Factor dan Densitas'
description: 'Arti bcm, lcm, dan ccm di tambang, cara menghitung swell factor dan persen pengembangan, serta konversi volume ke ton dengan densitas material.'
pubDate: 2026-10-05
updatedDate: 2026-10-19
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

<figure class="diagram">
<svg viewBox="0 0 480 232" role="img" aria-label="Perbandingan volume material dalam kondisi asli, lepas, dan padat">
<line class="ln" x1="20" y1="150" x2="460" y2="150"/>
<rect class="box" x="40" y="60" width="90" height="90"/>
<rect class="acf" x="195" y="37.5" width="90" height="112.5"/>
<rect class="box" x="350" y="69" width="90" height="81" style="fill-opacity:.8"/>
<text class="b" x="85" y="110" text-anchor="middle">1,00</text>
<text class="b" x="240" y="100" text-anchor="middle">1,25</text>
<text class="b" x="395" y="114" text-anchor="middle">≈ 0,9</text>
<line class="ln" x1="138" y1="104" x2="184" y2="104"/>
<polygon class="head" points="190,104 182,99 182,109"/>
<text class="s m" x="164" y="96" text-anchor="middle">digali</text>
<line class="ln" x1="293" y1="104" x2="339" y2="104"/>
<polygon class="head" points="345,104 337,99 337,109"/>
<text class="s m" x="319" y="96" text-anchor="middle">dipadatkan</text>
<text class="b" x="85" y="174" text-anchor="middle">Asli (bcm)</text>
<text class="b" x="240" y="174" text-anchor="middle">Lepas (lcm)</text>
<text class="b" x="395" y="174" text-anchor="middle">Padat (ccm)</text>
<text class="s m" x="85" y="192" text-anchor="middle">di tempatnya</text>
<text class="s m" x="240" y="192" text-anchor="middle">di bak truk</text>
<text class="s m" x="395" y="192" text-anchor="middle">di timbunan</text>
<text class="s m" x="240" y="220" text-anchor="middle">Berat tetap sama, hanya volumenya yang berubah (contoh swell 25%).</text>
</svg>
<figcaption>Contoh angka: 1 bcm tanah menjadi 1,25 lcm setelah digali (swell 25%, swell factor 0,8), lalu sedikit menyusut saat dipadatkan. Nilai sebenarnya berbeda untuk tiap material.</figcaption>
</figure>

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

## Contoh lengkap: dari ritase ke ton batubara

Sebuah fleet mengangkut batubara dengan 45 ritase per hari. Kapasitas bak 20 ton nominal, tetapi hasil timbang rata-rata muatan aktual 18,5 ton.

```
Produksi = 45 × 18,5 = 832,5 ton per hari
```

Jika kita memakai kapasitas nominal, hitungannya 45 × 20 = 900 ton, atau 67,5 ton lebih banyak dari kenyataan. Itu sebabnya angka produksi harus memakai muatan aktual dari jembatan timbang bila tersedia, bukan kapasitas bak.

## Tabel konversi cepat

| Dari | Ke | Cara |
| --- | --- | --- |
| bcm | lcm | Kali (1 + persen pengembangan), atau bagi swell factor |
| lcm | bcm | Kali swell factor |
| bcm | ton | Kali densitas insitu (ton/bcm) |
| lcm | ton | Kali densitas lepas (ton/lcm) |
| ton | bcm | Bagi densitas insitu |

## Pertanyaan yang sering diajukan

### Apa bedanya densitas insitu dan densitas lepas?

Densitas insitu adalah massa per volume material yang masih utuh di alam. Densitas lepas lebih kecil karena material sudah mengembang dan berongga. Keduanya terkait lewat swell factor.

### Kenapa swell factor bisa berbeda untuk tiap material?

Karena sifat material berbeda. Tanah liat, batupasir, dan batuan keras menghasilkan ukuran butir dan rongga yang berbeda saat digali, sehingga pengembangannya berbeda.

### Mana yang dipakai untuk menagih kontraktor, bcm atau lcm?

Umumnya bcm hasil survei, karena itu volume yang sebenarnya dipindahkan dari kondisi insitu. Ketentuan pastinya tertulis di kontrak masing-masing.

### Apakah SF dari buku bisa langsung dipakai?

Sebaiknya hanya sebagai titik awal. Ukur di lapangan dengan membandingkan hasil survei dan jumlah ritase, lalu sesuaikan.
