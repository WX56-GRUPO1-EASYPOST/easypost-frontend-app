<template>
  <div class="container">
    <Card title="Tus Proyectos">
      <template #content>
        <h2 class="title">Tus Proyectos</h2>
        <div class="projects-container">
          <Card title="Proyecto 1" class="project-card">
            <template #content>
              <div class="project-details">
                <div class="project-info">
                  <h3 class="project-title">Residencial San Felipe - San Isidro</h3>
                  <div class="project-segments">
                    <p><strong>Cliente:</strong> Jose Luna Segovia</p>
                    <p><strong>Ubicación:</strong> Lima, Lima, San Isidro</p>
                    <p><strong>Tipo:</strong> Ciudad</p>
                  </div>
                </div>
                <div class="image-container">
                  <img src="../../assets/home-images/ruta.png" alt="Imagen 1" class="project-image">
                  <img src="../../assets/home-images/user-icon.png" alt="Imagen 2" class="project-image">
                </div>
              </div>
            </template>
          </Card>
          <Card title="Proyecto 1" class="project-card">
            <template #content>
              <div class="project-details">
                <div class="project-info">
                  <h3 class="project-title"></h3>
                  <div class="project-segments">
                  </div>
                </div>
                <div class="image-container">
                </div>
              </div>
            </template>
          </Card>
          <Card title="Proyecto 1" class="project-card">
            <template #content>
              <div class="project-details">
                <div class="project-info">
                  <h3 class="project-title"></h3>
                  <div class="project-segments">
                  </div>
                </div>
                <div class="image-container">
                </div>
              </div>
            </template>
          </Card>
          <Card title="Proyecto 1" class="project-card">
            <template #content>
              <div class="project-details">
                <div class="project-info">
                  <h3 class="project-title"></h3>
                  <div class="project-segments">
                  </div>
                </div>
                <div class="image-container">
                </div>
              </div>
            </template>
          </Card>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 800px;
}

.title {
  text-align: center;
  color: #3554BC;
}

.projects-container {
  margin-top: 20px;
}

.project-card {
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.project-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-info {
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.project-segments {
  font-size: 14px;
}

.image-container {
  display: flex;
  align-items: center;
}

.project-image {
  width: 120px;
  height: 120px;
  margin-left: 10px;
}
</style>

<script setup lang="ts">
</script>