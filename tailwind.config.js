// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      serif: ['Georgia', 'serif']
    },
    colors: {
      gris: '#454839',
      bleu: '#A2B3BA',
      orange: '#AE4401',
      vert: '#9B8F00',
      rouge: '#d72323',
      gris_clair: '#aaad9b',
      violet: '#663F46'
    }
  },
  plugins: [require('nightwind')],
}
