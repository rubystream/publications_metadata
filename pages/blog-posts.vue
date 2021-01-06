<template>
  <section>
    <article>
      <h1>Blog Posts</h1>
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <h2>{{ article.title }}</h2>
          </NuxtLink>
          <p>by {{ article.author.name }}</p>
          <p>Post last updated: {{ article.updatedAt }}</p>
          <p>{{ article.description }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug', 'author', 'updatedAt'])
      .sortBy('createAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>

<style></style>
