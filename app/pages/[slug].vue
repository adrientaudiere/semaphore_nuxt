<script setup>
const route = useRoute()

const { data: actu } = await useAsyncData(`actu-${route.params.slug}`, () =>
  queryCollection('actu').path(`/actu/${route.params.slug}`).first()
)

if (!actu.value) {
  throw createError({ statusCode: 404, message: 'Actualité non trouvée', fatal: true })
}

useSeoMeta({
  title: () => actu.value?.title,
  description: () => actu.value?.description
})
</script>

<template>
  <div class="page-shell flex-col">
    <div class="w-screen h-full">
      <div class="prose-semaphore my-12 text-left px-4 max-w-sm md:max-w-2xl m-auto">
        <h1 class="text-3xl">{{ actu.title }}</h1>
        <p class="text-gris italic">
          Date : {{ actu.date }}
        </p>
        <ContentRenderer :value="actu" />
      </div>
    </div>
  </div>
</template>
