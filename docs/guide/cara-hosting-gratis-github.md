# Hosting Gratis via GitHub Pages

GitHub Pages memungkinkan kamu untuk meng-host website statis secara gratis langsung dari repositori GitHub. Berikut panduannya:

## 1. Siapkan Akun GitHub

Jika belum punya akun, daftar di [https://github.com](https://github.com).

## 2. Buat Repository Baru

1. Klik tombol `New repository`
2. Masukkan nama repositori (contoh: `websiteku`)
3. Aktifkan opsi **"Add a README file"**
4. Klik **Create repository**

## 3. Tambahkan File Website

### File Minimum:
- `index.html` (halaman utama)
- File tambahan: CSS, JS, gambar, dll.

### Cara Menambahkan:
1. Klik tombol **"Add file"** → `Upload files`
2. Upload semua file HTML, CSS, dan JS
3. Klik **"Commit changes"**

💡 Kamu juga bisa menggunakan editor seperti **VSCode** untuk membuat file secara lokal, lalu mengunggahnya ke GitHub.

## 4. Aktifkan GitHub Pages

1. Buka tab **Settings** pada repositorimu
2. Di sidebar kiri, pilih **Pages**
3. Pada bagian **"Build and deployment"**:
   - **Source**: `Deploy from a branch`
   - **Branch**: pilih `main`
   - **Folder**: `/root` (jika file HTML ada di root repo) atau `/docs` (jika file dalam folder `docs/`)
4. Klik **Save**

## 5. Tunggu dan Dapatkan Link

Tunggu 1-2 menit hingga GitHub selesai memproses.

🌐 Kamu akan mendapatkan link seperti:

[https://username.github.io/nama-repository/](https://username.github.io/nama-repository/)

---

## 6. Website Siap!

Sekarang websitemu sudah online dan bisa diakses dari mana saja secara gratis 🎉

---

## Tips Tambahan

- Kamu bisa menggunakan framework seperti:
  - [VuePress](https://vuepress.vuejs.org/)
  - [Docusaurus](https://docusaurus.io/)
  - [Hugo](https://gohugo.io/)
  - [Jekyll](https://jekyllrb.com/)
- Untuk website portofolio, buat repo bernama:

username.github.io

Maka websitemu akan langsung berada di domain utama itu.