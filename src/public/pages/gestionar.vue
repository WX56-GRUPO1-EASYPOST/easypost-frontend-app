<script>
import TicketForm from "../../core/clients/components/ticket-form.component.vue";

export default {
  name: "gestionar",
  components: {TicketForm},
  data () {
    return {
      progressbar: 80
    };
  }
}
</script>

<template>
  <div class="request-form-container">
    <div class="left-column">
      <!-- Nueva Card con solo título -->
      <pv-card style="margin:5px">
        <template #title>
          <h2>Proyecto Residencial San Felipe</h2>
          <hr>
        </template>
      </pv-card>


      <pv-card style="margin:5px">
        <template #title>
          <h2>Tareas del Proyecto</h2>
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

      <div class="project-progress-bar">
        <h2>Progreso: </h2>

        <div>
          <pv-progress-bar :value= "progressbar"></pv-progress-bar>
        </div>

        <h2>{{progressbar}}%</h2>

      </div>


      <div class="request-form-attach">
        <pv-card style="margin:5px">
          <template #title>
            <h2>Listas de Tickets</h2>
            <hr>
          </template>
          <template #content>
            <div class="document-section">
              <h3>Todos</h3>
              <input type="checkbox" class="progress-checkbox">
            </div>

            <div class="document-section">
              <h3>Resueltos</h3>
              <input type="checkbox" class="progress-checkbox">
            </div>

            <div class="document-section">
              <h3>Por resolver</h3>
              <input type="checkbox" class="progress-checkbox">
            </div>

          </template>



        </pv-card>

        <pv-card style="margin:5px">
          <template #title>
            <h2>Adjuntar Ubicación</h2>
            <hr>
          </template>
          <template #content>
            <div class="attach-location">
              <pv-file-upload mode="basic" name="demo[]" url="./upload" choose-label="Seleccionar Archivo" />
            </div>
          </template>
        </pv-card>

        <div class="send-request">
          <pv-button>
            Notificar al cliente
          </pv-button>
        </div>


      </div>
    </div>
  </div>


</template>

<style scoped>
.request-form-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.left-column {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.request-form-content {
  background-color: lightgreen;
}

.document-section {
  display: flex;
  align-items: center;
}

.progress-container {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.progress-bar {
  width: 100px;
  height: 10px;
  background-color: lightgray;
  position: relative;
  margin-right: 5px;
}

.progress-text {
  font-size: 14px;
  color: black;
}

.progress-checkbox {
  margin-left: 5px;
}

.request-form-attach {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.send-request {
  margin-top: 10px;
}

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.right-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.post-count {
  text-align: right;
}

.subtitle {
  text-align: left;
}

@media screen and (max-width: 768px) {
  .request-form-container {
    flex-direction: column;
    align-items: center;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

  .title-container {
    flex-direction: column;
    align-items: center;
  }

  .left-content,
  .right-content {
    text-align: center;
    align-items: center;
  }

  .subtitle {
    text-align: center;
  }
}
</style>