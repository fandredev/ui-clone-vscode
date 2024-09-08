/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export const viewPWA = VitePWA({
  registerType: "autoUpdate", // https://vite-pwa-org.netlify.app/guide/
  manifest: {
    id: "/",
    name: "VsCode Clone Webpage",
    short_name: "VsCode Clone",

    theme_color: "#0078d4",
    background_color: "#09001a",

    display: "standalone",
    description:
      "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",

    orientation: "portrait",

    start_url: "/",
    icons: [
      {
        src: "/vscode-192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "maskable",
      },
      {
        src: "/vscode-256.png",
        type: "image/png",
        sizes: "256x256",
      },
      {
        src: "/vscode-512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
  workbox: {
    // workbox options to cache images
    runtimeCaching: [
      {
        urlPattern: ({ url }) => {
          return url.pathname.startsWith("/image");
        },
        handler: "CacheFirst",
        options: {
          cacheableResponse: {
            statuses: [0, 200],
          },
          cacheName: "runtime-cache",
        },
      },
    ],
  },

  devOptions: {
    enabled: true, // enable logs in dev mode
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viewPWA],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],

    coverage: {
      include: ["src/**/*"],
      reporter: ["text", "html", "json"],
      thresholds: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  },
});
