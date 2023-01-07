<template>
  <Nav />
  <div class="container">
    <h1>Page not found</h1>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Nav: defineAsyncComponent(() => import("../../shared/components/Nav.vue")),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
h1 {
  margin: 0;
}
</style>
