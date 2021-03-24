<template>
  <div class="container p-0 flex-col">
    <div class="w-screen flex-auto h-full">
      <!--  <img
        class="hidden md:block w-screen"
        src="/img/writing_aaronBurden.webp"
        alt="writing with a fountain pen"
        srcset="
          /img/writing_aaronBurden_lg.webp 1024w,
          /img/writing_aaronBurden_md.webp  640w,
          /img/writing_aaronBurden_sm.webp  320w
        "
      >
      <div
        class="absolute text-2xl m-auto text-center hidden md:block"
        style="top:32%; left:42%;"
      >
        <a href="#actualite" class="text-gris_clair bg-gris bg-opacity-50 rounded p-2">
          <fas icon="chevron-circle-down" aria-hidden="true" />
          Actualités
        </a>
      </div>
 -->
      <h1 class="md:text-6xl mb-6 mt-12 text-vert_sombre text-center">
        Semaphore
      </h1>
      <hr class="text-vert_sombre my-4 border-2 opacity-25">
      <div
        class="grid grid-cols-2 gap-y-8 md:grid-cols-4 mx-2 md:mx-8 mb-4 gap-x-8"
      >
        <nuxt-link class="hover:opacity-75" to="/formation">
          <img
            src="img/undraw/undraw_knowledge_g5gf.min.svg"
            alt=""
            sizes=""
            srcset=""
          >
          <p class="md:text-xl text-vert_sombre font-bold font-serif">
            Formation - conférence
          </p>
        </nuxt-link>
        <nuxt-link class="hover:opacity-75" to="/entreprises">
          <img
            src="img/undraw/undraw_hire_te5y.min.svg"
            alt=""
            sizes=""
            srcset=""
          >
          <p class="md:text-xl text-vert_sombre font-bold font-serif">
            Services aux entreprises
          </p>
        </nuxt-link>
        <nuxt-link class="hover:opacity-75" to="/orientation">
          <img
            src="img/undraw/undraw_light_the_fire_gt58.min.svg"
            alt=""
            sizes=""
            srcset=""
          >
          <p class="md:text-xl text-vert_sombre font-bold font-serif">
            (Ré)orientation
          </p>
        </nuxt-link>
        <nuxt-link class="hover:opacity-75" to="/consultation">
          <img
            src="img/undraw/undraw_options_2fvi.min.svg"
            alt=""
            sizes=""
            srcset=""
          >
          <p class="md:text-xl text-vert_sombre font-bold font-serif">
            Consultation
          </p>
        </nuxt-link>
      </div>

      <hr class="text-violet mt-8 border-2 opacity-75">

      <h2 id="actualite" class="text-center text-violet">
        Actualités
      </h2>
      <div
        class="mb-0 flex flex-col md:flex-row md:flex-wrap justify-evenly items-center md:items-start md:m-8  px-4"
      >
        <v-card v-for="New of news.slice(0, 5)" :key="New.slug" class="my-3">
          <NuxtLink :to="New.slug" class="text-vert_sombre">
            <v-card-text>
              <div class="text-violet font-bold font-serif">
                {{ New.title }}
              </div>
              <span class="display-1 text-violet text-indent">
                {{ New.date }}
              </span>
              <div class="text--primary font-sans md:max-w-sm">
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
      <div class="mb-6">
        <nuxt-link to="/actualite" class="text-violet bg-bleu p-2 rounded-lg mb-4">
          Archives des actualités
        </nuxt-link>
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
