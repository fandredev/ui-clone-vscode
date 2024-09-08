const cacheName = "v1";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache
        .addAll([
          "/index.html",
          "/images/banner.png",
          "/images/c-extension.png",
          "/images/copilot-extension.png",
          "/images/cs-dev-kit-extension.png",
          "/images/github-pull-requests-extension.png",
          "/images/gitlens-extension.png",
          "/images/remote-extension.png",
          "/images/jupyter-extension.png",
          "/images/microsoft.svg",
          "/images/python-extension.png",
          "/images/search.svg",
          "/images/sun.svg",
          "/images/x-icon.svg",
          "/images/vscode.png",
          "/images/swimlane-anywhere.png",
          "/images/swimlane-copilot.png",
          "/images/swimlane-customized.png",
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(cacheFirst(event.request));
});

const cacheFirst = async (request) => {
  const responseCache = await caches.match(request);

  if (responseCache) return responseCache;

  const networkResponse = await fetch(request);
  updateCache(request, networkResponse.clone());

  return networkResponse;
};

const updateCache = async (request, response) => {
  const cache = await caches.open(cacheName);

  await cache.put(request, response);
};
