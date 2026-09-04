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
  <div class="container p-0 flex-col">
    <div class="w-screen h-full">
      <div class="my-12 text-left px-4 max-w-sm md:max-w-2xl m-auto">
        <h2>{{ actu.title }}</h2>
        <p class="text-gris italic">
          Date : {{ actu.date }}
        </p>
        <ContentRenderer :value="actu" />
      </div>
    </div>
  </div>
</template>

<style scoped>
footer {
  position: absolute;
  bottom: 0%;
}
</style>
