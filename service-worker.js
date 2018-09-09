/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "04315815bd1f18590ea8ee661cb7a528"
  },
  {
    "url": "assets/css/0.styles.48f77d96.css",
    "revision": "fe163482482cb3f7f21509726385d4eb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cec69d41.js",
    "revision": "5410b9b7dda479c2576994c276e6d3f2"
  },
  {
    "url": "assets/js/11.5230fef9.js",
    "revision": "cda56847b0094ec9ff1048463af23ae9"
  },
  {
    "url": "assets/js/12.d246855c.js",
    "revision": "09a3aab82673eab3f80da7160b73567f"
  },
  {
    "url": "assets/js/13.7ce58a7d.js",
    "revision": "cfe11ed528fb69db898f8e075355b636"
  },
  {
    "url": "assets/js/14.37157cfb.js",
    "revision": "1696cbac64f20fc567ca0a3a30a39af0"
  },
  {
    "url": "assets/js/15.d4db13d2.js",
    "revision": "c8b43c431e17e9ba6c12fee88fe44cca"
  },
  {
    "url": "assets/js/16.6a1b7848.js",
    "revision": "943bc5a33876b8d047d35bc757515acb"
  },
  {
    "url": "assets/js/17.bd7df71c.js",
    "revision": "08605fdaa21d07953059ee8a03e9d1dd"
  },
  {
    "url": "assets/js/18.6caff693.js",
    "revision": "133bfd6d363029cd4ef2af6cffdd6536"
  },
  {
    "url": "assets/js/19.eeb7cf73.js",
    "revision": "e26e050efce155981209b646f5732775"
  },
  {
    "url": "assets/js/2.f479639b.js",
    "revision": "c9ef5eccec94be6b75165bb145114d6e"
  },
  {
    "url": "assets/js/20.5325ada0.js",
    "revision": "e8cb323ab55eaa32efaee16b712d062d"
  },
  {
    "url": "assets/js/21.9d5a553a.js",
    "revision": "6d4bedbc0f48ec9bef905cc761679629"
  },
  {
    "url": "assets/js/22.641ddec6.js",
    "revision": "80384ded48d159d8c62ce61d4af3d1c1"
  },
  {
    "url": "assets/js/23.af6de6b1.js",
    "revision": "bfad3d617c78a61fb561489a1c9928ec"
  },
  {
    "url": "assets/js/24.0b8adced.js",
    "revision": "cfe28d36a2f510d437d80b84de0cb416"
  },
  {
    "url": "assets/js/25.95c89ec3.js",
    "revision": "4bad640709f86ff74619455b68115209"
  },
  {
    "url": "assets/js/26.5a381691.js",
    "revision": "c24c744d6109267152e2605e37ae1f0f"
  },
  {
    "url": "assets/js/27.ba8ae58c.js",
    "revision": "a745eec440391a1fe1d019f26dce2391"
  },
  {
    "url": "assets/js/28.b974f6d6.js",
    "revision": "3feeaee42ae023f4ef206d01468b32cf"
  },
  {
    "url": "assets/js/29.264b5eef.js",
    "revision": "d1e1e142076202723a1f4c98658f25f3"
  },
  {
    "url": "assets/js/3.c38b0c98.js",
    "revision": "9a20f1e2b3e88071385c2a401b5f24b8"
  },
  {
    "url": "assets/js/30.ae878843.js",
    "revision": "b46c3e9b5f6f4b9cba15606f339fef46"
  },
  {
    "url": "assets/js/31.1104a3bf.js",
    "revision": "acd6d69d58c3d37aac7048ff9a8807b5"
  },
  {
    "url": "assets/js/32.c0fb1e92.js",
    "revision": "c6af4c175019a6d2e7f19bdb96cdd45b"
  },
  {
    "url": "assets/js/33.eb865037.js",
    "revision": "7efae87a2d62aebce8d7ad3452e329ef"
  },
  {
    "url": "assets/js/34.887968ad.js",
    "revision": "454ba9b1fb7dfedb23c815afbbd2f369"
  },
  {
    "url": "assets/js/35.c3ce9dd9.js",
    "revision": "22564f1ec8faf38e9731ba5bd3f9eb2b"
  },
  {
    "url": "assets/js/36.4b4200ed.js",
    "revision": "3d3608d48bad3ab615c4bf1d8a55da2d"
  },
  {
    "url": "assets/js/4.3b772bfb.js",
    "revision": "039b2af81c8eafc3fcf28a892c4c4c91"
  },
  {
    "url": "assets/js/5.c15fd5fd.js",
    "revision": "1043b46bf2d6eae242acfc19ae9f7693"
  },
  {
    "url": "assets/js/6.7870e493.js",
    "revision": "da02aa188d26530db6f2edaaf8be175d"
  },
  {
    "url": "assets/js/7.3adf0da4.js",
    "revision": "0098661719d01b7c3ecdf9c9e6b05f0b"
  },
  {
    "url": "assets/js/8.be62b44d.js",
    "revision": "dd7bc02530d1f4fe65a8ff5b65c2e7ef"
  },
  {
    "url": "assets/js/9.3528cb41.js",
    "revision": "a81c9dd04ca1a2c8becc3514cfd097ea"
  },
  {
    "url": "assets/js/app.25e07ae6.js",
    "revision": "7d94399fbc7270059cc204d53d100d27"
  },
  {
    "url": "assets/js/vendors~docsearch.843021ff.js",
    "revision": "5aed06e86165a5028347b1861c62d464"
  },
  {
    "url": "config/index.html",
    "revision": "0cd82eab9699ead81102c85de243d08c"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "3f13a9b325b1e861036fe3c8f61af4ef"
  },
  {
    "url": "guide/assets.html",
    "revision": "3982726164600105519ed89f0e0b5abf"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "ad7d60eadaa5a586256105b146c623b9"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "0a0925ddeae3bb6c30932cae260569e2"
  },
  {
    "url": "guide/deploy.html",
    "revision": "d8ac0ba91649c122b89e95de3c74ea85"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c26eee31005dd6b664739202b163e4b6"
  },
  {
    "url": "guide/i18n.html",
    "revision": "a6ee509df6fb1beff1147f8fb1b8b30e"
  },
  {
    "url": "guide/index.html",
    "revision": "4b694587f3e59e4125a9091854436bc4"
  },
  {
    "url": "guide/markdown.html",
    "revision": "8eef40305f68005112be88648ee92292"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "e8e25529a600db0fbb447e2f51d4096d"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "77335955228e74eaddef16f57951434b"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "77335955228e74eaddef16f57951434b"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "ae478e35e3fe44820e8bae7a0975b360"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "77335955228e74eaddef16f57951434b"
  },
  {
    "url": "zh/block/index.html",
    "revision": "2856a06f5318558a32c945288b85e5a6"
  },
  {
    "url": "zh/block/vuedoc.html",
    "revision": "6c2382ea8581692f9217fe2d61f23264"
  },
  {
    "url": "zh/config/index.html",
    "revision": "b9ab8a05f047294348b1ec63de7f0eda"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "6316a652de3f9675013099c751aa6a7d"
  },
  {
    "url": "zh/front/index.html",
    "revision": "7e5622ded486f3022471858f16ac06bf"
  },
  {
    "url": "zh/front/vuedoc.html",
    "revision": "a39772074687e9f9d13992315b337a90"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "f172deaa20c8acc326fb68c2f5a6a90c"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "d9c7ed80da1983af76f3649cf3c70a7e"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "11c752524dc31b786d8e04494239f16d"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "4ac842439bae8f102c6e28f160cd21ad"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "12b56adba452957cf6a6c175a7466799"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "5f0681c6affb35ccd7d52ba7e023c098"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "98a4492b83ff0461105f623cac3e8658"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "f0d2d5b8beec593a6e5517bcd1fc71d2"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "33a2a8ef2e5e611dcc7039f70b40d4e3"
  },
  {
    "url": "zh/index.html",
    "revision": "4b5e82347563570c2f2a95bf405ee6c9"
  },
  {
    "url": "zh/think/index.html",
    "revision": "07ddd8953d6f6a894bd80fae3d3295c2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
