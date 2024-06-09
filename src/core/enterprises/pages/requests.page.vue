<script setup>
import RequestsList from "../components/requests-list.component.vue"
</script>

<template>
  <div class="request-list-container">
    <requests-list></requests-list>
  </div>
</template>

<style scoped>
.request-list-container{
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-right: 30px;
}
</style>