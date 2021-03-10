<template>
  <div class="container p-0 flex-col">
    <div class="w-screen flex-auto">
      <TheNavBar />
      <nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

p {
  text-indent: 22px;
}

h1, h2, h3, h4, h5 {
  @apply font-sans;
  @apply font-semibold;
  @apply mt-4;
  @apply text-left;
}

h3 {
  @apply text-xl
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  @apply text-vert;
}
a:hover {
  @apply text-opacity-50;
}

ul {
 list-style:  circle inside;
}
</style>
