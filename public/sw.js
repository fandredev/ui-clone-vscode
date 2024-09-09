import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { clientsClaim } from "workbox-core";
import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { NetworkFirst, StaleWhileRevalidate } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";

clientsClaim();
self.skipWaiting();

// Limpa caches antigos e precacheia os assets definidos no manifesto.
cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);

const thirtyDaysInSeconds = 30 * 24 * 60 * 60;

// Cache para arquivos CSS (usando NetworkFirst)
registerRoute(
  ({ request }) => request.destination === "style",
  new NetworkFirst({
    cacheName: "styles-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200], // Apenas cacheia respostas com esses status
      }),
    ],
  })
);

// Cache para imagens (usando StaleWhileRevalidate)
registerRoute(
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "images-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200], // Apenas cacheia respostas com esses status
      }),
      new ExpirationPlugin({
        maxEntries: 60, // Limita a quantidade de entradas no cache
        maxAgeSeconds: thirtyDaysInSeconds, // Define o tempo máximo de cache como 30 dias
      }),
    ],
  })
);
