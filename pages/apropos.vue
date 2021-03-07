<template>
  <div>
    <h1>{{ page.title }}</h1>
    <h3 class="text-4xl">{{ page.description }} </h3>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content('apropos').fetch()
    return {
      page
    }
  }
}
</script>
