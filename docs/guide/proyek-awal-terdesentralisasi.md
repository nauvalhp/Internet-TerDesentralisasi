# Proyek Awal Terdesentralisasi

Sebelum istilah "Web3" dan "blockchain" mendominasi wacana, berbagai proyek perintis telah mencoba mewujudkan visi internet yang terbuka, bebas, dan tanpa pusat. Mereka lahir dari kebutuhan untuk menghindari sensor, efisiensi distribusi, serta perlindungan identitas digital.

Berikut beberapa proyek kunci yang membentuk fondasi awal dari ekosistem internet terdesentralisasi.

---

## 📰 1. Usenet (1979)

**Usenet** adalah salah satu sistem komunikasi daring tertua yang mengadopsi prinsip desentralisasi. Ia dikembangkan oleh dua mahasiswa, Tom Truscott dan Jim Ellis, dan menggunakan protokol `UUCP` (Unix-to-Unix Copy Protocol) untuk mentransfer pesan antar server.

### Ciri Desentralisasinya:
- Tidak ada server pusat—setiap node menyimpan salinan sendiri dari topik diskusi (*newsgroups*).
- Model distribusi *store-and-forward* memungkinkan replikasi pesan secara otomatis ke node lain.
- Bersifat terbuka dan dapat diakses siapa saja yang memiliki koneksi ke jaringan Usenet.

> Usenet adalah bukti awal bahwa komunitas digital bisa hidup tanpa pengawasan pusat—dengan kekuatan distribusi informasi horizontal.

---

## 🧠 2. Freenet (1999)

Dikembangkan oleh Ian Clarke, **Freenet** adalah jaringan penyimpanan dan komunikasi anonim yang dirancang untuk menghindari sensor.

### Ciri Desentralisasinya:
- Data dienkripsi dan didistribusikan ke banyak node acak.
- Tidak ada server pusat atau sistem penamaan tetap (nama file bersifat *content-hash*).
- Mengutamakan **anonimitas pengguna** dan **toleransi terhadap sensor**.

Freenet banyak digunakan oleh aktivis digital dan jurnalis di wilayah represif. Meskipun lambat dan kompleks bagi pengguna awam, Freenet meletakkan fondasi bagi sistem file terdistribusi seperti IPFS.

---

## 📡 3. Gnutella (2000)

Gnutella adalah salah satu protokol file sharing peer-to-peer (P2P) pertama yang benar-benar tanpa pusat.

### Ciri Desentralisasinya:
- Tidak menggunakan server indeks seperti Napster.
- Pencarian file dilakukan secara menyebar (flood-based query).
- Setiap klien dapat bertindak sebagai server bagi klien lain.

Meskipun tidak terlalu efisien secara bandwidth, Gnutella membuktikan bahwa P2P bisa berfungsi tanpa infrastruktur pusat apa pun.

---

## ⬇️ 4. BitTorrent (2001)

Diciptakan oleh Bram Cohen, **BitTorrent** mengubah cara distribusi file besar secara efisien dengan membagi beban ke seluruh jaringan.

### Ciri Desentralisasinya:
- File dipecah menjadi potongan kecil dan dibagikan antar pengguna (*seeders* dan *leechers*).
- Awalnya tergantung pada *tracker server*, namun kemudian dikembangkan lebih jauh menggunakan **DHT (Distributed Hash Table)** agar benar-benar terdesentralisasi.
- Protokol BitTorrent kini digunakan untuk distribusi Linux ISO, game update, bahkan video.

> BitTorrent membuktikan bahwa desentralisasi bisa mengalahkan efisiensi layanan terpusat—dan menjadi standar distribusi file global.

---

## 💡 5. TOR Hidden Services (2002+)

Meski lebih dikenal sebagai alat privasi, jaringan **TOR** juga memungkinkan pembuatan situs tersembunyi (*onion services*) yang berjalan tanpa domain DNS konvensional.

### Ciri Desentralisasinya:
- Routing lalu lintas melalui node acak (onion routing).
- Lokasi server tidak dapat dilacak (serverless alias hidden).
- Tanpa keterlibatan otoritas domain publik seperti ICANN.

---

## 🧩 Peran Proyek-Proyek Ini

Masing-masing proyek di atas membawa satu atau lebih elemen dari *visi internet terdesentralisasi*:

| Proyek      | Distribusi Data | Anonimitas | Tanpa Server Pusat | P2P Aktif |
|-------------|------------------|------------|---------------------|-----------|
| Usenet      | ✅               | ⚠️ Sebagian| ✅                  | ⚠️ Manual |
| Freenet     | ✅               | ✅         | ✅                  | ✅        |
| Gnutella    | ⚠️ Terbatas      | ⚠️         | ✅                  | ✅        |
| BitTorrent  | ✅               | ⚠️         | ✅ (DHT)            | ✅        |
| TOR         | ⚠️ (routing)     | ✅         | ✅                  | ⚠️        |

---

> Proyek-proyek awal ini adalah bentuk eksperimen digital untuk membuktikan bahwa kebebasan informasi bisa hidup tanpa izin dari siapa pun. Meskipun banyak yang akhirnya dilupakan publik, jejak dan prinsip-prinsipnya hidup dalam teknologi masa kini seperti IPFS, Web3, dan blockchain.