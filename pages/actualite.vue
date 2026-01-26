<template>
  <div class="container p-0 flex-col">
    <div class="w-screen flex-auto h-full">
      <h1 id="actualite" class="text-center text-violet mt-16">
        Toutes les Actualités
      </h1>
      <div
        class="flex flex-col md:flex-row md:flex-wrap justify-evenly items-center md:items-start md:m-8  px-4"
      >
        <v-card v-for="New of news" :key="New.slug" class="my-3 md:max-w-md"">
          <NuxtLink :to="New.slug" class="text-vert_sombre">
            <v-card-text>
              <div class="text-violet font-bold font-serif">
                {{ New.title }}
              </div>
              <p class="display-1 text-violet">
                {{ New.date }}
              </p>
              <div class="text--primary font-sans md:max-w-md">
                {{ New.description }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn class="m-auto">
                Plus d'info
              </v-btn>
            </v-card-actions>
          </NuxtLink>
        </v-card>
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
.vcard {
 max-width: 400px !important;
}
</style>
