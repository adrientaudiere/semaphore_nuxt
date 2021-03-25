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
        class="bg-gris  w-screen z-50 fixed"
      >
        <img
          src="/img/croix.svg"
          alt="menu icon"
          class="h-6 m-2"
          @click="isHidden = true"
        >
        <nuxt-link to="/" exact class="block">
          <fas icon="university" aria-hidden="true" />
          Semaphore
        </nuxt-link>
        <nuxt-link to="/apropos" class="block">
          <fas icon="id-card" aria-hidden="true" />
          Qui suis-je
        </nuxt-link>
        <nuxt-link to="/formation" class="block">
          <fas icon="chalkboard-teacher" aria-hidden="true" />
          Formation et conférences
        </nuxt-link>
        <nuxt-link to="/entreprises" class="block">
          <fas icon="briefcase" aria-hidden="true" />
          Entreprises
        </nuxt-link>
        <nuxt-link to="/orientation" class="block">
          <fas icon="street-view" aria-hidden="true" />
          Ré(orientation)
        </nuxt-link>
        <nuxt-link to="/consultation" class="block">
          <fas icon="users" aria-hidden="true" />
          Consultations
        </nuxt-link>
        <nuxt-link to="/#actualite">
          <fas icon="calendar-alt" aria-hidden="true" />
          Actualités
        </nuxt-link>
      </div>
    </div>

    <div id="menu" class="hidden md:flex fixed bg-gris text-cyan w-screen z-50">
      <nuxt-link to="/" exact class="flex-auto">
        <fas icon="university" aria-hidden="true" />
        Semaphore
      </nuxt-link>
      <nuxt-link to="/apropos" class="flex-auto">
        <fas icon="id-card" aria-hidden="true" />
        Qui suis-je
      </nuxt-link>
      <nuxt-link to="/formation" class="flex-auto">
        <fas icon="chalkboard-teacher" aria-hidden="true" />
        Formation et conférences
      </nuxt-link>
      <nuxt-link to="/entreprises" class="flex-auto">
        <fas icon="briefcase" aria-hidden="true" />
        Entreprises
      </nuxt-link>
      <nuxt-link to="/orientation" class="flex-auto">
        <fas icon="street-view" aria-hidden="true" />
        Bilans d'orientation / de compétences
      </nuxt-link>
      <nuxt-link to="/consultation" class="flex-auto">
        <fas icon="users" aria-hidden="true" />
        Consultations
      </nuxt-link>
      <nuxt-link to="/#actualite">
        <fas icon="calendar-alt" aria-hidden="true" />
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isHidden: true
    }
  }
}
</script>

<style scoped>
#menu {
  padding: 8px;
}
a {
  margin-right: 10px;
  font-size: 18px;
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
  @apply bg-vert_sombre
}
a.nuxt-link-active {
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
    border-left-color: transparent ;
    margin-bottom: 8px;
  }
}
.svg-inline--fa {
  @apply mx-4;
  @apply align-middle;
}
</style>
