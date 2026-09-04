<script setup>
// Gabarit de titre : on n'ajoute le suffixe que si le titre de la page
// ne contient pas deja "Semaphore". Evite "A propos de Semaphore — Semaphore".
useHead({
  titleTemplate: (title) => {
    if (!title) {
      return 'Sémaphore — graphologue et morphopsychologue à Vertou'
    }
    return /s[ée]maphore/i.test(title) ? title : `${title} — Sémaphore`
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
