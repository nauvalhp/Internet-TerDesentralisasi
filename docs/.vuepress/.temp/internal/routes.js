export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Sejarah Internet Terdesentralisasi"} }],
  ["/guide/cara-hosting-gratis-github.html", { loader: () => import(/* webpackChunkName: "guide_cara-hosting-gratis-github.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/guide/cara-hosting-gratis-github.html.js"), meta: {"title":"Hosting Gratis via GitHub Pages"} }],
  ["/guide/glosarium.html", { loader: () => import(/* webpackChunkName: "guide_glosarium.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/guide/glosarium.html.js"), meta: {"title":"Glosarium: Istilah Penting dalam Desentralisasi"} }],
  ["/guide/konsep-desentralisasi.html", { loader: () => import(/* webpackChunkName: "guide_konsep-desentralisasi.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/guide/konsep-desentralisasi.html.js"), meta: {"title":"Konsep Desentralisasi"} }],
  ["/guide/masa-depan.html", { loader: () => import(/* webpackChunkName: "guide_masa-depan.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/guide/masa-depan.html.js"), meta: {"title":"Masa Depan Internet Terdesentralisasi"} }],
  ["/guide/proyek-awal-terdesentralisasi.html", { loader: () => import(/* webpackChunkName: "guide_proyek-awal-terdesentralisasi.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/guide/proyek-awal-terdesentralisasi.html.js"), meta: {"title":"Proyek Awal Terdesentralisasi"} }],
  ["/guide/sejarah-desentralisasi.html", { loader: () => import(/* webpackChunkName: "guide_sejarah-desentralisasi.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/guide/sejarah-desentralisasi.html.js"), meta: {"title":"Sejarah Awal Desentralisasi Internet"} }],
  ["/guide/tantangan.html", { loader: () => import(/* webpackChunkName: "guide_tantangan.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/guide/tantangan.html.js"), meta: {"title":"Tantangan dalam Mewujudkan Internet Terdesentralisasi"} }],
  ["/guide/teknologi-pendukung.html", { loader: () => import(/* webpackChunkName: "guide_teknologi-pendukung.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/guide/teknologi-pendukung.html.js"), meta: {"title":"Teknologi Pendukung Internet Terdesentralisasi"} }],
  ["/guide/timeline.html", { loader: () => import(/* webpackChunkName: "guide_timeline.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/guide/timeline.html.js"), meta: {"title":"Garis Waktu Perkembangan Internet Terdesentralisasi"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/nauvalhp/Internet-TerDesentralisasi/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
