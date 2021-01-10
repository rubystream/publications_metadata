<template>
  <footer class="footer">
    <div class="container">
      <p class="text-muted">
        <span>{{ company }} </span><span>&copy; {{ year }}</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: '2021',
      company: 'OMA',
    }
  },
}
</script>

<style>
.footer {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
  background: #b2f1c1;
  height: 60px;
  padding-top: 10px;
}
</style>
