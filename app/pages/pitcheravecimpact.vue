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
        <ContentRenderer :value="page" />
      </div>
    </div>
  </div>
</template>
