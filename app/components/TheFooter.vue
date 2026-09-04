<template>
  <footer>
    <div class="w-screen bg-bleu justify-around py-2 text-base">
      <ul class="flex justify-around">
        <li>
          <a href="mailto:semaphore@mailo.com">
            <Icon name="fa-solid:envelope-square" class="foot-icon text-3xl" aria-hidden="true" />
            <span class="hidden md:inline">semaphore@mailo.com</span>
          </a>
        </li>
        <li>
          <a
            href="https://osm.org/go/eq2rZGS?m=&node=1618128435"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="fa-solid:map-marked-alt" class="foot-icon text-3xl" aria-hidden="true" />
            <span class="hidden md:inline">1 avenue des Coudriers - 44120 VERTOU</span>
          </a>
        </li>
        <li>
          <a href="tel:0662643739">
            <Icon name="fa-solid:phone-square" class="foot-icon text-3xl" aria-hidden="true" />
            <span class="hidden md:inline">06 62 64 37 39 </span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/laurence-crespel-taudiere/">
            <Icon name="fa-brands:linkedin" class="foot-icon text-3xl" aria-hidden="true" />
          </a>
        </li>
        <li>
          <NuxtLink to="/#actualite">
            <Icon name="fa-solid:calendar-alt" class="foot-icon text-3xl" aria-hidden="true" />
          </NuxtLink>
        </li>
        <li>
          <span class="hidden md:inline text-base align-bottom">
            <a href="https://adrientaudiere.com">
              <Icon name="fa-solid:tools" class="foot-icon" />
              Conception: IdEst
            </a>
          </span>
          <span class="md:hidden mr-4">
            <a href="https://adrientaudiere.com">
              <Icon name="fa-solid:tools" class="foot-icon align-middle text-base" />
            </a>
          </span>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
li {
  list-style: none;
  display: inline-block;
}

.foot-icon {
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
  color: rgb(124, 9, 124);
}
</style>
