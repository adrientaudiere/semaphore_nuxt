<template>
  <div class="container p-0">
    <TheNavBar />
    <div class="w-screen">
      <img
        class="w-screen"
        src="/img/writing_aaronBurden.jpg"
        alt="writing with a fountain pen"
      >
      <h1 class="title md:text-6x1">
        Semaphore
      </h1>
      <div class="flex flex-col md:flex-row justify-evenly items-center md:items-start">
        <div class="w-10/12 md:w-1/3">
          <h2>Actualités</h2>
          <v-card
            v-for="New of news.slice(0, 5)"
            :key="New.slug"
            class="mx-auto my-3"
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
              <v-btn class=" m-auto">
                <NuxtLink :to="New.slug" class="text-orange">
                  Plus d'info
                </NuxtLink>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="w-10/12 md:w-1/3">
          <h2>
            Articles de blog
          </h2>
          <li v-for="post of posts.slice(0, 5)" :key="post.slug">
            <NuxtLink :to="post.slug">
              {{ post.title }}
            </NuxtLink>
          </li>
        </div>
      </div>
      <div>ieu</div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('blog').fetch()
    const news = await $content('actu').fetch()
    return {
      posts,
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
