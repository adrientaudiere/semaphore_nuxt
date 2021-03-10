<template>
  <div class="container p-0 flex-col">
    <div class="w-screen h-full">
      <div class="mx-4 md:mx-24 my-12 text-justify max-w-prose">
        <h1>{{ page.title }}</h1>
        <h3 class="text-2xl font-bold">
          {{ page.description }}
        </h3>
        <nuxt-content :document="page" />
      </div>
    </div>
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

<style>
p {
  padding-top: 14px;
}
</style>
