<template>
  <section class="container blog-article">
    <h1 class="display-2 text-center mt-5 mb-3">{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <p>Last updated: {{ article.updatedAt }}</p>
    <aside class="float-right w-25 px-3">
      <p class="mb-0">On this page:</p>
      <hr class="mt-0 bg-info" />
      <nav>
        <nuxt-link
          v-for="link of article.toc"
          :key="link.id"
          :to="'#' + link.id"
          class="border-0"
        >
          {{ link.text }}
        </nuxt-link>
      </nav>
    </aside>
    <article class="w-75 blog-body">
      <nuxt-content :document="article" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
}
</script>

<style>
.blog-article {
  height: 100vh;
}

.blog-body {
  overflow: auto;
}
</style>
