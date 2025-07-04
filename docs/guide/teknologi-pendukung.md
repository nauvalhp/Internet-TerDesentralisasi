# Teknologi Pendukung Internet Terdesentralisasi

Internet yang terdesentralisasi tidak bisa berjalan hanya dengan semangat kebebasan informasi—ia membutuhkan infrastruktur teknis yang dapat menggantikan peran server pusat, otoritas nama domain, dan kontrol tunggal atas data. Seiring berkembangnya kebutuhan akan sistem yang lebih terbuka, muncul beragam teknologi yang menopang fondasi dunia digital tanpa pusat.

Berikut adalah beberapa teknologi inti yang memungkinkan desentralisasi dapat diwujudkan secara nyata dan berfungsi stabil.

---

## 🔗 1. Distributed Hash Table (DHT)

**DHT** adalah struktur data terdistribusi yang memungkinkan node dalam jaringan peer-to-peer menemukan data atau rekan lain tanpa bantuan server pusat.

### Karakteristik:
- Setiap node menyimpan bagian dari "peta alamat" global.
- Pemetaan data dilakukan berdasarkan hash key → lokasi node.
- Digunakan oleh: BitTorrent (µTP, Mainline DHT), IPFS, libp2p.

> DHT adalah jantung dari jaringan yang bisa menemukan dan menyambungkan titik-titik dalam kegelapan.

---

## 📦 2. IPFS (InterPlanetary File System)

**IPFS** adalah sistem file terdistribusi yang memungkinkan penyimpanan dan akses file berbasis konten, bukan lokasi.

### Keunggulan:
- Tidak tergantung pada server pusat atau lokasi domain.
- File diakses melalui hash unik, bukan URL.
- Data yang sama tidak perlu diunduh ulang—hemat bandwidth.
- Mendukung versi file (versioning) dan struktur direktori.

> IPFS bukan hanya sistem file, tapi juga ide bahwa web bisa di-hosting oleh semua orang, bukan hanya oleh server-server besar.

---

## 🧱 3. Blockchain

**Blockchain** adalah buku besar (ledger) digital yang tak dapat diubah dan tersebar di banyak node. Cocok untuk mencatat transaksi, kepemilikan, dan interaksi antar pengguna.

### Fitur Penting:
- Tidak ada otoritas pusat—validasi dilakukan oleh node melalui konsensus.
- Transparan dan dapat diaudit siapa saja.
- Mendukung smart contract untuk logika otomatis (di Ethereum, Solana, dll).

> Blockchain menggeser kepercayaan dari institusi ke kode dan konsensus.

---

## 🤝 4. Protokol Peer-to-Peer (P2P)

P2P adalah arsitektur di mana setiap node bertindak sebagai klien dan server sekaligus. Komunikasi terjadi langsung antar pengguna tanpa perantara.

### Contoh Protokol:
- libp2p (IPFS, Filecoin)
- WebRTC (browser-based real-time P2P)
- Secure Scuttlebutt (decentralized social protocol)

### Kelebihan:
- Tidak rentan terhadap single point of failure.
- Topologi jaringan lebih resilien dan adaptif.
- Cocok untuk aplikasi sosial, file sharing, dan komunikasi privat.

---

## 🌐 5. Federasi & Protokol Terbuka

Desentralisasi tidak selalu berarti total P2P. **Model federasi** juga digunakan, seperti pada email dan Mastodon—di mana banyak server independen berbicara satu sama lain melalui protokol terbuka.

### Contoh:
- **ActivityPub** → Digunakan oleh Mastodon, PeerTube.
- **Matrix** → Untuk pesan real-time (alternatif terdesentralisasi dari Discord/Slack).
- **SMTP + IMAP** → Federasi lama pada sistem email.

> Federasi memungkinkan kolaborasi antarpusat kecil, bukan kontrol tunggal.

---

## 🔐 6. Kriptografi Kunci Publik

Privasi dan kepercayaan dalam sistem terdesentralisasi tidak mungkin tercapai tanpa kriptografi modern.

### Peranannya:
- Mengamankan komunikasi tanpa perlu server otentikasi.
- Mendukung tanda tangan digital, enkripsi end-to-end, dan identitas digital.
- Digunakan dalam hampir semua sistem: blockchain, Matrix, IPFS, TOR.

---

## 🔄 7. Konsensus Terdistribusi

Agar sistem tetap sinkron dan adil meskipun tanpa pusat, digunakan mekanisme konsensus.

### Jenis Konsensus:
- Proof of Work (PoW)
- Proof of Stake (PoS)
- Practical Byzantine Fault Tolerance (PBFT)
- Gossip Protocols

> Tanpa konsensus, tidak ada kepercayaan. Tanpa kepercayaan, tidak ada desentralisasi.

---

## 🔍 Perbandingan Teknologi

| Teknologi     | Penyimpanan | Komunikasi | Identitas | Sensor-proof | Contoh Proyek          |
|---------------|-------------|------------|-----------|--------------|-------------------------|
| DHT           | ✅          | ✅         | ⚠️        | ⚠️            | BitTorrent, libp2p     |
| IPFS          | ✅          | ⚠️         | ⚠️        | ⚠️            | IPFS, Filecoin         |
| Blockchain    | ⚠️ (Log)    | ⚠️         | ✅        | ✅            | Ethereum, Bitcoin      |
| P2P Protocols | ⚠️          | ✅         | ⚠️        | ⚠️            | WebRTC, SSB            |
| Federasi      | ⚠️          | ✅         | ⚠️        | ⚠️            | Mastodon, Matrix       |

---

> Di balik semua jargon teknis ini, teknologi pendukung internet terdesentralisasi punya satu misi: mengembalikan kendali jaringan ke tangan penggunanya.

