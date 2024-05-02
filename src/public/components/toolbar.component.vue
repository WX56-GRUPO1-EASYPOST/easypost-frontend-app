<template>
  <header>
    <div class="toolbar-content">

      <div class="toolbar-item">
        <button @click="goToProfile">
          <img src="../../assets/perfil.png" alt="Perfil">
          <span class="icon-text">Perfil</span>
        </button>
      </div>

      <div class="toolbar-item">
        <button @click="logout">
          <img src="../../assets/salir.png" alt="Salir">
          <span class="icon-text">Salir</span>
        </button>
      </div>

      <div class="toolbar-item">
        <button @click="goToContact">
          <img src="../../assets/contacto.png" alt="Contacto">
          <span class="icon-text">Contacto</span>
        </button>
      </div>

      <div class="toolbar-item">
        <button @click="goToRequests">
          <img src="../../assets/busqueda.png" alt="Solicitudes">
          <span class="icon-text">Ver solicitudes</span>
        </button>
      </div>

      <div class="toolbar-item logo">
        <img src="../../assets/logo.png" alt="Logo de la empresa">
      </div>
    </div>
  </header>



</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    goToProfile() {
    },
    logout() {
      this.$router.push({ name: 'login'});
    },
    goToContact() {
      // Obtener el ID del usuario de la ruta actual
      const userId = this.$route.params.userId;
      this.$router.push({ name: 'contact',params: { userId } });
    },
    goToRequests() {
      // Obtener el ID del usuario de la ruta actual
      const userId = this.$route.params.userId;

      // Redirigir a la ruta "requests" con el mismo ID
      this.$router.push({ name: 'requests', params: { userId } });
    }
  }
}
</script>


<style scoped>
header {
  background-color: #19E49B;
  color: white;
  padding: 0.1rem;
}

.toolbar-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toolbar-item {
  margin-right: 1rem;
}

.toolbar-item:last-child {
  margin-right: 0;
}

.toolbar-item button {
  background: none;
  border: none;
  cursor: pointer;
  color: white;
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
