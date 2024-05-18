<script>
import Profile from "../../core/enterprises/components/profile.component.vue";

export default {
  name: 'Toolbar-Content',
  components: {Profile},
  data() {
    return {
      visible: false
    }
  },
  methods: {
    goToProfile() {
      this.visible = !this.visible
    },
    logout() {
      //removeUserId con localstorage()
      localStorage.removeItem('userId');
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
      <button @click="visible=!visible">
        <img src="../../assets/perfil.png" alt="Perfil">
        <span class="icon-text">Perfil</span>
      </button>
    </div>

    <div class="toolbar-item">
      <router-link to="/requests">
        <img src="../../assets/busqueda.png" alt="Solicitudes">
        <span class="icon-text">Ver solicitudes</span>
      </router-link>
    </div>

    <div class="toolbar-item">
      <router-link to='/enterprise-home'>
        <img src="../../assets/logo.png" alt="Logo de la empresa">
      </router-link>
    </div>

    <div class="toolbar-item">
      <router-link to="/contact">
        <img src="../../assets/contacto.png" alt="Contacto">
        <span class="icon-text">Contacto</span>
      </router-link>
    </div>

    <div class="toolbar-item">
      <a @click="logout">
        <img src="../../assets/salir.png" alt="Salir">
        <span class="icon-text">Salir</span>
      </a>
    </div>

  </div>


  <pv-dialog v-model:visible="visible" modal :style="{width:'40rem'}">
    <profile></profile>
  </pv-dialog>

</template>


<style scoped>
/*header {

}*/

.toolbar-content {
  /*max-width: 1200px;*/
  background-color: #19E49B;
  color: white;
  padding: 0.1rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/*.toolbar-item {
  margin-right: 1rem;
}*/

/*.toolbar-item:last-child {
  margin-right: 0;
}*/

.toolbar-item button {
  /*background: none;*/
  /*border: none;*/
  cursor: pointer;
  /*color: white;*/
  display: flex;
  flex-direction: column;
  align-items: center;
}

.toolbar-item img {
  width: 30px;
}

.toolbar-item.logo img {
  width: 50px;

}

.icon-text {
  font-size: 12px;
  margin-top: 0.5rem;
  text-align: center;
  color: black;
}


</style>
