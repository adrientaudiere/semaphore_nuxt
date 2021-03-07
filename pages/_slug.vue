<template>
  <div>
    <h2>{{ actu.title }}</h2>
    <nuxt-content :document="actu" />
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
