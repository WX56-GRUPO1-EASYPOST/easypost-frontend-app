<script>
import EnterpriseCard from "../components/enterprise-card.component.vue";

export default {
  name: "Explore",
  components: {EnterpriseCard},
  data(){
    return{
      enterprisesList:[
        {
          id:1,
          projectName:"Enterprise 1",
        },
        {
          id:2,
          projectName:"Enterprise 2",
        },
        {
          id:3,
          projectName:"Enterprise 3",
        }
      ]
    }
  }
}
</script>

<template>
  <div class="enterprises-container">
    <h2 class="title">Empresas</h2>
    <div class="enterprises-list">
      <div v-if="enterprisesList.length===0">
        <h2 style="text-align: center">No projects</h2>
      </div>
      <div v-else v-for="enterprise in enterprisesList" :key="enterprise.id">
        <enterprise-card :enterprise="enterprise" ></enterprise-card>
      </div>
    </div>


  </div>
</template>

<style scoped>
.enterprises-container{
  margin: 0 auto;
  max-width: 800px;
}
.title{
  text-align: center;
  color: #3554BC;
}
.enterprises-list{
  height: 60vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>