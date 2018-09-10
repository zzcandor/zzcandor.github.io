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
    "revision": "d2e0380c0f4561c3bf293e225f819f31"
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
    "url": "assets/js/25.d30bad36.js",
    "revision": "cfb44dd45f9c7ca38ec41a52399274bb"
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
    "url": "assets/js/36.5e020436.js",
    "revision": "bc6b27632f39e237a066f79b586d725e"
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
    "url": "assets/js/8.8ad51c3f.js",
    "revision": "43c4d48b1c9b9fcbf154467eecab78e7"
  },
  {
    "url": "assets/js/9.3528cb41.js",
    "revision": "a81c9dd04ca1a2c8becc3514cfd097ea"
  },
  {
    "url": "assets/js/app.50ecb3e7.js",
    "revision": "d6fc3140efe30e6f81b3b41591d51466"
  },
  {
    "url": "assets/js/vendors~docsearch.843021ff.js",
    "revision": "5aed06e86165a5028347b1861c62d464"
  },
  {
    "url": "config/index.html",
    "revision": "70ba29f34e2370be1c922b7794eff11b"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "1121711498e9336047eaefd776c5d378"
  },
  {
    "url": "guide/assets.html",
    "revision": "61df10f4b49da68e70c6f5fe91ded6c8"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "7ec89d18093af4c8c3ddbad201a00d50"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "7f4b6ee1a26cf2d5e81f4dd0792ed3ef"
  },
  {
    "url": "guide/deploy.html",
    "revision": "70d28aa7b3e75fabcfc5da0d7ea606de"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a06487759289c5a823fc855c677e4daf"
  },
  {
    "url": "guide/i18n.html",
    "revision": "c1df7ea5591e037810eb751a3efd32e0"
  },
  {
    "url": "guide/index.html",
    "revision": "98495b27862ea87bc0e0d6ee533f3af2"
  },
  {
    "url": "guide/markdown.html",
    "revision": "ec4a451656bcd4b81fbe2423c80f1230"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "c76abeddcd14e8e1a8766416aa449f88"
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
    "revision": "eb4358d09441e414eddf58f90ee330b4"
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
    "revision": "51077605a62e39ae35a184186c8e8ebf"
  },
  {
    "url": "zh/block/vuedoc.html",
    "revision": "6c3949f7882c279e083cbbd4e9291210"
  },
  {
    "url": "zh/config/index.html",
    "revision": "7c3a65f796f449eaa8d7c88cbec25664"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "df000c3f3a28bb25ad28ad19935020ec"
  },
  {
    "url": "zh/front/index.html",
    "revision": "7f8e4bea9691631c205d7118bbfb4b44"
  },
  {
    "url": "zh/front/vuedoc.html",
    "revision": "c5f90f09780b3a13d24d791ab772fa21"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "64a41a4550815a0fa479d3c33ff7da64"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "bd1832e7dce772cd0a76921ce8f4154e"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "7c77cf17ede789d61d534c71dc0d3c0b"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "e11812530dd9e273ed89c63a7dfeea9f"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "cf8527db09fc189bcdd996396d4fe7c5"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "c53df6ecd98d851710f417829674d1d9"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "4aa7222b7de8c50c58f27319f30816e3"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "10d9f042518bf6dbcf56e66c0f110b8a"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "063375df92ec108672fbd2e0e7a734bc"
  },
  {
    "url": "zh/index.html",
    "revision": "df9ba70100362e794fc9a7ac057ba277"
  },
  {
    "url": "zh/think/index.html",
    "revision": "ad2c731ac9aa4121b53c05817f820bc3"
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
