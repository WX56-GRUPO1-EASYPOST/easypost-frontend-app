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

  <footer>
    <div class="footer-content">
      <!-- Logo de la empresa -->
      <div class="footer-item logo">
        <img src="../../assets/logo.png" alt="Logo de la empresa" class="logo">
      </div>
      <!-- Texto de derechos de autor -->
      <div class="footer-item">
        <p>©2024 EasyPost. Todos los derechos reservados. Todas las marcas pertenecen a sus respectivos dueños en EE.UU. y el resto del mundo.</p>
      </div>
      <!-- Contacto -->
      <div class="footer-item">
        <a href="https://www.facebook.com/"><img src="../../assets/facebook.png" alt="Facebook"></a>
        <a href="https://twitter.com/"><img src="../../assets/twitter.png" alt="Twitter"></a>
        <a href="https://www.instagram.com/"><img src="../../assets/instagram.png" alt="Instagram"></a>
      </div>
    </div>
  </footer>

</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    goToProfile() {
    },
    logout() {
    },
    goToContact() {
    },
    goToRequests() {
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

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 0.1rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-item {
  display: flex;
  align-items: center;
}

.footer-item img {
  width: 35px; /* Ajusta el tamaño de los iconos según tus necesidades */
  margin-right: 0.5rem; /* Espacio entre los iconos */
}

.footer-item.logo img {
  width: 60px;

}


</style>
