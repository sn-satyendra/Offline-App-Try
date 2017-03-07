var CACHE_NAME = 'app-cache-v1';
var staticResources = [
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
];

var requests = ['/authenticate'];

var resourcesToCache = [].concat(staticResources).concat(requests);

self.addEventListener('install', function(e) {
    e.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(resourcesToCache);
    }));
});

// Request the resource from the network if not in cache. Also
// save it into the cache so that later
// requests for that resource could be retrieved offline too
this.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(resp) {
        return resp || fetch(event.request).then(function(response) {
            caches.open(CACHE_NAME).then(function(cache) {
                cache.put(event.request, response.clone());
            });
            return response;
        });
    }).catch(function() {
        // TODO: If the resource is not found in cache and network is also not reachable
        // we fallback to this. Either queue the request or provide some default
        // cached data like:
        // return caches.match('/sw-test/gallery/myLittleVader.jpg');
    }));
});
