<template><div><h1 id="hosting-gratis-via-github-pages" tabindex="-1"><a class="header-anchor" href="#hosting-gratis-via-github-pages"><span>Hosting Gratis via GitHub Pages</span></a></h1>
<p>GitHub Pages memungkinkan kamu untuk meng-host website statis secara gratis langsung dari repositori GitHub. Berikut panduannya:</p>
<h2 id="_1-siapkan-akun-github" tabindex="-1"><a class="header-anchor" href="#_1-siapkan-akun-github"><span>1. Siapkan Akun GitHub</span></a></h2>
<p>Jika belum punya akun, daftar di <a href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a>.</p>
<h2 id="_2-buat-repository-baru" tabindex="-1"><a class="header-anchor" href="#_2-buat-repository-baru"><span>2. Buat Repository Baru</span></a></h2>
<ol>
<li>Klik tombol <code v-pre>New repository</code></li>
<li>Masukkan nama repositori (contoh: <code v-pre>websiteku</code>)</li>
<li>Aktifkan opsi <strong>&quot;Add a README file&quot;</strong></li>
<li>Klik <strong>Create repository</strong></li>
</ol>
<h2 id="_3-tambahkan-file-website" tabindex="-1"><a class="header-anchor" href="#_3-tambahkan-file-website"><span>3. Tambahkan File Website</span></a></h2>
<h3 id="file-minimum" tabindex="-1"><a class="header-anchor" href="#file-minimum"><span>File Minimum:</span></a></h3>
<ul>
<li><code v-pre>index.html</code> (halaman utama)</li>
<li>File tambahan: CSS, JS, gambar, dll.</li>
</ul>
<h3 id="cara-menambahkan" tabindex="-1"><a class="header-anchor" href="#cara-menambahkan"><span>Cara Menambahkan:</span></a></h3>
<ol>
<li>Klik tombol <strong>&quot;Add file&quot;</strong> → <code v-pre>Upload files</code></li>
<li>Upload semua file HTML, CSS, dan JS</li>
<li>Klik <strong>&quot;Commit changes&quot;</strong></li>
</ol>
<p>💡 Kamu juga bisa menggunakan editor seperti <strong>VSCode</strong> untuk membuat file secara lokal, lalu mengunggahnya ke GitHub.</p>
<h2 id="_4-aktifkan-github-pages" tabindex="-1"><a class="header-anchor" href="#_4-aktifkan-github-pages"><span>4. Aktifkan GitHub Pages</span></a></h2>
<ol>
<li>Buka tab <strong>Settings</strong> pada repositorimu</li>
<li>Di sidebar kiri, pilih <strong>Pages</strong></li>
<li>Pada bagian <strong>&quot;Build and deployment&quot;</strong>:
<ul>
<li><strong>Source</strong>: <code v-pre>Deploy from a branch</code></li>
<li><strong>Branch</strong>: pilih <code v-pre>main</code></li>
<li><strong>Folder</strong>: <code v-pre>/root</code> (jika file HTML ada di root repo) atau <code v-pre>/docs</code> (jika file dalam folder <code v-pre>docs/</code>)</li>
</ul>
</li>
<li>Klik <strong>Save</strong></li>
</ol>
<h2 id="_5-tunggu-dan-dapatkan-link" tabindex="-1"><a class="header-anchor" href="#_5-tunggu-dan-dapatkan-link"><span>5. Tunggu dan Dapatkan Link</span></a></h2>
<p>Tunggu 1-2 menit hingga GitHub selesai memproses.</p>
<p>🌐 Kamu akan mendapatkan link seperti:</p>
<p><a href="https://username.github.io/nama-repository/" target="_blank" rel="noopener noreferrer">https://username.github.io/nama-repository/</a></p>
<hr>
<h2 id="_6-website-siap" tabindex="-1"><a class="header-anchor" href="#_6-website-siap"><span>6. Website Siap!</span></a></h2>
<p>Sekarang websitemu sudah online dan bisa diakses dari mana saja secara gratis 🎉</p>
<hr>
<h2 id="tips-tambahan" tabindex="-1"><a class="header-anchor" href="#tips-tambahan"><span>Tips Tambahan</span></a></h2>
<ul>
<li>Kamu bisa menggunakan framework seperti:
<ul>
<li><a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress</a></li>
<li><a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a></li>
<li><a href="https://gohugo.io/" target="_blank" rel="noopener noreferrer">Hugo</a></li>
<li><a href="https://jekyllrb.com/" target="_blank" rel="noopener noreferrer">Jekyll</a></li>
</ul>
</li>
<li>Untuk website portofolio, buat repo bernama:</li>
</ul>
<p>username.github.io</p>
<p>Maka websitemu akan langsung berada di domain utama itu.</p>
</div></template>


