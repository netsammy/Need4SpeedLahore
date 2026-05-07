const CACHE_NAME = 'need4speedlahore-v2'
const APP_SCOPE = new URL(self.registration.scope).pathname
const APP_ASSETS = [
  APP_SCOPE,
  `${APP_SCOPE}manifest.webmanifest`,
  `${APP_SCOPE}icons/app-icon.svg`,
  `${APP_SCOPE}icons/app-maskable.svg`,
  `${APP_SCOPE}icons/app-icon-192.png`,
  `${APP_SCOPE}icons/app-icon-512.png`,
]

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS)))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
    ),
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(APP_SCOPE, responseClone))
          return response
        })
        .catch(() => caches.match(APP_SCOPE) || caches.match(event.request)),
    )
    return
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200) return response
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone))
          return response
        })
        .catch(() => cached || caches.match(APP_SCOPE))

      return cached || networkFetch
    }),
  )
})
