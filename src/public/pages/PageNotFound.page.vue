<script setup>
/*export default {
  name: "PageNotFound"
}*/
</script>

<template>
  <h1>Route: '{{ $route.path }}' was not found</h1>
  <a href="#" @click="$router.go(-1)">Volver</a>
</template>

<style scoped>

</style>