<script>

import AuthService from "../../../public/services/authService.js";
import {User} from "../../../public/model/user.entity.js"
import TicketForm from "../components/ticket-form.component.vue";
export default {
  name:"dashboard",
  components:{
    TicketForm,
  },
  data() {
    return {
      enterprise:User,
      documentChecked: false, // Estado para el checkbox
      openDialog:false,
    };
  },
  mounted() {
    let enterpriseId = this.$route.params.enterpriseId
    this.getData(enterpriseId)
  },
  methods:{
    async getData(id){
      const response = await AuthService.getUserById(id)
      this.enterprise=response.data
    }
  }

};

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


      <!-- Card existente con contenido -->
      <pv-card style="margin:5px">
        <template #title>
          <h2>Tareas del Proyecto</h2>
          <hr>
        </template>
        <template #content>
          <div class="document-section">
            <h3>Documentos</h3>
            <div class="progress-container">
              <div class="progress-bar"></div>
              <span class="progress-text">0%</span>
            </div>
          </div>

          <div class="document-section">
            <h3>Permisos Legales</h3>
            <div class="progress-container">
              <div class="progress-bar"></div>
              <span class="progress-text">0%</span>
            </div>
          </div>

          <div class="document-section">
            <h3>Compras de materiales</h3>
            <div class="progress-container">
              <div class="progress-bar"></div>
              <span class="progress-text">0%</span>
            </div>
          </div>

          <div class="document-section">
            <h3>Inicio de Obra</h3>
            <div class="progress-container">
              <div class="progress-bar"></div>
              <span class="progress-text">0%</span>
            </div>
          </div>

          <div class="document-section">
            <h3>Avance de construcción</h3>
            <div class="progress-container">
              <div class="progress-bar"></div>
              <span class="progress-text">0%</span>
            </div>
          </div>

          <div class="document-section">
            <h3>Cableado</h3>
            <div class="progress-container">
              <div class="progress-bar"></div>
              <span class="progress-text">0%</span>
            </div>
          </div>

          <div class="document-section">
            <h3>Etapa post-instalación</h3>
            <div class="progress-container">
              <div class="progress-bar"></div>
              <span class="progress-text">0%</span>
            </div>
          </div>


        </template>
      </pv-card>

    </div>

    <div class="right-column">
      <div class="request-form-attach">
        <pv-card style="margin:5px">
          <template #title>
            <div class="title-container">
              <div class="left-content">
                <h2>Presupuesto proyecto</h2>
                <div class="subtitle">
                  <p>$ 20,000</p>
                </div>
              </div>
              <div class="right-content">
                <h2>Cantidad de postes</h2>
                <h3>34</h3>
              </div>
            </div>
          </template>
        </pv-card>

        <pv-card style="margin:5px">
          <template #title>
            <h2>Adjuntar Ubicación</h2>
            <hr>
          </template>
          
        </pv-card>

        <div class="send-request">
          <p>¿Tienes dudas, consultas o quejas? <br> Genera tu ticket para que nuestro <br> equipo lo solucione.</p>
          <pv-button @click="openDialog=!openDialog">
            Generar Ticket
          </pv-button>
        </div>

      </div>
    </div>
  </div>

  <pv-dialog v-model:visible="openDialog" modal :style="{width:'30rem'}">
    <ticket-form></ticket-form>
  </pv-dialog>

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