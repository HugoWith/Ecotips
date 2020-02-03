<template>
  <div class="navbar">
    <nav class="nav-extended teal accent-3">
      <div class="nav-content">
        <router-link :to="{ name: 'Index' }">
          <span class="nav-title">Comment faire plus 🌱 ?</span>
        </router-link>
        <a href class="btn-floating btn-large halfway-fab green accent-1">
          <router-link :to="{ name: 'AddAnimation' }">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
.navbar nav {
  padding-left: 20px;
}
</style>
