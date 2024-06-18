<script>
import ClientProjectCard from "../components/client-project-card.component.vue";

export default {
  name: "ClientProjects",
  components: {ClientProjectCard},
  data(){
    return{
      projectsList:[
        {
          id:1,
          projectName:"Proyecto 1"
        },
        {
          id:2,
          projectName:"Proyecto 2"
        },
        {
          id:3,
          projectName:"Proyecto 3"
        }
      ]
    }
  }
}
</script>

<template>
  <div class="projects-container">
    <h2>Tus Proyectos</h2>
    <div class="projects-list">
      <div v-if="projectsList.length===0">
        <h2 style="text-align: center">No projects</h2>
      </div>
      <div v-else v-for="project in projectsList" :key="project.id">
        <client-project-card :project="project"></client-project-card>
      </div>
    </div>


  </div>
</template>

<style scoped>
.projects-container{
  margin: 0 auto;
  max-width:800px;
}
.projects-list{
  height: 360px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-right: 30px;
}
</style>