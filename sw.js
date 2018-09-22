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

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-3604d73e30dbe457c91a.js"
  },
  {
    "url": "app-10ffecf54e24a9fa4eb7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8b26ceb36df5e4f03dfa.js"
  },
  {
    "url": "index.html",
    "revision": "83bac9b749e85fd0425a550557b5ad8e"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b990f520d8350bbeade21fd4dfb216d6"
  },
  {
    "url": "0.e7c120b900a22d9158d6.css"
  },
  {
    "url": "0-8c41c026fb8edadf1c1f.js"
  },
  {
    "url": "component---src-pages-index-js-b1c219cade552d62d4ba.js"
  },
  {
    "url": "static/d/607/path---index-6a9-kLgMZYoDEqHhW2ekNlSwdKLY.json",
    "revision": "890339d45653fd1ac299e06e20884b3e"
  },
  {
    "url": "component---src-pages-404-js-99242482e95472f7ebc2.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9844e5b809aee849078f8c195ee7599e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
