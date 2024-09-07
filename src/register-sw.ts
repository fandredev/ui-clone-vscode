export function registerSW() {
  window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration: ServiceWorkerRegistration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });

      navigator.serviceWorker.ready.then(
        (registration: ServiceWorkerRegistration) => {
          console.log("Service Worker ready with scope:", registration.scope);
          registration.update();
        }
      );
    }
  });
}
