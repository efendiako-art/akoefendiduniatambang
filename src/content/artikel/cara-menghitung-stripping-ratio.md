---
title: 'Stripping Ratio: Pengertian, Rumus, dan Cara Menghitungnya'
description: 'Panduan stripping ratio (SR) tambang batubara: rumus SR, break even stripping ratio (BESR), contoh hitungan, dan faktor yang memengaruhinya.'
pubDate: 2026-10-03
updatedDate: 2026-10-19
category: operasi-produksi
tags: ['stripping ratio', 'BESR', 'batubara', 'perencanaan tambang']
featured: true
---

**Stripping ratio (SR)** adalah perbandingan antara jumlah tanah penutup (*overburden*, OB) yang harus dibongkar dengan jumlah batubara atau bijih yang didapat. Angka ini menentukan apakah sebuah tambang terbuka layak secara ekonomi.

Semakin besar SR, semakin banyak tanah yang harus dipindahkan untuk mendapat satu ton batubara, dan semakin mahal biaya penambangannya.

## Rumus stripping ratio

Di tambang batubara Indonesia, SR umumnya dinyatakan dalam **bcm per ton**:

```
SR = Volume overburden (bcm) / Tonase batubara (ton)
```

- **bcm** (*bank cubic meter*): volume tanah dalam kondisi asli sebelum digali.
- **ton**: berat batubara yang tertambang.

Contoh: SR 6 berarti untuk setiap 1 ton batubara, perlu membongkar 6 bcm overburden.

Di tambang mineral, SR kadang dinyatakan dalam ton/ton (berat waste dibagi berat bijih). Pastikan satuan selalu ditulis agar tidak salah tafsir.

## Contoh hitungan

Sebuah pit memiliki rencana bulanan:

| Item | Nilai |
| --- | --- |
| Overburden dibongkar | 1.200.000 bcm |
| Batubara tertambang | 200.000 ton |

```
SR = 1.200.000 / 200.000 = 6,0 bcm/ton
```

Jika realisasi bulan itu OB 1.150.000 bcm dan batubara 175.000 ton, SR aktualnya 6,57. Artinya batubara yang terbuka lebih sedikit dari rencana. Penyebabnya bisa seam lebih tipis dari model geologi, *coal loss* saat penggalian, atau urutan penambangan yang bergeser.

<figure class="diagram">
<svg viewBox="0 0 480 270" role="img" aria-label="Penampang pit: tanah penutup dibongkar untuk menyingkap lapisan batubara">
<rect class="box" x="10" y="40" width="460" height="80"/>
<polygon class="acf dash" points="130,40 180,120 300,120 350,40"/>
<rect class="coal" x="10" y="120" width="460" height="34"/>
<rect x="180" y="120" width="120" height="34" style="fill:#3b342e;stroke:var(--accent);stroke-width:2.5"/>
<rect class="box" x="10" y="154" width="460" height="50" style="fill-opacity:.6"/>
<line class="ln" x1="10" y1="40" x2="130" y2="40"/>
<line class="ln" x1="350" y1="40" x2="470" y2="40"/>
<text class="s m" x="14" y="31">Permukaan tanah</text>
<text class="b" x="20" y="86">Overburden (OB)</text>
<text class="b ac" x="240" y="84" text-anchor="middle">OB dibongkar</text>
<text class="s m" x="240" y="102" text-anchor="middle">(bcm)</text>
<text class="s w" x="20" y="141">Lapisan batubara</text>
<text class="s w" x="240" y="141" text-anchor="middle">Batubara tersingkap</text>
<text class="s m" x="20" y="184">Lantai (floor)</text>
<text class="b" x="240" y="232" text-anchor="middle">SR = volume OB ÷ tonase batubara</text>
<text class="s m" x="240" y="254" text-anchor="middle">1.200.000 bcm ÷ 200.000 ton = 6 bcm/ton</text>
</svg>
<figcaption>Penampang sederhana sebuah pit. Semakin tebal tanah penutup yang harus dibongkar untuk menyingkap seam, semakin besar stripping ratio.</figcaption>
</figure>

## Break even stripping ratio (BESR)

BESR adalah SR tertinggi yang masih memberi keuntungan nol, atau titik impas. Rumus sederhananya:

```
BESR = (Harga jual batubara − Biaya penambangan batubara per ton) / Biaya pengupasan OB per bcm
```

Biaya penambangan batubara per ton di sini mencakup penggalian batubara, pengangkutan, pengolahan, royalti, dan biaya lain selain pengupasan OB.

**Contoh:**

| Komponen | Nilai |
| --- | --- |
| Harga jual | USD 60/ton |
| Biaya batubara (selain OB) | USD 24/ton |
| Biaya pengupasan OB | USD 3/bcm |

```
BESR = (60 − 24) / 3 = 12 bcm/ton
```

Selama SR di bawah 12, tambang masih untung. Dalam praktik, perusahaan memakai batas yang lebih rendah dari BESR untuk menyisakan margin keuntungan dan risiko harga.

## Faktor yang memengaruhi stripping ratio

1. **Kemiringan dan kedalaman lapisan batubara.** Makin dalam seam, makin banyak OB di atasnya.
2. **Ketebalan seam.** Seam tebal menghasilkan tonase besar untuk volume OB yang sama.
3. **Sudut lereng (slope) pit.** Lereng yang lebih curam mengurangi OB, tetapi harus aman secara geoteknik.
4. **Desain pit dan urutan penambangan.** Batas pit menentukan berapa OB yang ikut terbongkar.
5. **Harga komoditas.** Harga naik membuat BESR naik, sehingga area dengan SR lebih tinggi menjadi layak ditambang.

## SR dan kontrak jasa pertambangan

Di kontrak antara pemilik tambang dan kontraktor, pembayaran biasanya dipisah: **tarif per bcm OB** dan **tarif per ton batubara**. Karena itu SR aktual yang meleset dari rencana langsung memengaruhi pendapatan kontraktor dan biaya pemilik tambang. Rekonsiliasi volume OB dengan survei bulanan menjadi sangat penting.

## Hitung sendiri

Gunakan [Kalkulator Stripping Ratio & BESR](/alat/stripping-ratio/) untuk menghitung SR dan titik impas tambang Anda dalam hitungan detik.

## Contoh: memilih blok mana yang layak digali

Pakai BESR 12 bcm/ton dari contoh sebelumnya: harga jual USD 60 per ton, biaya batubara di luar pengupasan USD 24 per ton, dan biaya pengupasan USD 3 per bcm. Misalkan ada tiga blok kandidat:

| Blok | SR (bcm/ton) | Biaya OB per ton batubara (USD) | Margin per ton (USD) | Keputusan |
| --- | --- | --- | --- | --- |
| A | 5,5 | 16,5 | 19,5 | Layak, prioritas |
| B | 9,0 | 27,0 | 9,0 | Layak, margin tipis |
| C | 13,0 | 39,0 | −3,0 | Tidak layak pada harga ini |

Rumusnya sederhana: margin per ton = harga − biaya batubara − (SR × biaya pengupasan per bcm). Pada blok C, 60 − 24 − (13 × 3) = −3. Dalam praktik, penjadwalan memadukan beberapa blok. Blok A dan B dikerjakan lebih dulu, sementara blok C menunggu harga atau biaya yang lebih baik. Perhitungan ini juga menyederhanakan banyak hal, seperti biaya tetap, royalti, dan waktu.

## Beberapa cara menyebut stripping ratio

| Jenis | Cakupan | Dipakai untuk |
| --- | --- | --- |
| SR rata-rata (overall) | Seluruh pit atau seluruh umur tambang | Menilai kelayakan proyek |
| SR periodik | Satu bulan atau satu tahun | Membandingkan rencana dan realisasi |
| SR instan atau incremental | Satu tahap penambahan batas pit | Menentukan batas pit yang ekonomis |

Saat membaca angka SR, selalu pastikan jenis dan satuannya, karena angka yang sama bisa berarti hal yang berbeda.

## Pertanyaan yang sering diajukan

### SR berapa yang dianggap tinggi?

Tidak ada angka mutlak. SR dinilai terhadap BESR, harga jual, dan biaya pengupasan. SR 8 bisa menguntungkan pada harga tinggi, tetapi merugi pada harga rendah.

### Apa bedanya SR dalam bcm/ton dan ton/ton?

Keduanya dihubungkan oleh densitas overburden. SR dalam ton/ton sama dengan SR dalam bcm/ton dikali densitas overburden dalam ton per bcm. Misalnya SR 6 bcm/ton dengan densitas 2,2 ton/bcm sama dengan 13,2 ton/ton.

### Kenapa SR aktual sering di atas rencana?

Penyebab umum: seam ternyata lebih tipis dari model geologi, ada kehilangan batubara (coal loss) saat penggalian, lereng harus dibuat lebih landai karena pertimbangan geoteknik, atau overburden yang terbongkar lebih banyak dari perkiraan.

### Apakah BESR sama untuk semua perusahaan?

Tidak. BESR bergantung pada harga yang diterima, biaya penambangan, dan biaya pengupasan masing-masing perusahaan, sehingga angkanya berbeda dan berubah mengikuti kondisi pasar.
