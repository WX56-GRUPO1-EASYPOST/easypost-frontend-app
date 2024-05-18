<script setup>
/*export default {
  name: "PageNotFound"
}*/
</script>

<template>
  <h1>Route: '{{ $route.path }}' was not found</h1>
  <router-link to="/login">Ir a Login</router-link>
</template>

<style scoped>

</style>