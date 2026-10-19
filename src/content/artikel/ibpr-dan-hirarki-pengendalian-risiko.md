---
title: 'IBPR dan Hirarki Pengendalian Risiko di Tambang'
description: 'Cara melakukan identifikasi bahaya dan penilaian risiko (IBPR), matriks risiko kemungkinan dan keparahan, serta hirarki pengendalian dari eliminasi sampai APD, dengan contoh di tambang.'
pubDate: 2026-10-05
updatedDate: 2026-10-19
category: k3-tambang
tags: ['IBPR', 'manajemen risiko', 'hirarki pengendalian', 'JSA', 'K3']
---

Setiap pekerjaan di tambang mengandung bahaya. Tujuan K3 bukan menghilangkan semua bahaya, karena itu sering mustahil, melainkan memastikan risikonya terkendali sampai tingkat yang dapat diterima. Alat untuk melakukannya disebut **IBPR**: Identifikasi Bahaya dan Penilaian Risiko. Di beberapa perusahaan dikenal juga dengan istilah HIRA atau HIRADC.

## Bahaya dan risiko itu berbeda

- **Bahaya (hazard)** adalah sumber yang berpotensi menimbulkan cedera atau kerugian. Contoh: lereng yang curam, truk yang bergerak, bahan peledak.
- **Risiko (risk)** adalah gabungan antara kemungkinan bahaya itu menimbulkan kejadian dan seberapa parah akibatnya.

Lereng yang curam adalah bahaya. Risikonya bergantung pada seberapa sering orang bekerja di bawahnya dan seberapa besar kemungkinan longsor.

## Langkah melakukan IBPR

### 1. Uraikan pekerjaan menjadi tahapan

Contoh pekerjaan: penggantian ban dump truck di lapangan.
1. Mengamankan unit dan area
2. Melepas mur roda
3. Mengangkat dan melepas ban
4. Memasang ban baru
5. Mengencangkan dan memeriksa

### 2. Identifikasi bahaya di setiap tahapan

Pada tahap mengangkat ban: ban sangat berat bisa jatuh, posisi tangan terjepit, alat pengangkat gagal, unit bergerak.

### 3. Nilai risikonya

Penilaian biasanya memakai matriks kemungkinan dan keparahan:

```
Tingkat risiko = Kemungkinan × Keparahan
```

| Kemungkinan \ Keparahan | 1 Ringan | 2 Sedang | 3 Berat | 4 Fatal |
| --- | --- | --- | --- | --- |
| **4 Hampir pasti** | 4 Sedang | 8 Tinggi | 12 Ekstrem | 16 Ekstrem |
| **3 Mungkin** | 3 Rendah | 6 Sedang | 9 Tinggi | 12 Ekstrem |
| **2 Jarang** | 2 Rendah | 4 Sedang | 6 Sedang | 8 Tinggi |
| **1 Sangat jarang** | 1 Rendah | 2 Rendah | 3 Rendah | 4 Sedang |

Skala dan batas kategori setiap perusahaan bisa berbeda. Yang penting konsisten dipakai di seluruh organisasi.

### 4. Tentukan pengendalian

Untuk risiko yang belum dapat diterima, tentukan pengendalian menggunakan hirarki di bawah ini, lalu nilai kembali risikonya setelah pengendalian (risiko sisa).

### 5. Tinjau secara berkala

IBPR harus diperbarui ketika ada perubahan: alat baru, metode baru, area baru, atau setelah terjadi insiden.

## Hirarki pengendalian risiko

Urutannya dari yang paling efektif:

| Tingkat | Prinsip | Contoh di tambang |
| --- | --- | --- |
| **1. Eliminasi** | Hilangkan bahayanya | Mendesain ulang rute agar truk tidak perlu melewati area pejalan kaki |
| **2. Substitusi** | Ganti dengan yang lebih aman | Ripping dengan dozer sebagai pengganti peledakan di dekat permukiman |
| **3. Rekayasa teknik** | Pisahkan orang dari bahaya | Tanggul pengaman, pagar, sistem deteksi tabrakan, pelindung mesin |
| **4. Administratif** | Ubah cara orang bekerja | Prosedur kerja, izin kerja, pelatihan, rambu, pengaturan shift |
| **5. APD** | Lindungi tubuh pekerja | Helm, kacamata, harness, pelindung telinga |

Semakin ke bawah, efektivitasnya semakin bergantung pada perilaku manusia, sehingga lebih mudah gagal. Karena itu APD tidak boleh menjadi satu-satunya pengendalian untuk risiko tinggi. Daftar APD dijelaskan di artikel [APD wajib di tambang](/artikel/apd-wajib-di-tambang/).

<figure class="diagram">
<svg viewBox="0 0 480 316" role="img" aria-label="Hirarki pengendalian risiko dari eliminasi sampai alat pelindung diri">
<polygon class="acf" style="fill-opacity:0.55" points="20,16 460,16 436,66 44,66"/>
<text x="240" y="46" text-anchor="middle"><tspan class="b">1 Eliminasi</tspan><tspan class="s m"> — hilangkan bahayanya</tspan></text>
<polygon class="acf" style="fill-opacity:0.45" points="44,70 436,70 412,120 68,120"/>
<text x="240" y="100" text-anchor="middle"><tspan class="b">2 Substitusi</tspan><tspan class="s m"> — ganti dengan yang lebih aman</tspan></text>
<polygon class="acf" style="fill-opacity:0.35" points="68,124 412,124 388,174 92,174"/>
<text x="240" y="154" text-anchor="middle"><tspan class="b">3 Rekayasa teknik</tspan><tspan class="s m"> — pisahkan dari bahaya</tspan></text>
<polygon class="acf" style="fill-opacity:0.25" points="92,178 388,178 364,228 116,228"/>
<text x="240" y="208" text-anchor="middle"><tspan class="b">4 Administratif</tspan><tspan class="s m"> — ubah cara kerja</tspan></text>
<polygon class="acf" style="fill-opacity:0.15" points="116,232 364,232 340,282 140,282"/>
<text x="240" y="262" text-anchor="middle"><tspan class="b">5 APD</tspan><tspan class="s m"> — lindungi tubuh</tspan></text>
<text class="s m" x="240" y="302" text-anchor="middle">Atas: paling efektif · Bawah: paling bergantung pada perilaku manusia</text>
</svg>
<figcaption>Pengendalian di bagian atas lebih andal karena tidak bergantung pada kepatuhan individu. APD adalah lapisan terakhir, bukan yang pertama.</figcaption>
</figure>

## IBPR, JSA, dan pekerjaan sehari-hari

IBPR biasanya disusun untuk proses dan area kerja secara menyeluruh. Untuk pekerjaan spesifik yang akan dilakukan pada hari itu, dipakai analisa keselamatan kerja atau JSA (Job Safety Analysis) yang lebih rinci per langkah, dan dibahas bersama tim sebelum mulai bekerja.

Satu prinsip sederhana yang bisa dipegang siapa saja di lapangan: sebelum mulai, tanyakan tiga hal. Apa yang bisa salah? Seberapa parah akibatnya? Apa yang sudah disiapkan untuk mencegahnya? Kalau jawabannya belum jelas, pekerjaan belum siap dimulai.

Pelajari juga [dasar K3 pertambangan](/artikel/dasar-k3-pertambangan/).

## Contoh IBPR: mengganti ban dump truck

Tabel berikut contoh sederhana (angka dan penilaian ilustrasi, hasil nyata bergantung pada kondisi dan tim penilai).

| Tahapan | Bahaya | Dampak | Pengendalian |
| --- | --- | --- | --- |
| Memarkir unit | Unit bergerak karena posisi tidak rata | Terlindas | Parkir di tanah datar, rem parkir, ganjal roda |
| Mengendurkan baut | Alat kunci selip | Tangan cedera | Alat sesuai ukuran, sarung tangan, teknik yang benar |
| Mengangkat unit dengan jack | Unit jatuh dari jack | Tertimpa | Jack sesuai kapasitas, penyangga tambahan, tidak berada di bawah beban |
| Melepas ban | Ban berat menimpa | Cedera tubuh | Alat angkat atau tire handler |
| Memasang dan mengisi angin | Ledakan ban | Cedera berat | Pelindung (cage), berdiri di sisi aman, tekanan terpantau |

Dalam contoh ini terlihat bahwa pengendalian terkuat bukan ada di baris APD, melainkan pada alat bantu angkat dan prosedur yang menjauhkan orang dari sumber bahaya.

## Pertanyaan yang sering diajukan

### Apa bedanya IBPR dan JSA?

IBPR biasanya lebih luas dan dibuat untuk aktivitas rutin atau area tertentu. JSA (Job Safety Analysis) dibuat untuk pekerjaan spesifik, dengan uraian langkah demi langkah. Keduanya saling melengkapi.

### Siapa yang membuat IBPR?

Idealnya tim yang terdiri dari orang yang benar-benar mengerjakan pekerjaan itu, pengawas, dan perwakilan K3. Orang lapangan paling paham bahaya yang sebenarnya.

### Kenapa APD ada di urutan terakhir?

Karena APD tidak menghilangkan bahaya. APD hanya mengurangi dampak jika kejadian terjadi, dan efektivitasnya bergantung pada pemakaian yang benar setiap saat.

### Seberapa sering IBPR ditinjau?

Setidaknya berkala sesuai kebijakan perusahaan, dan segera saat ada perubahan pekerjaan, alat, area, atau setelah terjadi insiden.
