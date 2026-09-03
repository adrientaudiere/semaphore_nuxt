<template>
  <div class="container p-0 flex-col">
    <div class="w-screen flex-auto h-full">
      <h1 id="actualite" class="text-center text-violet mt-16">
        Toutes les Actualités
      </h1>
      <div
        class="flex flex-col md:flex-row md:flex-wrap justify-evenly items-center md:items-start md:m-8  px-4"
      >
        <div
          v-for="New of news"
          :key="New.slug"
          class="my-3 w-full max-w-md bg-white rounded shadow-md overflow-hidden"
        >
          <NuxtLink :to="New.slug" class="block p-4 text-vert_sombre">
            <div class="text-violet font-bold font-serif">
              {{ New.title }}
            </div>
            <p class="text-3xl text-violet">
              {{ New.date }}
            </p>
            <div class="text-gris font-sans text-sm">
              {{ New.description }}
            </div>
            <div class="flex justify-center pt-2">
              <span
                class="bg-gris_clair bg-opacity-25 text-gris text-sm font-medium uppercase tracking-wide rounded px-4 py-2"
              >
                Plus d'info
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const news = await $content('actu').fetch()
    return {
      news
    }
  },
  head () {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          rel: 'preconnect'
        }
      ]
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: max-content;
}
.links {
  padding-top: 15px;
}
</style>
