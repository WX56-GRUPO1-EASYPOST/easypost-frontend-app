<script setup>

</script>

<template>
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

<style scoped>

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
  width: 35px;
  margin-right: 0.5rem;
}

.footer-item.logo img {
  width: 60px;

}
</style>