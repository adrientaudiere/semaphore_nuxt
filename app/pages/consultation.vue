<script setup>
const { data: page } = await useAsyncData('page-consultation', () =>
  queryCollection('pages').path('/consultation').first()
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
  <div class="container p-0 flex-col">
    <div class="w-screen h-full">
      <div class="my-12 text-left px-4 max-w-sm md:max-w-2xl m-auto">
        <h1>{{ page.title }}</h1>
        <ContentRenderer :value="page" />
      </div>
    </div>
  </div>
</template>

<style>
p {
  padding-top: 14px;
}

li {
  list-style: circle inside;
}

blockquote {
  font: 14px/22px normal helvetica, sans-serif;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 5px solid;
  @apply border-violet;
  @apply border-opacity-75;
}

blockquote p {
  padding-top: 8px;
}
</style>
