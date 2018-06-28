var filesToCache = [
    '.',
    'css/styles.css',
    'css/responsive.css',
    'index.html',
    'restaurant.html',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'js/main.js',
    'dbhelper.js',
    'restaurant_info.js',
    'data/restaurants.json',
];

var staticCacheName = 'pages-cache-v1';

self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
        caches.open(staticCacheName)
            .then(function(cache) {
                return cache.addAll(filesToCache);
            })
    );
});




self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open('staticCacheName').then(function(cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});

