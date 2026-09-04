<template>
  <footer>
    <div class="w-screen bg-bleu justify-around py-2 text-base">
      <ul class="flex justify-around">
        <li>
          <a href="mailto:semaphore@mailo.com">
            <Icon name="fa-solid:envelope-square" class="foot-icon text-3xl" aria-hidden="true" />
            <span class="sr-only md:not-sr-only">semaphore@mailo.com</span>
          </a>
        </li>
        <li>
          <a
            href="https://osm.org/go/eq2rZGS?m=&node=1618128435"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="fa-solid:map-marked-alt" class="foot-icon text-3xl" aria-hidden="true" />
            <span class="sr-only md:not-sr-only">1 avenue des Coudriers - 44120 VERTOU</span>
          </a>
        </li>
        <li>
          <a href="tel:0662643739">
            <Icon name="fa-solid:phone-square" class="foot-icon text-3xl" aria-hidden="true" />
            <span class="sr-only md:not-sr-only">06 62 64 37 39</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/laurence-crespel-taudiere/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="fa-brands:linkedin" class="foot-icon text-3xl" aria-hidden="true" />
            <span class="sr-only">Profil LinkedIn de Laurence Crespel</span>
          </a>
        </li>
        <li>
          <NuxtLink to="/#actualite">
            <Icon name="fa-solid:calendar-alt" class="foot-icon text-3xl" aria-hidden="true" />
            <span class="sr-only">Actualités</span>
          </NuxtLink>
        </li>
        <li>
          <a href="https://adrientaudiere.com" target="_blank" rel="noopener noreferrer">
            <Icon name="fa-solid:tools" class="foot-icon align-middle" aria-hidden="true" />
            <span class="sr-only md:not-sr-only md:text-base md:align-bottom">Conception: IdEst</span>
          </a>
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
