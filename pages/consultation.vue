<template>
  <div class="container p-0 flex-col">
    <div class="w-screen h-full ">
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
    const page = await $content('consultation').fetch()
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
  padding-top: 0px;
  text-indent: 0%;
}
</style>
