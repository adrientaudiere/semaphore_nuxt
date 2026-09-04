export default defineNuxtConfig({
  compatibilityDate: '2026-09-03',

  // Prerendu : chaque page est ecrite en HTML complet au build.
  // C'est la difference majeure avec le site actuel, qui servait des pages vides.
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/fonts'
  ],

  // Quicksand etait declaree dans tailwind.config.js mais n'etait chargee nulle part.
  // Le module telecharge la police au build et la sert depuis le site : aucun appel
  // vers Google au moment de la visite.
  fonts: {
    families: [
      { name: 'Quicksand', provider: 'google', weights: [400, 500, 600, 700] }
    ]
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' }
      ],
      script: [
        {
          'data-goatcounter': 'https://semaphore.goatcounter.com/count',
          src: 'https://gc.zgo.at/count.js',
          async: true
        }
      ]
    }
  },

  content: {
    build: {
      markdown: {
        toc: { depth: 3 }
      }
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  devtools: { enabled: false }
})
