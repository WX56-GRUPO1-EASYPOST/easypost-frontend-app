<script>

export default {
  name: "client-home.page",

}
</script>

<template>
  <pv-card class="project-card">
    <template #header>
      <router-link to="1/dashboard" style="text-decoration: none">
        <h3 class="project-title">Proyecto 1</h3>
      </router-link>
    </template>
    <template #content>
      <div class="project-details">
        <div class="project-info">

          <div class="project-segments">
            <p><strong>Cliente:</strong>Cliente 1</p>
            <p><strong>Ubicación:</strong>Ubicacion en </p>
          </div>
        </div>
        <div class="image-container">
          <!--          <img src="../../../assets/home-images/user-icon.png" alt="Imagen 2" class="project-image">-->
          <img src="" alt="a" class="project-image">
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>