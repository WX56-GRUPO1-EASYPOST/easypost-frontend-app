<script>
import {ProjectEntity} from "../../enterprises/models/project.entity.js";

export default {
  name: "ClientProjectCard",
  props:{
    project: ProjectEntity
  }

}
</script>

<template>
  <pv-card class="project-card">
    <template #header>
      <router-link :to="'/'+project.id+'/dashboard'" style="text-decoration: none">
        <h3 class="project-title">{{project.projectName}}</h3>
      </router-link>
    </template>
    <template #content>
      <div class="project-details">
        <div class="project-info">

          <div class="project-segments">
            <p><strong>Cliente:</strong>Cliente {{project.clientName}}</p>
            <p><strong>Ubicación:</strong>Ubicacion {{project.location}}</p>
          </div>
        </div>
        <div class="image-container">
          <!--          <img src="../../../assets/home-images/user-icon.png" alt="Imagen 2" class="project-image">-->
          <img src="" alt="a" class="project-image">
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>