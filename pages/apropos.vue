<template>
  <div class="container p-0 flex-col">
    <div class="w-screen h-full">
      <div class="my-12 text-justify px-4 max-w-sm md:max-w-2xl m-auto">
        <h1>{{ page.title }}</h1>
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
