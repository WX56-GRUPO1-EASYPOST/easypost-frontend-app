<script>
import Profile from "../../core/enterprises/components/profile.component.vue";

export default {
  name: 'Toolbar-Content',
  components: {Profile},
  data() {
    return {
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
      //removeUserId con localstorage()
      localStorage.removeItem('userId');
      localStorage.removeItem("user")
      this.$router.push({name: 'login'});
    },
    goToHome() {
      //this.$router.push({name: 'enterprise-home'});
    },
    goToContact() {
      // Obtener el ID del usuario de la ruta actual
      const userId = this.$route.params.userId;
      //this.$router.push({name: 'contact', params: {userId}});
    },
    goToRequests() {
      // Obtener el ID del usuario de la ruta actual
      const userId = this.$route.params.userId;

      // Redirigir a la ruta "requests" con el mismo ID
      //this.$router.push({name: 'requests', params: {userId}});
    }
  }
}
</script>


<template>

  <div class="toolbar-content">

    <div class="toolbar-item">
      <button @click="visible=true">
        <img src="../../assets/perfil.png" alt="Perfil">
        <span class="icon-text">Perfil</span>
      </button>
    </div>

    <div class="toolbar-item" v-if="currentUser.role==='empresa'">
      <router-link to="/requests" style="text-decoration: none">
        <div class="toolbar-item-content">
          <img src="../../assets/busqueda.png" alt="Solicitudes">
          <span class="icon-text">Ver solicitudes</span>
        </div>
      </router-link>
    </div>

<!--    Boton Explorar solo para cliente-->
    <div class="toolbar-item" v-if="currentUser.role==='cliente'">
      <router-link to="" style="text-decoration: none">
        <div class="toolbar-item-content">
          <img src="../../assets/busqueda.png" alt="Solicitudes">
          <span class="icon-text">Explorar</span>
        </div>
      </router-link>
    </div>

    <div class="toolbar-item">
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
    <profile @close-dialog="visible=false"></profile>
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
