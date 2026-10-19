---
title: 'PA, UA, MA, dan EU: Arti dan Rumus KPI Alat Tambang'
description: 'Penjelasan lengkap Physical Availability, Use of Availability, Mechanical Availability, dan Effective Utilization beserta rumus dan contoh hitungan dari lapangan.'
pubDate: 2026-10-05
updatedDate: 2026-10-19
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

<figure class="diagram">
<svg viewBox="0 0 480 230" role="img" aria-label="Pembagian jam alat menjadi kerja, siaga, dan perbaikan beserta rumus PA, UA, MA, dan EU">
<text class="b" x="20" y="22">Total jam kalender T = 720 jam</text>
<rect class="acf" x="20" y="34" width="286" height="38"/>
<rect class="box" x="306" y="34" width="110" height="38"/>
<rect x="416" y="34" width="44" height="38" style="fill:var(--ink-2);fill-opacity:.5;stroke:var(--line);stroke-width:1.2"/>
<text class="b" x="163" y="58" text-anchor="middle">W 468 jam</text>
<text class="b" x="361" y="58" text-anchor="middle">S 180</text>
<text class="b s" x="438" y="58" text-anchor="middle">R 72</text>
<path class="ln" d="M20 82 V88 H416 V82"/>
<text class="m" x="218" y="108" text-anchor="middle">PA = (W + S) ÷ T = 648 ÷ 720 = 90%</text>
<path class="ln" d="M20 120 V126 H306 V120"/>
<text class="m" x="163" y="146" text-anchor="middle">EU = W ÷ T = 65%</text>
<text class="s m" x="240" y="176" text-anchor="middle">UA = W ÷ (W + S) = 468 ÷ 648 = 72,2%</text>
<text class="s m" x="240" y="196" text-anchor="middle">MA = W ÷ (W + R) = 468 ÷ 540 = 86,7%</text>
<text class="s m" x="240" y="218" text-anchor="middle">W = jam kerja · S = jam siaga (standby) · R = jam perbaikan</text>
</svg>
<figcaption>Contoh satu excavator selama 720 jam. Semua KPI availability berasal dari pembagian jam kalender ke tiga kelompok ini.</figcaption>
</figure>

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

## Membaca KPI untuk mengambil keputusan

Angka KPI baru berguna kalau diterjemahkan menjadi tindakan. Cara membacanya:

| Kondisi | Artinya | Tindakan pertama |
| --- | --- | --- |
| PA rendah, UA normal | Alat sering rusak atau menunggu perbaikan | Periksa kepatuhan periodic service, backlog, dan suku cadang |
| PA normal, UA rendah | Alat sehat tetapi sering menganggur | Periksa kesiapan front, jalan, jumlah truk, dan pergantian shift |
| PA dan UA keduanya rendah | Masalah di perawatan dan operasi | Mulai dari yang paling berpengaruh pada produksi |
| PA dan UA tinggi, produksi rendah | Alat bekerja tetapi tidak produktif | Periksa cycle time, jarak angkut, dan kondisi jalan |

## Contoh membandingkan dua unit

Dua excavator sejenis bulan ini punya data berikut (jam, ilustrasi):

| Unit | Working | Standby | Repair | PA | UA |
| --- | --- | --- | --- | --- | --- |
| EX-01 | 450 | 90 | 180 | 75% | 83% |
| EX-02 | 380 | 260 | 80 | 89% | 59% |

Dengan total 720 jam, PA = (working + standby) / total jam dan UA = working / (working + standby). EX-01 lebih bermasalah di sisi kerusakan, sedangkan EX-02 alatnya sehat tetapi banyak menganggur. Satu angka produksi tidak akan memperlihatkan perbedaan ini.

## Pertanyaan yang sering diajukan

### Berapa target PA dan UA yang wajar?

Tidak ada angka seragam. Target tergantung jenis alat, umur, dan kontrak. Banyak kontrak menetapkan target PA tertentu per jenis alat, jadi rujuk kontrak yang berlaku.

### Apakah PA sama dengan MA?

Tidak. MA = W / (W + R), jadi mengabaikan jam standby dan hanya menilai kinerja maintenance. PA = (W + S) / (W + R + S), jadi memasukkan jam standby sebagai waktu alat siap. Karena itu PA umumnya lebih tinggi daripada MA, dan PA lebih sering dipakai di kontrak.

### Mengapa EU sering lebih rendah daripada UA?

Karena EU = PA × UA. Selama PA di bawah 100%, EU pasti lebih kecil daripada UA, sebab waktu rusak ikut mengurangi EU.

### Siapa yang paling berpengaruh pada UA?

Tim operasi dan perencanaan, karena UA dipengaruhi kesiapan front, jumlah alat pendukung, jalan, dan keputusan penugasan.

## Coba kalkulatornya

Hitung PA, UA, MA, dan EU alat Anda sendiri dengan [Kalkulator KPI Alat Tambang](/alat/kpi-alat/). Masukkan jam kerja, perbaikan, dan siaga, lalu hasilnya muncul seketika.
