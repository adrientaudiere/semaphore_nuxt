<template>
  <footer>
    <div class="w-screen bg-bleu  justify-around py-2 text-base">
      <ul class="flex justify-around ">
        <li>
          <a href="mailto:semaphore@mailo.com">
            <fas icon="envelope-square" aria-hidden="true" class="text-3xl" />
            <span class="hidden md:inline">semaphore@mailo.com</span>
          </a>
        </li>
        <li>
          <a
            href="https://osm.org/go/eq2rZGS?m=&node=1618128435"
            target="_blank"
            rel="noreferrer"
          >
            <fas icon="map-marked-alt" aria-hidden="true" class="text-3xl" />
            <span
              class="hidden md:inline"
            >1 avenue des Coudriers - 44120 VERTOU</span>
          </a>
        </li>
        <li>
          <a href="tel:0662643739">
            <fas icon="phone-square" aria-hidden="true" class="text-3xl" />
            <span class="hidden md:inline">06 62 64 37 39 </span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/laurence-crespel-taudiere/">
            <fas
              :icon="['fab', 'linkedin']"
              aria-hidden="true"
              class="text-3xl"
            />
          </a>
        </li>
        <li>
          <nuxt-link to="/#actualite">
            <fas icon="calendar-alt" aria-hidden="true" class="text-3xl" />
          </nuxt-link>
        </li>
        <li>
          <span class="hidden md:inline text-base align-bottom">
            <a href="https://adrientaudiere.com">
              <fas icon="tools" />
              Conception: IdEst
            </a>
          </span>
          <span class="md:hidden mr-4">
            <a href="https://adrientaudiere.com">
              <fas
                icon="tools"
                class="align-middle text-base"
              /></a>
          </span>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>

li {
  list-style: none;
  display: inline-block;
}
.svg-inline--fa {
  @apply text-violet;
  @apply mx-4;
  @apply align-middle;
}
div {
  @apply text-violet;
  align-items: center;
}
a {
  @apply text-violet;
  @apply border-b-0;
}
a:hover {
  opacity: 50%;
}
</style>
