<script setup>
const { data: page } = await useAsyncData('page-pitcheravecimpact', () =>
  queryCollection('pages').path('/pitcheravecimpact').first()
)

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Page non trouvée', fatal: true })
}

useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description
})
</script>

<template>
  <div class="page-shell flex-col">
    <div class="w-screen h-full">
      <div class="prose-semaphore my-12 text-left px-4 max-w-sm md:max-w-2xl m-auto">
        <h1>{{ page.title }}</h1>
        <NuxtImg
          src="/img/nuage_activitees.png"
          alt="Secteurs public et privé dans lesquels Sémaphore intervient : bâtiment et travaux publics, grande distribution, chimie et parachimie, établissements d'enseignement supérieur, industries du bois, presse, humanitaire, transport et logistique, administrations, agroalimentaire, textile, habillement et chaussure, commerce, distribution et négoce, collectivités locales et territoriales."
          sizes="sm:100vw md:280px"
          format="webp"
          loading="lazy"
          decoding="async"
          class="float-right ml-4 mt-4 mb-4 w-full md:w-5/12 rounded-md bg-violet p-4 bg-opacity-50"
        />
        <ContentRenderer :value="page" />
      </div>
    </div>
  </div>
</template>
