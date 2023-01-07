<template>
  <router-view />
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    Nav: defineAsyncComponent(
      () => import("./modules/shared/components/Nav.vue")
    ),
  },
};
</script>

<style scoped>
@import "./assets/css/login/signin.css";
</style>
