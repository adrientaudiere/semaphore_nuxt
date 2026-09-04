<script setup>
const isHidden = ref(true)
</script>

<template>
  <nav class="nav sm:w-screen">
    <div class="flex flex-row justify-between">
      <div
        v-if="isHidden"
        id="nav-toogle"
        class="md:hidden bg-white fixed z-50"
        @click="isHidden = false"
      >
        <img
          id="mobile_menu"
          src="/img/trois_tirets.svg"
          alt="menu icon"
          class="h-8 m-2"
        >
      </div>
      <div
        v-if="!isHidden"
        id="nav-content"
        class="bg-gris w-screen z-50 fixed"
      >
        <img
          src="/img/croix.svg"
          alt="menu icon"
          class="h-6 m-2"
          @click="isHidden = true"
        >
        <NuxtLink to="/" class="block">
          <Icon name="fa-solid:university" class="nav-icon" aria-hidden="true" />
          Semaphore
        </NuxtLink>
        <NuxtLink to="/apropos" class="block">
          <Icon name="fa-solid:id-card" class="nav-icon" aria-hidden="true" />
          Qui suis-je
        </NuxtLink>
        <NuxtLink to="/formation" class="block">
          <Icon name="fa-solid:chalkboard-teacher" class="nav-icon" aria-hidden="true" />
          Formation et conférences
        </NuxtLink>
        <NuxtLink to="/pitcheravecimpact" class="block">
          <Icon name="fa-solid:briefcase" class="nav-icon" aria-hidden="true" />
          Pitcher avec impact
        </NuxtLink>
        <NuxtLink to="/orientation" class="block">
          <Icon name="fa-solid:street-view" class="nav-icon" aria-hidden="true" />
          Ré(orientation)
        </NuxtLink>
        <NuxtLink to="/consultation" class="block">
          <Icon name="fa-solid:users" class="nav-icon" aria-hidden="true" />
          Consultations
        </NuxtLink>
        <NuxtLink to="/#actualite">
          <Icon name="fa-solid:calendar-alt" class="nav-icon" aria-hidden="true" />
          Actualités
        </NuxtLink>
      </div>
    </div>

    <div id="menu" class="hidden md:flex fixed bg-gris w-screen z-50">
      <NuxtLink to="/" class="flex-auto">
        <Icon name="fa-solid:university" class="nav-icon" aria-hidden="true" />
        Semaphore
      </NuxtLink>
      <NuxtLink to="/apropos" class="flex-auto">
        <Icon name="fa-solid:id-card" class="nav-icon" aria-hidden="true" />
        Qui suis-je
      </NuxtLink>
      <NuxtLink to="/formation" class="flex-auto">
        <Icon name="fa-solid:chalkboard-teacher" class="nav-icon" aria-hidden="true" />
        Formation et conférences
      </NuxtLink>
      <NuxtLink to="/pitcheravecimpact" class="flex-auto">
        <Icon name="fa-solid:briefcase" class="nav-icon" aria-hidden="true" />
        Pitcher avec impact
      </NuxtLink>
      <NuxtLink to="/orientation" class="flex-auto">
        <Icon name="fa-solid:street-view" class="nav-icon" aria-hidden="true" />
        Bilans d'orientation / de compétences
      </NuxtLink>
      <NuxtLink to="/consultation" class="flex-auto">
        <Icon name="fa-solid:users" class="nav-icon" aria-hidden="true" />
        Consultations
      </NuxtLink>
      <NuxtLink to="/#actualite">
        <Icon name="fa-solid:calendar-alt" class="nav-icon" aria-hidden="true" />
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
/* Repris du site actuel. Seul changement : la classe de lien actif de Vue Router
   s'appelle router-link-active depuis Nuxt 3 (contre nuxt-link-active en Nuxt 2). */
#menu {
  padding: 8px;
}

a {
  margin-right: 10px;
  font-size: 16px;
  @apply text-bleu;
  text-decoration: none;
  padding-top: 2px;
  padding-bottom: 2px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: color 0.25s;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border-left: solid 2px rgba(236, 236, 236, 0.174);
}

a:hover {
  color: white;
  @apply bg-vert_sombre;
}

a.router-link-active {
  color: rgb(236, 236, 236);
  border-bottom: 5px solid;
  border-top: 0;
  @apply border-vert;
  font-weight: 600;
}

@media (max-width: 1150px) {
  a {
    font-size: 18px;
  }
}

@media (max-width: 950px) {
  a {
    font-size: 16px;
  }
}

@media (max-width: 800px) {
  a {
    border-left-color: transparent;
    margin-bottom: 8px;
  }
}

.nav-icon {
  @apply mx-4;
  @apply align-middle;
}
</style>
