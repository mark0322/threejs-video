
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header style="position: fixed; top: 20px; left: 20px;">
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</header>
<div style="height: 100vh; width: 100vw;">
  <RouterView />
</div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
a {
  margin: 0 5px;
  color: white;
}

</style>