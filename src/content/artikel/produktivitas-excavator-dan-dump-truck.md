---
title: 'Cara Menghitung Produktivitas Excavator dan Dump Truck'
description: 'Rumus produktivitas excavator dan dump truck, cycle time, jumlah truk yang dibutuhkan, dan match factor, lengkap dengan contoh hitungan.'
pubDate: 2026-10-01
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
