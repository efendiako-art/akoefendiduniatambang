---
title: 'Cara Menghitung Produktivitas Excavator dan Dump Truck'
description: 'Rumus produktivitas excavator dan dump truck, cycle time, jumlah truk yang dibutuhkan, dan match factor, lengkap dengan contoh hitungan.'
pubDate: 2026-10-01
updatedDate: 2026-10-19
category: alat-berat
tags: ['produktivitas', 'excavator', 'dump truck', 'match factor', 'cycle time']
---

Excavator dan dump truck adalah pasangan utama di tambang terbuka. Produksi harian ditentukan oleh seberapa cepat excavator memuat dan seberapa banyak truk yang mengangkut. Jika jumlah truk terlalu sedikit, excavator menganggur. Jika terlalu banyak, truk antre di loading point.

Artikel ini membahas cara menghitung produktivitas keduanya dan menentukan jumlah truk yang pas.

## Istilah yang perlu dipahami

| Istilah | Arti |
| --- | --- |
| **q** | Kapasitas bucket excavator (m³, kondisi lepas/munjung) |
| **K** | Bucket fill factor, persentase bucket terisi (0,8–1,1 tergantung material) |
| **CT** | Cycle time, waktu satu siklus kerja |
| **E** | Efisiensi kerja (0,75–0,85 umum di lapangan) |
| **SF** | Swell factor, konversi volume lepas ke volume asli (bcm = lcm × SF) |
| **lcm / bcm** | *Loose* dan *bank cubic meter*: volume lepas dan volume asli |

## 1. Produktivitas excavator

```
Q (lcm/jam) = q × K × (3600 / CT detik) × E
Q (bcm/jam) = Q (lcm/jam) × SF
```

**Contoh** excavator kelas 100 ton:

- q = 6,5 m³
- K = 0,9
- CT = 30 detik (gali, swing isi, tumpah, swing kosong)
- E = 0,83
- SF = 0,8

```
Q = 6,5 × 0,9 × 120 × 0,83 = 582,7 lcm/jam
Q = 582,7 × 0,8 = 466 bcm/jam
```

> Cycle time paling besar pengaruhnya. Turun 3 detik saja (dari 30 ke 27 detik) menaikkan produksi lebih dari 10%. Posisi truk yang tepat dan tinggi jenjang yang ideal adalah cara termurah untuk memangkasnya.

## 2. Jumlah bucket (pass) per truk

```
n = Kapasitas truk (lcm) / (q × K)
```

Truk dengan kapasitas munjung 29 lcm: n = 29 / (6,5 × 0,9) = 4,96, dibulatkan menjadi **5 pass**.

Waktu muat truk = 5 × 30 detik = 150 detik = **2,5 menit**.

<figure class="diagram">
<svg viewBox="0 0 480 240" role="img" aria-label="Rincian waktu satu siklus dump truck: muat, angkut, buang, kembali, dan antre">
<text class="b" x="20" y="24">Satu siklus dump truck = 15 menit</text>
<rect x="20.00" y="38" width="73.33" height="36" style="fill:var(--accent);fill-opacity:.6;stroke:var(--line);stroke-width:1.2"/>
<text class="b s" x="56.67" y="61" text-anchor="middle">2,5</text>
<rect x="93.33" y="38" width="176.00" height="36" style="fill:var(--accent);fill-opacity:.3;stroke:var(--line);stroke-width:1.2"/>
<text class="b s" x="181.33" y="61" text-anchor="middle">6,0</text>
<rect x="269.33" y="38" width="29.33" height="36" style="fill:var(--ink-2);fill-opacity:.5;stroke:var(--line);stroke-width:1.2"/>
<text class="b s" x="284.00" y="61" text-anchor="middle">1,0</text>
<rect x="298.67" y="38" width="117.33" height="36" style="fill:var(--bg-sunk);stroke:var(--line);stroke-width:1.2"/>
<text class="b s" x="357.33" y="61" text-anchor="middle">4,0</text>
<rect x="416.00" y="38" width="44.00" height="36" style="fill:var(--ink-3);fill-opacity:.4;stroke:var(--line);stroke-width:1.2"/>
<text class="b s" x="438.00" y="61" text-anchor="middle">1,5</text>
<rect x="20" y="90" width="13" height="13" style="fill:var(--accent);fill-opacity:.6;stroke:var(--line);stroke-width:1.2"/>
<text class="s" x="42" y="101">Muat (loading, 5 pass) — 2,5 menit</text>
<rect x="20" y="112" width="13" height="13" style="fill:var(--accent);fill-opacity:.3;stroke:var(--line);stroke-width:1.2"/>
<text class="s" x="42" y="123">Angkut bermuatan 2 km — 6,0 menit</text>
<rect x="20" y="134" width="13" height="13" style="fill:var(--ink-2);fill-opacity:.5;stroke:var(--line);stroke-width:1.2"/>
<text class="s" x="42" y="145">Buang (dumping) — 1,0 menit</text>
<rect x="20" y="156" width="13" height="13" style="fill:var(--bg-sunk);stroke:var(--line);stroke-width:1.2"/>
<text class="s" x="42" y="167">Kembali kosong 2 km — 4,0 menit</text>
<rect x="20" y="178" width="13" height="13" style="fill:var(--ink-3);fill-opacity:.4;stroke:var(--line);stroke-width:1.2"/>
<text class="s" x="42" y="189">Spotting & antre — 1,5 menit</text>
<text class="b s" x="240" y="228" text-anchor="middle">Muat 1 truk = 2,5 menit; siklus 15 menit → 6 truk</text>
</svg>
<figcaption>Rincian cycle time truk pada contoh di atas. Jarak angkut adalah komponen yang paling mudah berubah, sehingga jumlah truk yang dibutuhkan ikut berubah.</figcaption>
</figure>

## 3. Cycle time dump truck

Cycle time truk adalah jumlah semua tahap:

| Tahap | Menit |
| --- | --- |
| Loading (5 pass) | 2,5 |
| Hauling bermuatan, 2 km @ 20 km/jam | 6,0 |
| Dumping | 1,0 |
| Kembali kosong, 2 km @ 30 km/jam | 4,0 |
| Spotting & antre | 1,5 |
| **Total CT truk** | **15,0** |

## 4. Produktivitas dump truck

```
Q truk (lcm/jam) = (n × q × K) × (60 / CT menit) × E
```

```
Q truk = (5 × 6,5 × 0,9) × (60 / 15) × 0,83 = 97,1 lcm/jam
       = 97,1 × 0,8 = 77,7 bcm/jam
```

## 5. Jumlah truk yang dibutuhkan

```
Jumlah truk = Q excavator / Q truk = 466 / 77,7 = 6,0 unit
```

Jadi satu excavator ini idealnya dilayani **6 dump truck**.

## 6. Match factor (MF)

Match factor memeriksa keserasian armada:

```
MF = (Jumlah truk × Waktu muat) / (Jumlah excavator × CT truk)
MF = (6 × 2,5) / (1 × 15) = 1,0
```

| Nilai MF | Arti |
| --- | --- |
| MF < 1 | Truk kurang, excavator sering menunggu |
| MF = 1 | Serasi, ideal |
| MF > 1 | Truk berlebih, truk antre di loading point |

Di lapangan, MF sedikit di atas 1 sering dipilih agar excavator (alat yang lebih mahal per jam) tidak pernah menunggu.

## Tips meningkatkan produktivitas

1. **Jaga kondisi jalan angkut.** Jalan rata dan kering menaikkan kecepatan truk dan menurunkan cycle time.
2. **Atur posisi loading.** Pemuatan dua sisi (*double side loading*) menghilangkan waktu tunggu spotting.
3. **Pantau payload.** Truk yang kurang muatan membuang kapasitas; yang kelebihan merusak ban dan komponen.
4. **Kurangi antrean di disposal.** Siapkan area dumping yang cukup luas dan dozer yang siaga.

## Hubungan dengan KPI alat

Produktivitas per jam ini dikalikan dengan jam kerja efektif untuk mendapat produksi. Pelajari cara menghitung jam kerja efektif di artikel [PA, UA, MA, dan EU](/artikel/kpi-alat-tambang-pa-ua-ma-eu/).

## Contoh lengkap satu fleet dari awal sampai akhir

Data (ilustrasi): excavator dengan kapasitas bucket 3,4 m³, bucket fill factor 0,85, cycle time 28 detik, efisiensi kerja 50 menit per jam. Dump truck berkapasitas bak 20 m³ dengan cycle time 24 menit.

Langkah 1, produktivitas excavator per jam:

```
Produksi per jam = 3,4 × 0,85 × (3.600 / 28) × (50 / 60)
                 = 3,4 × 0,85 × 128,6 × 0,833
                 ≈ 309,6 m³/jam (lcm)
```

Langkah 2, jumlah pass per truk: 20 / (3,4 × 0,85) ≈ 6,9, dibulatkan 7 pass.

Langkah 3, waktu muat satu truk: 7 × 28 detik = 196 detik, sekitar 3,3 menit.

Langkah 4, jumlah truk yang menjaga excavator terus bekerja: cycle time truk 24 menit dibagi waktu muat 3,3 menit menghasilkan sekitar 7,3 truk, jadi sekitar 7 sampai 8 truk.

Pembulatan ke bawah membuat excavator menunggu, ke atas membuat truk antre. Match factor membantu memutuskan, sebagaimana dijelaskan di bagian sebelumnya.

## Tabel pemecahan masalah

| Gejala | Kemungkinan penyebab | Tindakan |
| --- | --- | --- |
| Excavator sering menunggu truk | Truk kurang atau cycle time terlalu panjang | Tambah truk, perpendek jarak, perbaiki jalan |
| Truk antre di front | Truk berlebih atau excavator lambat | Kurangi truk atau perbaiki front dan teknik gali |
| Bucket fill factor rendah | Material keras atau teknik gali kurang tepat | Perbaiki fragmentasi peledakan, latih operator |
| Cycle time truk membengkak | Jalan buruk, tanjakan, antrean | Perawatan jalan, tata ulang rute |

## Pertanyaan yang sering diajukan

### Kenapa hasil hitungan berbeda dari produksi aktual?

Rumus memakai asumsi ideal. Realitas dipengaruhi cuaca, antrean, kerusakan, dan istirahat. Gunakan data aktual untuk menyesuaikan faktor-faktor dalam rumus.

### Apa itu bucket fill factor?

Perbandingan volume material yang benar-benar terisi di bucket dengan kapasitas bucket nominal. Nilainya dipengaruhi jenis material dan keterampilan operator.

### Perlukah match factor tepat 1?

Tidak harus. Dalam praktik, perusahaan sering memilih sedikit di bawah atau di atas 1 sesuai prioritas, apakah ingin excavator selalu sibuk atau ingin menghemat jumlah truk.
