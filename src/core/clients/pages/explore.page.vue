<script>
import EnterpriseCard from "../components/enterprise-card.component.vue";
import ProfilesService from "../../../public/services/profiles.service.js";

export default {
  name: "Explore",
  components: {EnterpriseCard},
  data(){
    return{
      enterprisesList:[],
      profilesService:new ProfilesService()
    }
  },
  mounted() {
    this.profilesService.getEnterpriseProfiles().then(response => {
      this.enterprisesList=response.data;
    })
  }
}
</script>

<template>
  <div class="enterprises-container">
    <h2 class="title">Empresas</h2>
    <div class="enterprises-list">
      <div v-if="enterprisesList.length===0">
        <h2 style="text-align: center">No hay empresas registradas</h2>
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
  max-width: 700px;
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