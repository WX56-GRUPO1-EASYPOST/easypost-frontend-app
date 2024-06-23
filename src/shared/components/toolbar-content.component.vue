<script>
import Profile from "../../public/components/profile.component.vue";
import ProfilesService from "../../public/services/profiles.service.js";
import {ProfileEntity} from "../../public/model/profile.entity.js";

export default {
  name: 'Toolbar-Content',
  components: {Profile},
  data() {
    return {
      profilesService : new ProfilesService(),
      profile:new ProfileEntity(),
      visible: false,
      currentUser:null
    }
  },
  created() {
      let temp=localStorage.getItem("user");
      this.currentUser=JSON.parse(temp);
  },
  methods: {
    logout() {
      //remover user del localstorage()
      localStorage.removeItem("user")
      this.$router.push({name: 'login'});
    },
    async openProfile(){
      let user = JSON.parse(localStorage.getItem("user"))
      let id = user.id
      const response = await this.profilesService.getProfileByUserId(id)
      let profileResponse = response.data
      this.profile=new ProfileEntity(
          profileResponse.id,profileResponse.fullContact,
          profileResponse.fullAddress,profileResponse.fullDetails)
      this.visible=true
    }
  }
}
</script>


<template>

  <div class="toolbar-content">

    <div class="toolbar-item">
      <button @click="openProfile">
        <img src="../../assets/perfil.png" alt="Perfil">
        <span class="icon-text">Perfil</span>
      </button>
    </div>

    <div class="toolbar-item" v-if="currentUser.role==='Enterprise'">
      <router-link to="/requests" style="text-decoration: none">
        <div class="toolbar-item-content">
          <img src="../../assets/busqueda.png" alt="Solicitudes">
          <span class="icon-text">Ver solicitudes</span>
        </div>
      </router-link>
    </div>

<!--    Boton Explorar solo para cliente-->
    <div class="toolbar-item" v-if="currentUser.role==='Client'">
      <router-link to="/explore" style="text-decoration: none">
        <div class="toolbar-item-content">
          <img src="../../assets/busqueda.png" alt="Solicitudes">
          <span class="icon-text">Explorar</span>
        </div>
      </router-link>
    </div>

    <div class="toolbar-item" v-if="currentUser.role==='Client'">
      <router-link to='/client-home'>
        <img class="logo" src="../../assets/logo.png" alt="Logo de la empresa">
      </router-link>
    </div>

    <div class="toolbar-item" v-if="currentUser.role==='Enterprise'">
      <router-link to='/enterprise-home'>
        <img class="logo" src="../../assets/logo.png" alt="Logo de la empresa">
      </router-link>
    </div>

    <div class="toolbar-item">
      <router-link to="/contact" style="text-decoration: none">
        <div class="toolbar-item-content">
          <img src="../../assets/contacto.png" alt="Contacto">
          <span class="icon-text">Contacto</span>
        </div>
      </router-link>
    </div>

    <div class="toolbar-item">
      <a @click="logout" style="text-decoration: none">
        <div class="toolbar-item-content">
          <img src="../../assets/salir.png" alt="Salir">
          <span class="icon-text">Salir</span>
        </div>
      </a>
    </div>

  </div>


  <pv-dialog v-model:visible="visible" modal :style="{width:'30rem'}" :closable="false">
    <profile @close-dialog="visible=false" :profile="profile"></profile>
  </pv-dialog>

</template>


<style scoped>
.toolbar-content {
  background-color: #19E49B;
  color: white;
  padding: 0.1rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.toolbar-item-content{
  display: flex;
  flex-direction:column;
  align-items: center;

}

.toolbar-item{
  width: 90px;
}

.toolbar-item button,a {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: transparent;
  margin: auto;
}

.toolbar-item:hover{
  background-color: #86ecc3;
}

.toolbar-item img {
  width: 30px;
}

.toolbar-item .logo {
  width: 60px;
  height:auto;
}

.icon-text {
  margin-top: 0.5rem;
  text-align: center;
  color: black;
}
</style>
