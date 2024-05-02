<template>
  <div class="container">
    <pv-card title="Tus Proyectos">
      <template #content>
        <h2 class="title">Mis Proyectos</h2>
        <div class="projects-container">
          <pv-card title="Proyecto 1" class="project-card">
            <template #content>
              <h1></h1>
            </template>
          </pv-card>
          <pv-card title="Proyecto 2" class="project-card">
            <template #content>
              <h1></h1>
            </template>
          </pv-card>
          <pv-card title="Proyecto 3" class="project-card">
            <template #content>
              <h1></h1>
            </template>
          </pv-card>
          <pv-card title="Proyecto 4" class="project-card">
            <template #content>
              <h1></h1>
            </template>
          </pv-card>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 800px;
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
<script setup lang="ts">
</script>