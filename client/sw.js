self.addEventListener('install', function(e) {
    e.waitUntil(caches.open('myCache1').then(function(cache) {
        return cache.addAll([
            "/",
            "/apple-touch-icon.png",
            "/css/bootstrap-theme.min.css",
            "/css/bootstrap.min.css",
            "/css/main.css",
            "/favicon.ico",
            "/fonts/glyphicons-halflings-regular.eot",
            "/fonts/glyphicons-halflings-regular.svg",
            "/fonts/glyphicons-halflings-regular.ttf",
            "/fonts/glyphicons-halflings-regular.woff",
            "/index.html",
            "/js/main.js",
            "/js/vendor/bootstrap.min.js",
            "/js/vendor/jquery-1.11.2.min.js",
            "/js/vendor/npm.js",
            "/tile-wide.png",
            "/tile.png"
        ]);
    }));
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
    }));
});
