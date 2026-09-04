<script setup>
const route = useRoute()

// L'accueil a sa propre composition pleine largeur : pas de motif dans ses marges.
const avecMotif = computed(() => route.path !== '/')
</script>

<template>
  <div class="site-shell">
    <WagaraFond v-if="avecMotif" />
    <div class="site-main">
      <TheNavBar />
      <slot />
    </div>
    <TheFooter />
    <WagaraSelecteur v-if="avecMotif" />
  </div>
</template>
