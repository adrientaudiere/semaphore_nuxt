// Service worker de desinscription.
//
// Le site Nuxt 2 deployait un service worker PWA (@nuxtjs/pwa) qui mettait
// /_nuxt/ en CacheFirst. Les visiteurs recurrents l'ont toujours enregistre.
// Ce fichier le remplace : il vide les caches puis se desenregistre, ce qui
// garantit que tout le monde recoit la nouvelle version du site.
//
// A supprimer (avec le fichier) dans quelques mois, une fois le parc nettoye.

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const noms = await caches.keys()
      await Promise.all(noms.map(nom => caches.delete(nom)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      clients.forEach(client => client.navigate(client.url))
    })()
  )
})
