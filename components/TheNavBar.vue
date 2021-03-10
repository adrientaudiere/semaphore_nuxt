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
          <i class="fa fa-university" aria-hidden="true" /> Semaphore
        </nuxt-link>
        <nuxt-link to="/apropos" class="block">
          <i class="fa fa-id-card-o" aria-hidden="true" /> Qui suis-je
        </nuxt-link>
        <nuxt-link to="/formation" class="block">
          <i class="fa fa-graduation-cap" aria-hidden="true" /> Formation et
          conférences
        </nuxt-link>
        <nuxt-link to="/entreprises" class="block">
          <i class="fa fa-suitcase" aria-hidden="true" /> Services aux
          entreprises
        </nuxt-link>
        <nuxt-link to="/consultation" class="block">
          <i class="fa fa-street-view" aria-hidden="true" /> (Ré)orientation
          et consultations
        </nuxt-link>
      </div>
    </div>

    <div id="menu" class="hidden md:flex fixed bg-gris text-cyan w-screen">
      <nuxt-link to="/" exact class="flex-auto">
        <i class="fa fa-university" aria-hidden="true" /> Semaphore
      </nuxt-link>
      <nuxt-link to="/apropos" class="flex-auto">
        <i class="fa fa-id-card-o" aria-hidden="true" /> Qui suis-je
      </nuxt-link>
      <nuxt-link to="/formation" class="flex-auto">
        <i class="fa fa-graduation-cap" aria-hidden="true" /> Formation et
        conférences
      </nuxt-link>
      <nuxt-link to="/entreprises" class="flex-auto">
        <i class="fa fa-suitcase" aria-hidden="true" /> Services aux
        entreprises
      </nuxt-link>
      <nuxt-link to="/consultation" class="flex-auto">
        <i class="fa fa-street-view" aria-hidden="true" /> (Ré)orientation et
        consultations
      </nuxt-link>
      <nuxt-link to="/#actualite">
        <i class="fa fa-calendar" aria-hidden="true" />
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
a {
  margin-right: 20px;
  font-size: 14px;
  @apply text-bleu;
  text-decoration: none;
  text-transform: uppercase;
  padding-top: 2px;
  padding-bottom: 2px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: color 0.25s;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}
a:hover {
  @apply text-gris_clair;
}
a.nuxt-link-active {
  color: rgb(236, 236, 236);
  border-bottom: 5px solid;
  border-top: 0;
  @apply border-vert;
  font-weight: 600;
}
</style>
