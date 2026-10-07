const CACHE_NAME = 'beduino-store-v1';
const assetsToCache = [
'index.html',
'manifest.json',
'logo-192.png',
'logo-512.png',
'img1.png',
'img2.png',
'img3.png',
'img4.png',
'img5.png',
'img6.png',
'img7.png',
'img8.png'
];

self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => {
return cache.addAll(assetsToCache);
})
);
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => {
return response || fetch(event.request);
})
);
});