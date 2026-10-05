---
title: 'PA, UA, MA, dan EU: Arti dan Rumus KPI Alat Tambang'
description: 'Penjelasan lengkap Physical Availability, Use of Availability, Mechanical Availability, dan Effective Utilization beserta rumus dan contoh hitungan dari lapangan.'
pubDate: 2026-10-05
category: operasi-produksi
tags: ['KPI', 'availability', 'produktivitas', 'alat berat']
featured: true
---

Di rapat produksi tambang, angka **PA, UA, MA, dan EU** hampir selalu muncul di slide pertama. Keempat angka ini menjawab satu pertanyaan sederhana: *dari seluruh jam yang tersedia, berapa jam alat benar-benar bekerja, dan ke mana sisanya hilang?*

Artikel ini menjelaskan arti masing-masing KPI, rumusnya, contoh hitungan, dan cara membacanya untuk mencari sumber kehilangan produksi.

## Dasar: tiga jenis jam alat

Semua KPI availability dibangun dari pembagian jam kalender alat menjadi tiga kelompok:

| Simbol | Nama | Contoh kejadian |
| --- | --- | --- |
| **W** | Working hours (jam kerja) | Alat memuat, mengangkut, menggusur material |
| **R** | Repair hours (jam perbaikan) | Breakdown, servis terjadwal, menunggu suku cadang |
| **S** | Standby hours (jam siaga) | Alat siap pakai tapi tidak bekerja: hujan, istirahat, tidak ada operator, menunggu front |

Total jam tersedia dalam satu periode adalah **T = W + R + S**. Untuk satu bulan 30 hari dengan operasi 24 jam, T = 720 jam.

> Kunci akurasi KPI ada di pencatatan. Jika jam standby tercatat sebagai breakdown (atau sebaliknya), semua angka di bawah ini ikut salah.

## 1. MA: Mechanical Availability

MA mengukur kinerja **tim maintenance**: dari jam alat dipakai dan diperbaiki, berapa persen alat tidak sedang rusak.

```
MA = W / (W + R) × 100%
```

MA mengabaikan jam standby, sehingga tidak terpengaruh hujan atau kurangnya operator. MA rendah berarti masalah ada di keandalan alat atau kecepatan perbaikan.

## 2. PA: Physical Availability

PA adalah KPI yang paling sering tercantum di kontrak jasa pertambangan. PA mengukur **berapa persen waktu alat siap dipakai**, baik sedang bekerja maupun siaga.

```
PA = (W + S) / (W + R + S) × 100%
```

Banyak kontrak menetapkan target PA alat utama di kisaran 85–90%. Jika PA di bawah target, biasanya ada penalti atau kewajiban menambah unit pengganti.

## 3. UA: Use of Availability

UA menjawab: *dari jam alat siap pakai, berapa persen benar-benar dipakai bekerja?* Ini mengukur kinerja **tim operasi**.

```
UA = W / (W + S) × 100%
```

UA rendah sementara PA tinggi berarti alat sehat tetapi menganggur. Penyebab umumnya: hujan dan jalan licin, kekurangan operator, menunggu blasting, front kerja tidak siap, atau jumlah alat berlebih dibanding kebutuhan.

## 4. EU: Effective Utilization

EU menggabungkan semuanya: dari total jam, berapa persen alat benar-benar bekerja.

```
EU = W / (W + R + S) × 100%
```

EU juga bisa dihitung sebagai **PA × UA**. Jika PA = 90% dan UA = 75%, maka EU = 67,5%.

## Contoh hitungan satu unit excavator

Data satu bulan (720 jam) untuk satu excavator:

| Komponen | Jam |
| --- | --- |
| Working (W) | 468 |
| Repair (R) | 72 |
| Standby (S) | 180 |
| **Total (T)** | **720** |

Hasilnya:

| KPI | Rumus | Hasil |
| --- | --- | --- |
| MA | 468 / (468 + 72) | 86,7% |
| PA | (468 + 180) / 720 | 90,0% |
| UA | 468 / (468 + 180) | 72,2% |
| EU | 468 / 720 | 65,0% |

Cara membacanya: alat ini **lolos target PA 90%**, tetapi hampir 28% jam siapnya terbuang sebagai standby. Fokus perbaikan seharusnya di sisi operasi, bukan maintenance.

## Hubungan KPI dengan produksi

Jam kerja (W) dikalikan produktivitas per jam menghasilkan produksi:

```
Produksi = W × Produktivitas (bcm/jam atau ton/jam)
```

Jika produktivitas excavator di contoh di atas 450 bcm/jam, produksi bulannya sekitar 468 × 450 = 210.600 bcm. Menaikkan UA dari 72% ke 80% (W naik menjadi sekitar 518 jam) menambah kira-kira 22.500 bcm tanpa menambah unit.

## Kesalahan umum di lapangan

1. **Mencampur standby dan breakdown.** Alat yang menunggu mekanik setelah rusak tetap masuk R, bukan S.
2. **Tidak membedakan delay kecil.** Antre di loading point biasanya tetap dihitung jam kerja, tetapi menurunkan produktivitas per jam.
3. **Membandingkan PA antar perusahaan tanpa definisi yang sama.** Selalu cek definisi di kontrak, karena beberapa kontrak memasukkan servis terjadwal secara berbeda.

## Coba kalkulatornya

Hitung PA, UA, MA, dan EU alat Anda sendiri dengan [Kalkulator KPI Alat Tambang](/alat/kpi-alat/). Masukkan jam kerja, perbaikan, dan siaga, lalu hasilnya muncul seketika.
