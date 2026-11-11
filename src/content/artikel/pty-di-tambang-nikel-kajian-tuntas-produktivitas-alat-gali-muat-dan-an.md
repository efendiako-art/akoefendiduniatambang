---
title: 'PTY di Tambang Nikel: Produktivitas Alat Gali-Muat dan Angkut'
description: 'PTY adalah produktivitas alat: laju pemindahan material oleh satu unit per satuan waktu, dengan satuan ton/jam atau bcm/jam.'
pubDate: 2026-11-11
category: operasi-produksi
tags: ['Pty', pdty, 'pty exca', 'pty hauler', 'pentingnya pty', 'pty terhadap cost', 'pty terhadapt produksi', 'pty cycletime']
image: '/images/artikel/pty-di-tambang-nikel-kajian-tuntas-produktivitas-alat-gali-muat-dan-an/sampul-2.webp'
imageAlt: 'PTY di Tambang Nikel: Produktivitas Alat Gali-Muat dan Angkut'
draft: true
---

Pentingnya PTY Terhadapa Produksi dan Cost

![gambar01 aktifitas produksi](/images/artikel/pty-di-tambang-nikel-kajian-tuntas-produktivitas-alat-gali-muat-dan-an/screenshot-2026-11-11-135751-2.webp)

Gambar Bersumber Dari AI gnerate

## 1\. Pendahuluan

PTY adalah angka yang paling sering disebut dan paling jarang dipahami di tambang nikel. Di papan dispatch ia muncul sebagai ton per jam; di rapat produksi ia jadi bahan adu argumen; di lapangan ia menentukan apakah sebuah front masih layak diteruskan atau harus ditutup. Tetapi PTY bukan angka tunggal yang berdiri sendiri — ia adalah keluaran dari puluhan variabel yang saling mengunci, dari kemiringan jalan sampai panjang GET pada bucket.

Artikel ini membedah PTY secara menyeluruh: definisi, derivasi rumus, konsistensi satuan, anatomi cycle time, model waktu dan efisiensi, setiap parameter pembentuknya dengan angka acuan dan ambang intervensi, matching armada, model biaya, sistem pengukuran, tata kelola data, insentif, register risiko, sampai daftar periksa lapangan. Tujuannya satu: setelah membaca sampai akhir, pembaca memahami PTY sebagai sistem — bukan sebagai angka yang bisa ditekan dengan menambah gas.

## 2\. Definisi\, satuan\, dan enam kesalahan konsep

**PTY adalah produktivitas alat**: laju pemindahan material oleh satu unit per satuan waktu, dengan satuan ton/jam atau bcm/jam.
Enam kesalahan yang harus dibersihkan lebih dulu:

1. **Menganggap PTY = produksi.** Produksi = PTY × jam kerja efektif. Produksi bisa tercapai dengan PTY buruk asal alat ditambah dan lembur — tetapi biaya per tonnya membengkak.
2. **Menganggap PTY tinggi selalu baik.** PTY tinggi dengan overload, kadar turun, dan jalan rusak adalah PTY yang meminjam dari masa depan.
3. **Menghitung PTY fleet lalu menganggapnya PTY unit.** Rata-rata fleet menyembunyikan unit yang rusak dan unit yang menganggur.
4. **Menggunakan kapasitas nominal sebagai kapasitas nyata.** Bucket 2 m³ tidak pernah mengisi 2 m³ saprolit basah.
5. **Mengabaikan satuan.** Ton, m³ lepas (lcm), dan m³ asli (bcm) tidak bisa dicampur dalam satu kolom tanpa faktor konversi.
6. **Memperlakukan efisiensi sebagai angka tetap.** E berubah tiap shift; mengunci E di 0,83 lalu heran kenapa realisasi jauh di bawah rencana adalah kesalahan metodologis, bukan nasib.

## 3\. Derivasi rumus dan konsistensi satuan

Bentuk dasarnya adalah pembagian isi dengan waktu:
PTYangkut=Payload×60CT×EPTYangkut​=Payload×CT60​×E
PTYgali=(q×K×ρ)×3600CT×EPTYgali​=(q×K×ρ)×CT3600​×E
Angka 60 dan 3600 adalah konversi: jika CT dalam menit, satu jam berisi 60/CT siklus; jika dalam detik, 3600/CT siklus. Salah memilih pengali adalah sumber kesalahan hitung paling umum — hasilnya bisa meleset 60 kali lipat.

**Konsistensi satuan wajib dijaga.** ρ harus dalam ton per m³ pada kondisi yang sama dengan q. Jika q diukur pada kondisi lepas (lcm), ρ harus densitas lepas, dan hasilnya ton. Konversi ke bcm memakai swell factor:
bcm=lcm×SFbcm=lcm×SF
Saprolit dengan SF 0,75 berarti 1 bcm setara 1,33 lcm. Mencampur bcm dan lcm dalam satu laporan produksi adalah cara paling rapi untuk membuat tambang terlihat memenuhi target sementara stockpile tidak cocok dengan survey.
Rumus ini juga menunjukkan hierarki pengaruh. Menambah 10% payload menaikkan PTY 10%. Memangkas CT 10% menaikkan PTY 11,1%. Keduanya sah, tetapi memangkas CT hampir selalu lebih murah daripada membeli truk lebih besar.

untuk perhitungan lebih detail bisa menghitung dari link :
[Eng 3D Calculation - Aplikasi di Google Play](https://play.google.com/store/apps/details?id=com.akoefendi.engcalc)
[Kalkulator Tambang Gratis | TambangPedia](https://tambangpedia.com/alat/)

## 4\. Konteks nikel laterit: mengapa PTY di sini lebih rapuh

Nikel laterit punya profil yang membuat setiap parameter PTY lebih sensitif dibanding komoditas lain:

* **Densitas dan kadar air.** Saprolit basah 1,7–2,0 t/m³, lekat, dan berat. Bucket sulit penuh, material menempel di bak, dan beban axle melonjak tanpa terlihat.
* **Limonit halus.** Mudah terbang saat kering, menjadi lumpur saat basah, dan menurunkan traksi lebih cepat daripada saprolit.
* **Jalan laterit.** Permukaan halus mengeras saat kering lalu hancur saat hujan. Ruts terbentuk dalam hitungan jam.
* **Jarak angkut panjang.** CT didominasi hauling, sehingga kerusakan jalan berdampak langsung dan besar.
* **Kadar sebagai nilai.** Gali tanpa kontrol kontak menghasilkan dilution. Ton naik, kadar Ni jatuh, dan nilai per ton ikut jatuh.
* **Iklim basah.** Penghentian gali karena hujan, genangan di ruts, dan penurunan kecepatan menjadi rutinitas musiman.

Konsekuensinya: kontrol PTY di nikel selalu berpasangan dengan kontrol kadar dan kontrol traksi. Menekan PTY tanpa dua itu hanya memindahkan masalah.

## 5\. Model waktu: PA\, UA\, MA\, dan EU

Efisiensi E bukan angka karangan. Ia dihitung dari model waktu:
E=PA−(UA+MA)PA×EUE=PAPA−(UA+MA)​×EU
dengan PA = waktu tersedia, UA = waktu tidak terpakai (mobilisasi, tanpa operator, tanpa front), MA = waktu perbaikan, dan EU = efisiensi operasional yang mencakup delay kecil (spot, antre, tunggu, istirahat, hujan).
Contoh: PA 720 menit, UA 60, MA 45, EU 0,88.
E=720−105720×0,88=0,852×0,88=0,750E=720720−105​×0,88=0,852×0,88=0,750
Angka 0,75 inilah yang masuk rumus, bukan 0,83 asumsi kantor. **Delay harus diklasifikasikan** agar bisa dikelola: delay operasional (antre, spot, tunggu alat lain) diserang dengan perbaikan proses; delay non-operasional (hujan, istirahat, briefing) dikelola dengan penjadwalan; delay mekanis diserang dengan pemeliharaan.

## 6\. Parameter jalan: yang paling berdampak\, paling sering diabaikan

Kecepatan alat ditentukan total resistance:
TR=RR+GRTR=RR+GR
dengan RR = rolling resistance dan GR = grade resistance. Kecepatan turun mengikuti naiknya TR, dan CT naik mengikuti turunnya kecepatan.
**Acuan RR:**

| Kondisi permukaan | RR indikatif |
| ----------------- | ------------ |
| Beton/aspal padat | 2% |
| Laterit padat, terpelihara, kering | 3–5% |
| Laterit dengan ruts ringan | 6–8% |
| Lumpur, ruts dalam, genangan | 9–15% |

**Derating kecepatan indikatif akibat grade (bermuatan):**

| Grade | Kecepatan relatif |
| ----- | ----------------- |
| 0% | 100% |
| 5% | ±78% |
| 8% | ±62% |
| 10% | ±55% |
| 12% | ±48% |

**Geometri.** Lebar jalan minimal untuk dua jalur:
W=2×(L+c)+sW=2×(L+c)+s
dengan L = lebar unit terlebar, c = clearance 0,6–1,0 m per sisi, dan s = bahu/drainase. Superelevasi tikungan 2–5%, camber lurus 2–3%, radius tikungan cukup agar truk tidak memotong jalur berlawanan.
**Kontrol:** grading harian pada segmen kritis, parit samping bersih, penaburan material keras di tanjakan licin, penutupan segmen gagal, pembatasan kecepatan bertingkat, dan inspeksi jalan tiap shift dengan pengukur kedalaman ruts (ambang intervensi 5 cm).
**Bila dibiarkan:** CT naik, BBM naik, ban aus, unit tergelincir, dan PTY jatuh lebih cepat daripada yang bisa dikejar dengan menambah truk.

## 7\. Parameter loading: geometri front dan ritme

Swing 90° jauh lebih cepat daripada 180°. Setiap 30° tambahan swing menambah sekitar 2 detik per siklus; pada 120 siklus per jam itu berarti 4 menit hilang per jam per excavator.
Tinggi jenjang idealnya tidak melebihi 2/3 jangkauan maksimum, agar bucket penuh dalam satu tarikan dan tidak mengangkat beban penuh terlalu tinggi.
Metode penempatan truk:

| Metode | Spot time | Catatan |
| ------ | --------- | ------- |
| Single side | Tinggi | Butuh manuver panjang, front sempit |
| Double side | Hampir nol | Butuh front lebar, dua jalur |
| Drive-by | Nol | Butuh ruang lurus dan disiplin |

Urutan pengisian bak: mulai dari depan, bergerak ke belakang, isi merata, terakhir di tengah. Ini menjaga distribusi axle dan mencegah tumpahan di jalan.
**Kontrol:** lebar front minimum untuk double side, marking posisi truk, pembersihan tumpahan tiap jam, dan pengawasan spot time.

## 8\. Parameter dumping: titik buang sebagai choke point

CT bertambah setiap detik truk menunggu sebelum membuang, tanpa satu ton pun tambahan. Area buang harus cukup luas untuk jumlah truk aktif, dengan tepi tunggal yang jelas dan dozer siaga untuk meratakan windrow serta menjaga muka buang tetap bersih.
Metode end dump dipakai untuk ore; pemisahan titik buang ore dan waste wajib agar tidak terjadi pencampuran. Jarak tepi dikendalikan dengan patok atau windrow agar truk tidak mundur berlebihan dan tidak terlalu dekat.
**Kontrol:** tambah dozer pada jam sibuk, buka titik buang cadangan saat antrean melewati 2 unit, dan catat dumping time sebagai elemen terpisah.

## 9\. Payload: antara kapasitas dan kehancuran komponen

Target 90–110% rated payload. Aturan 10/10/20 adalah pagar praktis.
Underload membuang kapasitas gratis dan menaikkan biaya per ton. Overload memberi PTY sesaat tetapi memperpendek umur ban, suspensi, dan frame, serta menaikkan panas ban. Batas panas ban dinyatakan dalam TKPH (ton-km per jam):
TKPH=Payload×(jarak bermuatan+jarak kosong)jam operasiTKPH=jam operasiPayload×(jarak bermuatan+jarak kosong)​
TKPH aktual yang melewati rating ban adalah penyebab blowout yang tidak muncul di laporan produksi sampai ban meledak di tanjakan.
**Kontrol:** payload meter terkalibrasi bulanan, pass dikunci per jenis material dan kadar air, audit payload mingguan, dan penyesuaian pass saat hujan (material basah lebih berat per bucket).

## 10\. Bucket\, GET\, dan bucket fill factor

K rendah bukan sekadar soal material. Bucket aus, GET tumpul, sudut gali salah, dan jenjang tidak rapi menekan K sampai 0,70–0,75. Bucket heavy duty untuk saprolit kasar, bucket lebar untuk limonit, dan pemantauan keausan GET setiap 250 jam adalah kontrol teknis yang nyata.

## 11\. Skill operator: delapan perilaku yang membedakan

Operator berkinerja tinggi: (1) menggali dengan tarikan pendek penuh, (2) menjaga swing tetap 90°, (3) mengisi bak merata dari depan ke belakang, (4) tidak menumpahkan muatan, (5) menjaga ritme tanpa henti tak perlu, (6) memposisikan truk sendiri bila diizinkan, (7) melaporkan jalan rusak, (8) mematikan mesin saat menunggu panjang.
Kontrol: matriks kompetensi, coaching berbasis data per operator, penilaian teknik gali, dan rotasi agar praktik baik menyebar.

## 12\. Match factor dan rasio armada

MF=Jumlah truk×Waktu muatJumlah excavator×CT trukMF=Jumlah excavator×CT trukJumlah truk×Waktu muat​

| MF | Kondisi | Akibat |
| --- | ------- | ------ |
| < 0,8 | Truk jauh kurang | Excavator menganggur berat |
| 0,9–1,1 | Sepadan | Ideal |
| 1,1–1,3 | Sedikit berlebih | Antrean wajar, excavator aman |
| \> 1\,3 | Berlebih | Antrean panjang, PTY per truk jatuh, BBM terbuang |

Menambah truk pada MF 1,4 bukan menambah produksi — itu menambah antrean.

## 13\. Contoh hitungan dan sensitivitas

**Baseline:** q 2,0 m³; K 0,85; ρ 1,7; CT excavator 28 s; E 0,75; payload 25 t; CT truk 26 menit; 7 truk.
Isi per pass 2,89 t.
PTYexca=2,89×360028×0,75=278,7 t/jamPTYexca​=2,89×283600​×0,75=278,7 t/jam
PTYtruk=25×6026×0,75=43,3 t/jamPTYtruk​=25×2660​×0,75=43,3 t/jam
Output fleet 303 t/jam. Biaya truk Rp 850.000/unit-jam → Rp 19.637/ton.
**Skenario B — hanya menambah pass ke 10:** payload 28,9 t (overload 15,6%), CT truk 26,5 menit. PTY truk 49,1 t/jam, fleet 343,7 t/jam, Rp 17.312/ton. Naik 13% tetapi ban dan suspensi menanggung risiko.
**Skenario C — jalan, jenjang, coaching, disiplin delay:** CT truk 21 menit, K 0,95, CT excavator 24 s, E 0,82. PTY truk 58,6, fleet 410 t/jam, Rp 14.512/ton. Naik 35%, biaya turun 26%, tanpa satu unit tambahan.
**Skenario D — dibiarkan:** CT truk 34 menit, K 0,78, E 0,65. PTY truk 28,7, fleet 200,7 t/jam, Rp 29.646/ton. Turun 34%, biaya naik 51%.
**Sensitivitas:** satu detik tambahan CT excavator pada baseline menurunkan PTY 9,6 t/jam (3,4%). Satu persen RR menambah CT truk sekitar 15 detik per siklus 3 km.

## 14\. Register risiko

| Risiko | Dampak | Mitigasi |
| ------ | ------ | -------- |
| Hujan deras | CT naik, gali berhenti | Drainase, titik buang cadangan, jadwal fleksibel |
| Overload kronis | Ban, suspensi, frame | Kunci pass, kalibrasi payload |
| Dilution | Kadar turun | Kontrol kontak, blending |
| Jalan gagal | Kecelakaan unit | Inspeksi shift, ambang ruts 5 cm |
| Antrean dump | CT naik | Dozer siaga, titik buang cadangan |
| Data payload dipalsukan | Keputusan salah | Audit silang dengan jembatan timbang |

## 15\. Tata kelola data dan insentif

Pengukuran harus jujur: time study, payload meter terkalibrasi, dispatch, CCTV, VMS, dan rekonsiliasi dengan jembatan timbang. KPI dipasangkan — PTY per unit **dan** cost per ton, dengan pagar payload dan kadar — agar tidak ada yang dikejar dengan mengorbankan yang lain. Insentif berbasis ton per jam, bukan ton total, supaya lembur tidak menutupi inefisiensi.

## 16\. Daftar periksa lapangan per shift

1. Kedalaman ruts < 5 cm, parit bersih.
2. Lebar jalan sesuai standar, marking terlihat.
3. Tinggi jenjang ≤ 2/3 jangkauan.
4. Posisi truk benar, spot time tercatat.
5. Pass sesuai SOP, payload meter berfungsi.
6. Titik buang bersih, dozer siaga.
7. Tumpahan dibersihkan tiap jam.
8. Delay dicatat per kategori, bukan "lain-lain".

## 17\. Glosarium

**PTY** produktivitas; **CT** cycle time; **K** bucket fill factor; **RR** rolling resistance; **GR** grade resistance; **TKPH** ton-km per jam (batas panas ban); **MF** match factor; **lcm/bcm** meter kubik lepas/asli; **SF** swell factor; **GET** ground engaging tools.

## 18\. Penutup

PTY adalah cermin disiplin teknis sebuah tambang. Ia tidak naik karena slogan, tetapi hancur oleh satu jalan tanpa grading, satu bucket tanpa kalibrasi, dan satu operator tanpa coaching. Di nikel, dengan jarak panjang, cuaca buruk, dan margin tipis, mengontrol PTY adalah soal apakah operasi ini masih layak dibiayai kuartal depan.
Mau saya lanjutkan dengan paket dokumen pendamping: formulir time study, kartu audit payload, dan dashboard KPI siap pakai?

## Kesimpulan

**PTY hanya bergerak lewat dua pintu: isi per siklus dan waktu per siklus.** Payload, bucket fill factor, dan kapasitas bucket menggerakkan pintu pertama; faktor jalan, loading, dumping, dan skill operator menggerakkan pintu kedua. Setiap program perbaikan harus bisa dijawab dengan pertanyaan "pintu mana yang disentuh" — kalau tidak bisa, program itu hanya menambah kegiatan tanpa menambah ton.
**Jalan dan matching adalah tuas termurah, penambahan armada adalah yang termahal.** Grading, camber, drainase, dan penguncian pass tidak butuh unit baru, tetapi dampaknya pada cycle time lebih besar daripada menambah truk. Menghitung kebutuhan armada dari PTY alat muat dan menjaga MF di 1,0–1,2 mencegah antrean yang membakar BBM tanpa satu ton tambahan.
**PTY tidak boleh dibeli dengan hal lain.** Overload membeli ton dengan umur ban, kecepatan membeli ton dengan risiko kecelakaan, dan gali tanpa kontrol kontak membeli ton dengan kadar. Karena itu KPI wajib berpasangan — PTY per unit bersama cost per ton, dengan pagar payload dan kadar dan angkanya harus berasal dari pengukuran jujur yang ditinjau setiap shift, bukan asumsi kantor yang ditinjau setiap bulan.

## FAQ

**Apakah MF harus 1 ?**

**Mengapa hasil hitung beda jauh dari realisasi ?**

**Bisakah PTY dinaikkan tanpa alat baru ?**

sumber lain :
[PA, UA, MA, dan EU: Arti dan Rumus KPI Alat Tambang](/artikel/kpi-alat-tambang-pa-ua-ma-eu/)
[BCM, LCM, dan Ton: Cara Konversi dengan Swell Factor dan Densitas](/artikel/konversi-bcm-lcm-ton-swell-factor/)
