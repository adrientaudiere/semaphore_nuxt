<template>
  <footer>
    <div class="w-screen bg-bleu flex justify-around py-2 text-sm">
      <li>
        <a href="mailto:laurence.crespel1@gmail.com">
          <i class="fa fa-envelope-square align-middle" aria-hidden="true" />
        </a>
        <span class="hidden md:inline">laurence.crespel1@gmail.com</span>
      </li>
      <li>
        <a href="https://osm.org/go/eq2rZGS?m=&node=1618128435">
          <i class="fa fa-map-marker align-middle" aria-hidden="true" /> </a><span
          class="hidden md:inline"
        >1 avenue des Coudriers - 44120 VERTOU</span>
      </li>
      <li>
        <a href="tel:0662643739">
          <i class="fa fa-phone align-middle" aria-hidden="true" /> </a><span class="hidden md:inline">06 62 64 37 39 </span>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/laurence-crespel-taudiere/">
          <i class="fa fa-linkedin-square" /></a>
      </li>
      <li>
        <nuxt-link to="/#actualite">
          <i class="fa fa-calendar" aria-hidden="true" />
        </nuxt-link>
      </li>
      <li>
        <p class="hidden md:inline text-sm align-middle">
          Conception <a href="https://adrientaudiere.com">IdEst</a>
        </p>
      </li>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
li {
  list-style: none;
}
i {
  @apply text-4xl;
  @apply text-violet;
  @apply mx-4;
}
div {
  @apply text-violet;
  align-items: center;
}
a {
  @apply text-orange;
}
</style>
