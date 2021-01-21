<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Semaphore
      </h1>

      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div class="grid grid-cols-2">
        <div class="bg-gris_clair m-8 p-2 rounded-lg">
          <h2>Actualités</h2>
          <li v-for="New of news.slice(0, 5)" :key="New.slug">
            <NuxtLink :to="New.slug">
              {{ New.title }}
            </NuxtLink>
          </li>
        </div>
        <div class="bg-gris_clair m-8 p-2 rounded-lg">
          <h2 class="text-vert">
            Articles de blog
          </h2>
          <li v-for="post of posts.slice(0, 5)" :key="post.slug">
            <NuxtLink :to="post.slug">
              {{ post.title }}
            </NuxtLink>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('blog').fetch()
    const news = await $content('actualites').fetch()
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
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
