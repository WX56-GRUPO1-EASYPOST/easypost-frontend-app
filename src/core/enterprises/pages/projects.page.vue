<script>
import Project from "../components/project.component.vue";
import {ProjectsApiService} from "../services/projectsApi.service.js";

export default {
  name: 'Projects',
  components: {Project},
  data(){
    return{
      //dejar lista vacía para api del backend
      projectsList:[
          {
            id:1,
            projectName:"Proyecto N1",
            clientName:"Pepe",
            location:"San Isidro",
            clientImage:"imagen1"
          },
        {
          id:2,
          projectName:"Proyecto N2",
          clientName:"Juan",
          location:"San Juan de Lurigancho",
          clientImage:"imagen2"
        },
        {
          id:3,
          projectName:"Proyecto N3",
          clientName:"Jose",
          location:"Miraflores",
          clientImage:"imagen3"
        }
      ],
      projectsService:new ProjectsApiService()
    }
  },
  mounted(){
    let user=JSON.parse(localStorage.getItem("user"))
    let id = user.id;
    this.projectsService.getEnterpriseProjects(id)
        .then(response => {
          this.projectsList=response.data;
        })
  }
}
</script>

<template>
  <div class="container">
    <h2 class="title">Tus Proyectos</h2>
    <div class="projects-container">
      <div v-if="projectsList.length===0">
        <h2 style="text-align: center">No projects</h2>
      </div>
      <div v-else v-for="project in projectsList" :key="project.id">
        <project :project="project" ></project>
      </div>
    </div>


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
  height: 360px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-right: 30px;
}


</style>

