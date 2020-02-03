<template>
  <div id="app">
    <Navbar />
    <Banner />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
export default {
  name: "App",
  components: {
    Navbar,
    Banner
  }
};
</script>

<style></style>
