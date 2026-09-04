// Repris a l'identique du site actuel.
// Seule difference : `purge` devient `content` (renommage Tailwind 2 -> 3).
module.exports = {
  content: [
    './app/components/**/*.{vue,js}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      body: ['Quicksand', 'sans-serif']
    },
    colors: {
      white: '#ffffff',
      gris: '#454839',
      bleu: '#A2B3BA',
      orange: '#AE4401',
      vert: '#9B8F00',
      rouge: '#d72323',
      gris_clair: '#aaad9b',
      violet: '#663F46',
      vert_sombre: '#5a5300'
    }
  }
}
