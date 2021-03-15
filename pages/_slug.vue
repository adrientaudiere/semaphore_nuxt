<template>
  <div class="container p-0 flex-col">
    <div class="w-screen h-full ">
      <div class="my-12 text-justify px-4 max-w-sm md:max-w-2xl m-auto">
        <h2>{{ actu.title }}</h2>
        <nuxt-content :document="actu" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    let actu
    try {
      actu = await $content('actu', params.slug).fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: 'Actualité non trouvée' })
    }
    return {
      actu
    }
  }
}
</script>
