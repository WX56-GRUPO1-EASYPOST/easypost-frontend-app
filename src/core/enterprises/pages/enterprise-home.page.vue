<script>
import Projects from "./projects.page.vue"

export default{
  name:"Enterprise-Home",
  components: {Projects},

}
</script>

<template>
  <div class="container">
    <Projects></Projects>
  </div>
</template>

<style scoped>
.container {
  /*margin: 0 auto;*/
  /*max-width: 800px;*/
}

.title {
  text-align: center;
  color: #3554BC;
}

.projects-container {
  margin-top: 20px;
}

.project-card {
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
