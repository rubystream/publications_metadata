<template>
  <section>
    <article>
      <h1 class="text-center mt-5 mb-3"><b-icon-card-list /> Blog Posts</h1>
      <section class="container">
        <b-row cols="3">
          <b-card v-for="article of articles" :key="article.slug">
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >
              <h2>{{ article.title }}</h2>
            </NuxtLink>
            <p class="m-0 p-0 text-muted">by {{ article.author.name }}</p>
            <p class="font-weight-light text-muted">
              last updated: {{ article.updatedAt }}
            </p>
            <p>{{ article.description }}</p>
          </b-card>
        </b-row>
      </section>
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
