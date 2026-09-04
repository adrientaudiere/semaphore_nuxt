<script setup>
/*
  Surcharge du rendu des images du markdown.

  @nuxt/content passe par ce composant pour chaque `![alt](/img/...)`. En le
  redefinissant, toutes les images du contenu passent par <NuxtImg>, donc par
  le redimensionnement et la conversion WebP au build, sans que Laurence ait
  quoi que ce soit a changer dans sa facon d'ecrire les pages.

  Les attributs MDC surchargent les valeurs par defaut, par exemple :
      ![Une photo](/img/photo.jpg){.float-right sizes="sm:50vw md:220px"}
*/
const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  width: { type: [String, Number], default: undefined },
  height: { type: [String, Number], default: undefined },
  // Largeur d'affichage reelle : le conteneur de contenu plafonne a 672 px.
  sizes: { type: String, default: 'sm:100vw md:672px' }
})

// Un SVG est deja vectoriel : le redimensionner n'apporte rien et le degrade.
const estVectoriel = computed(() => props.src.toLowerCase().endsWith('.svg'))
</script>

<template>
  <img
    v-if="estVectoriel"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    loading="lazy"
    decoding="async"
  >
  <NuxtImg
    v-else
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :sizes="sizes"
    format="webp"
    loading="lazy"
    decoding="async"
  />
</template>
