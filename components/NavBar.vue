<template>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="true" sticky>
    <b-navbar-brand to="/">
      <b-img src="../static/icon.png" rounded width="30px" alt="logo" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/blog">Blog</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item right to="/">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { BNavbar, BNavItem, BCollapse, BImg } from 'bootstrap-vue'

export default {
  name: 'Navbar',
  components: {
    BNavbar,
    BNavItem,
    BCollapse,
    BImg,
  },
}
</script>

<style></style>
