<template>
  <div class="container p-0 flex-col">
    <div class="w-screen h-full">
      <div class="my-12 text-left px-4 max-w-sm md:max-w-2xl m-auto">
        <h1>{{ page.title }}</h1>
        <img src="img/nuage_activitees.png" alt="nuage d'activité" class="float-right ml-4 mt-4 mb-4 w-full md:w-5/12 rounded-md bg-violet p-4 bg-opacity-50">
        {{ page.description }}
        <nuxt-content :document="page" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content('pitcheravecimpact').fetch()
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

li {
    list-style: circle inside;
}
</style>
