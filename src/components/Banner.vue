<template>
  <div
    class="banner"
    style="background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);"
  >
    <div class="container">
      <h1>
        De petits <strong>tips</strong> pour <strong>une vie plus ☀️</strong>!
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {};
  }
};
</script>

<style>
.banner {
  background-size: cover;
  background-position: center;
  height: 60vh;
  padding: 200px 0;
}

.banner h1 {
  margin: 0;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  font-size: 40px;
}
</style>
