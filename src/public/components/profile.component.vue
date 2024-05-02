<template>
  <div class="container">
    <Card>
      <!-- Encabezado personalizado con imagen, título y frase de resumen -->
      <template #header>
        <div class="header-container">
          <img src="../../assets/home-images/profile.png" alt="Imagen" class="image">
          <div class="title-container">
            <h2 class="title">Mis Proyectos</h2>
            <p class="subtitle">Resumen</p>
            <p class="summary">Carlo desea instalación de postes en el distrito de San Juan de Miraflores en la residencial San Felipe por un proyecto de mejorar la iluminación de su residencial.</p>
          </div>
        </div>
      </template>
      <!-- Contenido del Card -->
      <template #content>
        <!-- Contenedor de proyectos -->
        <div class="projects-container">
          <!-- Aquí va el contenido de los proyectos -->

          <!-- Segmentos de información -->
          <div class="segment">
            <p><strong>Ruc:</strong> 2048763648</p>
            <p><strong>Teléfono:</strong> 924 830 455</p>
            <p><strong>Correo:</strong> cvillanueva16@1gmai.com</p>
            <p><strong>Departamento:</strong> Lima</p>
            <p><strong>Distrito:</strong> San Juan de Miraflores</p>
            <p><strong>Residencial:</strong> San Felipe</p>
          </div>

        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.header-container {
  display: flex;
  align-items: center;
}

.image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  margin: 0;
  color: #3554BC;
}

.subtitle, .summary {
  margin: 5px 0;
  color: #666;
  font-size: 16px;
}

.project-card {
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.segment {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
}
</style>

<script setup lang="ts">
</script>