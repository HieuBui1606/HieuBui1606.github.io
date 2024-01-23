'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "74f75135b0961a0b64b9f28bbea4557d",
"assets/AssetManifest.bin.json": "0bf975bf5707428006894811e7269739",
"assets/AssetManifest.json": "48f79b4fe6c4525b6170db425d24a386",
"assets/assets/fonts/InterMedium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/PoorStoryRegular.ttf": "21d15c9110b18b49d69602323f1a7b36",
"assets/assets/fonts/PoppinsBold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/PoppinsLight.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/PoppinsMedium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/PoppinsRegular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/PoppinsSemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/back.png": "d4190bc58d6a290b01745f59a66b677b",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/img_add.png": "09d24f056bcc7d95f9a0b2775dbe6977",
"assets/assets/images/img_add_circle.svg": "d05854e6a5b0dcdf6e81dda52e629bac",
"assets/assets/images/img_add_circle_green_800.svg": "380083557eec48e5aa7f2dd5358178ed",
"assets/assets/images/img_arrow_back_ios.svg": "9f2a783770dc8d672da101b0fdc48fd9",
"assets/assets/images/img_burger_sandwich.png": "40d9e36dd31c507c567e29c6eb696b7f",
"assets/assets/images/img_cart.svg": "fdf19c864c295b5e9c91058fc40ad8e9",
"assets/assets/images/img_ellipse_1.png": "e5887c85fb685d5b2bb222577f326935",
"assets/assets/images/img_ellipse_2.png": "5b556640c1d7eec46073e83fa3845891",
"assets/assets/images/img_highlight_off.svg": "614176d1c4da577a7dd3da1a5da88338",
"assets/assets/images/img_home.svg": "ce9f8e70564e24e6ee3b0658cc7886a2",
"assets/assets/images/img_home_black_900_01.svg": "d209f9150abd5558d671b6e3d63cd786",
"assets/assets/images/img_image_2.png": "b11317277b8331a0c499da45f708c8ae",
"assets/assets/images/img_image_2_183x275.png": "0ba9690fc159d4ec206170e8eb6de643",
"assets/assets/images/img_image_3.png": "1586247bc07a5bdaaca44fd5a7e1eff9",
"assets/assets/images/img_image_3_194x259.png": "df15bfecf7e29323f1f5aadf737d79d1",
"assets/assets/images/img_image_4.png": "127e396cc14278cca043a8d23c3672bf",
"assets/assets/images/img_image_4_183x275.png": "9a527951211793ba390975de1d02c551",
"assets/assets/images/img_image_4_68x79.png": "c465985d376df5b2acf5416ed2663744",
"assets/assets/images/img_image_5.png": "6d184d35c5f3e59db7b4afeacc081233",
"assets/assets/images/img_image_5_183x276.png": "60d486ab810a2ff8dff5a2bd9f2841de",
"assets/assets/images/img_image_6.png": "060a5451994b4025e36c9f3eb783bc36",
"assets/assets/images/img_image_6_183x275.png": "e0a80e6d90c611d4b3aa648eb94f86e6",
"assets/assets/images/img_image_7.png": "c4ff12c78f3e1081e1697416b704bd9f",
"assets/assets/images/img_image_7_190x266.png": "e9defa500ad4f123d4fed385d7c6bb55",
"assets/assets/images/img_minus_sign.png": "51c88816b6a2d02f6de47d92e859b3f3",
"assets/assets/images/img_search.svg": "328a3f2ec88e4bf7cb7294b67c73eb40",
"assets/assets/images/img_shopping_cart.png": "aaa1e47bd17adb7c1592eadcefb729f5",
"assets/assets/images/img_star_filled.png": "ba506597e35daeb3c7d823c8701cf584",
"assets/assets/images/img_user.png": "c2ac0cb8660c478657a9d1cbbc6aee35",
"assets/FontManifest.json": "eb50dc800ade25899f1a3a195cbc8c57",
"assets/fonts/MaterialIcons-Regular.otf": "4a605f5da94f25c87a21ab9601e256e1",
"assets/NOTICES": "cf346f7b4bf06908f7adf68f46829993",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d40b0c2501a278a7bbe87747141b5f2",
"/": "4d40b0c2501a278a7bbe87747141b5f2",
"main.dart.js": "27384f63c473d75f83634c15baa38ced",
"manifest.json": "2da9cc597951d893a721ba1b7277b1e8",
"version.json": "3ce7ec1b74b6126a176928c77de8e302"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
