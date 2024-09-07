self.addEventListener("install", function (event) {
  console.log("Install the service worker");

  const cacheName = "v1";

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
