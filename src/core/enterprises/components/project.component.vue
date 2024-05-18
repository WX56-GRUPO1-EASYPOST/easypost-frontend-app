<script>
import {ProjectEntity} from "../models/project.entity.js";

export default {
  name: "project",
  props: {
    project: ProjectEntity
  }
}
</script>

<template>
  <pv-card class="project-card">
    <template #header>
      <router-link :to="'/'+project.id+'/manage'" style="text-decoration: none">
        <h3 class="project-title">{{ project.projectName }}</h3>
      </router-link>
    </template>
    <template #content>
      <div class="project-details">
        <div class="project-info">

          <div class="project-segments">
            <p><strong>Cliente:</strong>{{ project.clientName }}</p>
            <p><strong>Ubicación:</strong>{{ project.location }}</p>
          </div>
        </div>
        <div class="image-container">
          <!--          <img src="../../../assets/home-images/user-icon.png" alt="Imagen 2" class="project-image">-->
          <img :src="project.clientImage" :alt="project.clientName" class="project-image">
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.project-card {
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
}

.project-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-info {
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 18px;
  color: black;
}

.project-title:hover {
  background-color: #b5b3b3;
}

.image-container {
  display: flex;
  align-items: center;
}

.project-image {
  width: 120px;
  height: 120px;
}
</style>