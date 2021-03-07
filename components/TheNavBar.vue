<template>
  <nav class="nav sm:w-screen ">
    <div class="flex flex-row justify-between">
      <div
        v-if="isHidden"
        id="nav-toogle"
        class="md:hidden bg-transparent fixed"
        @click="isHidden = false"
      >
        <img
          id="mobile_menu"
          src="/img/trois_tirets.svg"
          alt="menu icon"
          class="h-8 m-2"
        >
      </div>
      <div v-if="!isHidden" id="nav-content" class="bg-gris  w-screen">
        <img
          src="/img/croix.svg"
          alt="menu icon"
          class="h-6 m-2"
          @click="isHidden = true"
        >
        <nuxt-link to="/" exact class="block">
          Semaphore
        </nuxt-link>
        <nuxt-link to="/qui-suis-je" class="block">
          Qui suis-je
        </nuxt-link>
        <nuxt-link to="/aieu" class="block">
          Formation et conférences
        </nuxt-link>
        <nuxt-link to="/auiea" class="block">
          Services aux entreprises
        </nuxt-link>
        <nuxt-link to="/eauieauiauie" class="block">
          (Ré)orientation et consultations
        </nuxt-link>
        <nuxt-link to="/about" class="block">
          Contact
        </nuxt-link>
      </div>
    </div>

    <div id="menu" class="hidden md:flex fixed bg-gris text-cyan w-screen">
      <nuxt-link to="/" exact class="flex-auto">
        Semaphore
      </nuxt-link>
      <nuxt-link to="/qui-suis-je" class="flex-auto">
        Qui suis-je
      </nuxt-link>
      <nuxt-link to="/" class="flex-auto">
        Formation et conférences
      </nuxt-link>
      <nuxt-link to="/" class="flex-auto">
        Services aux entreprises
      </nuxt-link>
      <nuxt-link to="/" class="flex-auto">
        (Ré)orientation et consultations
      </nuxt-link>
      <nuxt-link to="/about" class="flex-auto">
        Contact
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
  color: #999;
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
  color: rgb(236, 236, 236);
}
a.nuxt-link-active {
  color: rgb(236, 236, 236);
  border-top: 1px solid rgb(236, 236, 236) 3;
  border-bottom: 1px solid rgb(236, 236, 236);
  font-weight: 600;
}
</style>
