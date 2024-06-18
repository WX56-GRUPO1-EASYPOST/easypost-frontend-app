<script>
import TicketForm from "../../clients/components/ticket-form.component.vue";

export default {
  name: "ManageProject",
  components: {TicketForm},
  data() {
    return {
      progressbar: 80,
      selectedFilter: null,
      filters: [
        {name: 'Todos', value: 0},
        {name: 'Resueltos', value: 1},
        {name: 'Por resolver', value: 2}
      ]
    };
  }
}
</script>

<template>
  <div class="manage-project-header">
    <h1>Proyecto Residencial San Felipe</h1>
    <div class="project-progress-bar">
      <h2>Progreso: </h2>
      <pv-progress-bar :value="progressbar" style="width:200px"></pv-progress-bar>
    </div>
  </div>
  <div class="manage-project-container">
    <div class="left-column">

      <pv-card>
        <template #title>
          <h3>Tareas del Proyecto</h3>
          <hr>
        </template>
        <template #content>
          <div class="document-section">
            <h3>Documentos</h3>
            <input type="checkbox" class="progress-checkbox">
          </div>

          <div class="document-section">
            <h3>Permisos legales</h3>
            <input type="checkbox" class="progress-checkbox">
          </div>

          <div class="document-section">
            <h3>Compra de materiales</h3>
            <input type="checkbox" class="progress-checkbox">
          </div>

          <div class="document-section">
            <h3>inicio de obra</h3>
            <input type="checkbox" class="progress-checkbox">
          </div>

          <div class="document-section">
            <h3>Avance de construcción</h3>
            <input type="checkbox" class="progress-checkbox">
          </div>

          <div class="document-section">
            <h3>Instalacion de postes</h3>
            <input type="checkbox" class="progress-checkbox">
          </div>

          <div class="document-section">
            <h3>Cableado</h3>
            <input type="checkbox" class="progress-checkbox">
          </div>

          <div class="document-section">
            <h3>Etapa post-instalación</h3>
            <input type="checkbox" class="progress-checkbox">
          </div>

        </template>
      </pv-card>
    </div>

    <div class="right-column">


      <pv-card>
        <template #title>
          <h2>Listas de Tickets</h2>
          <hr>
        </template>
        <template #content>
          <pv-dropdown v-model="selectedFilter" :options="filters" optionLabel="name" placeholder="Filtrar por"/>
        </template>
      </pv-card>

      <pv-card>
        <template #title>
          <h4>Adjuntar imagenes</h4>
          <hr>
        </template>
        <template #content>
          <div class="attach-location">
            <pv-file-upload mode="basic" name="demo[]" url="./upload" choose-label="Seleccionar Archivo"/>
          </div>
        </template>
      </pv-card>

      <div class="notify-client">
        <pv-button>
          Notificar al cliente
        </pv-button>
      </div>


    </div>

  </div>


</template>

<style scoped>
.manage-project-header {
  display: flex;
  justify-content: space-around;
  align-items: center
}

.manage-project-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 60vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 60vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.project-progress-bar {
  display: flex;
  justify-content: space-between;
  align-items: center
}

.document-section {
  display: flex;
  align-items: center;
}

.progress-checkbox {
  margin-left: 5px;
}

.notify-client {
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .manage-project-container {
    flex-direction: column;
    align-items: center;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

}

@media screen and (max-width: 890px) {
  .manage-project-header{
    text-align: center;
    flex-direction: column;
  }
  .project-progress-bar{
    text-align: center;
    flex-direction: column;
  }
}
</style>