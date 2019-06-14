const staticCacheName  = 'site-static'
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/script.js',
    '/css/style.css',
    '/ding.wav',
    'https://unicons.iconscout.com/release/v0.0.4/css/unicons.css',
];

//install service worker 
self.addEventListener('install',evt =>{
    evt.waitUntil( 
         caches.open(staticCacheName).then(cache=>{
        cache.addAll(assets)
    })
    )
 
});

//activate service worker
self.addEventListener('activate', evt=>{
    console.log('service worker has been activate');
});

//fetch event
self.addEventListener('fetch',evt=>{
    evt.respondWith(
        caches.match(evt.request).then(cacheRes=>{
            return cacheRes || fetch(evt.request);
        })
    )
})