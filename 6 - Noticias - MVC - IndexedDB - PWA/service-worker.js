var cacheName = 'noticias';
var filesToCache = [
    '6 - Noticias - MVC - IndexedDB - PWA/',
    '6 - Noticias - MVC - IndexedDB - PWA/index.html',
    '6 - Noticias - MVC - IndexedDB - PWA/public/js/main.js',
    '6 - Noticias - MVC - IndexedDB - PWA/public/css/main.css',
    '6 - Noticias - MVC - IndexedDB - PWA/public/img/g1.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});