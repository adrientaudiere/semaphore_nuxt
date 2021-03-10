<template>
  <div class="container p-0 flex-col">
    <div class="w-screen flex-auto h-full">
      <img
        class="w-screen"
        src="/img/writing_aaronBurden.jpg"
        alt="writing with a fountain pen"
      >
      <h1 class="title md:text-4x1">
        Semaphore
      </h1>

      <div class="flex mx-2 md:mx-8">
        <nuxt-link class="w-5/12" to="/consultation">
          <img src="img/undraw/undraw_hire_te5y.min.svg" alt="" sizes="" srcset="">
        </nuxt-link>
        <img src="img/undraw/undraw_knowledge_g5gf.min.svg" alt="" sizes="" srcset="" class="w-5/12">
        <img src="img/undraw/undraw_light_the_fire_gt58.min.svg" alt="" sizes="" srcset="" class="w-5/12">
        <img src="img/undraw/undraw_options_2fvi.min.svg" alt="" sizes="" srcset="" class="w-5/12">
      </div>
      <h2 id="actualite">
        Actualités
      </h2>
      <div
        class="flex z-0 flex-col md:flex-row md:flex-wrap justify-evenly items-center md:items-start md:m-8"
      >
        <v-card
          v-for="New of news.slice(0, 5)"
          :key="New.slug"
          class="my-3"
        >
          <v-card-text>
            <div>{{ New.title }}</div>
            <p class="display-1 text-vert">
              {{ New.date }}
            </p>
            <div class="text--primary">
              {{ New.description }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn class="m-auto">
              <NuxtLink :to="New.slug" class="text-orange">
                Plus d'info
              </NuxtLink>
            </v-btn>
          </v-card-actions>
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
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
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

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 800;
  color: #35495e;
}

@media (min-width: 860px) {
  .title {
    font-size: 8em;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
