<template>
  <b-container>
    <b-jumbotron
      header="OMA Publication Metadata"
      lead="Blog elevating knowledge about OMA publications"
      class="mt-5"
    >
      <hr class="my-4" />
      <b-media>
        <template #aside>
          <Logo class="home-page-logo" />
        </template>
        <p>
          Satisfy your curiosity by navigating trough available blog sections.
        </p>
        <p>
          To start your journey navigate trough latest posts or find out more in
          About page.
        </p>
      </b-media>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {}
</script>

<style>
.home-page-logo {
  width: 15rem;
}

@media (max-width: 767px) {
  .home-page-logo {
    width: 7rem;
  }
}
</style>
