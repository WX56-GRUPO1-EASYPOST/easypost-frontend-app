<script>
import ProfilesService from "../../../public/services/profiles.service.js";
import {ProfileEntity} from "../../../public/model/profile.entity.js";
import requestService from "../../enterprises/services/requestService.js";

export default {
  name: "request-form",
  data() {
    return {
      enterprise: ProfileEntity,
      clientId:0,
      name: "",
      descripcion: "",
      ruc: "",
      profilesService: new ProfilesService(),
      projectTitle:"",
      reason:"",
      deadline:"",
      totalBudget:0,
      partialBudget:0,
      department:"",
      province:"",
      district:"",
      address:"",
      locality:"",
      reference:""
    };
  },
  mounted() {
    let userId = localStorage.getItem("userId");
    this.clientId=userId;
    let enterpriseId = this.$route.params.enterpriseId
    this.getData(enterpriseId)
  },
  methods: {
    async getData(id) {
      const response = await this.profilesService.getProfileById(id)
      this.enterprise = response.data
      let partes = [];
      let fullDetailsString = this.enterprise.fullDetails;
      partes = fullDetailsString.split(' - ')
      this.name = partes[0];
      this.descripcion = partes[1];
      this.ruc = partes[2];
      partes = []
    },
    sendRequest(){
      let request={
        projectTitle: this.projectTitle,
        description:this.reason,
        budget: parseInt(this.totalBudget),
        partialBudget: parseInt(this.partialBudget),
        clientId:this.clientId,
        enterpriseId:this.enterprise.id,
        deadline:new Date(this.deadline),
        department:this.department,
        province:this.province,
        district:this.district,
        address:this.address,
        locality:this.locality,
        reference:this.reference
      }
      requestService.postRequest(request).then(response => {
        console.log(response.data)
      })
      //console.log(request)
      this.$router.push({path:'/client-home'})
    }
  }

};

</script>

<template>
  <div class="request-form-container">
    <div class="request-form-content">
      <pv-card style="margin:5px">
        <template #title>
          <h2>Complete el formulario de solicitud</h2>
          <hr>
        </template>
        <template #content>
          <h3>{{ name }}</h3>
          <h4>{{ descripcion }}</h4>
          <h4>RUC: {{ ruc }}</h4>
          <div class="request-form-inputs">
            <div>
              <div class="datos-generales">
                <h3>Datos Generales</h3>
                <pv-float-label class="input">
                  <pv-input-text id="projectTitle" v-model="projectTitle"></pv-input-text>
                  <label for="projectTitle">Nombre del proyecto</label>
                </pv-float-label>
                <pv-float-label class="input">
                  <pv-input-text id="motivo" v-model="reason"></pv-input-text>
                  <label for="motivo">Motivo</label>
                </pv-float-label>
                <div style="display: flex;flex-direction: column">
                <label for="deadline" style="font-size: 13px;padding-left: 13px">Plazo estimado</label>
                <pv-input-text id="deadline" v-model="deadline" type="date"></pv-input-text>
                </div>
              </div>
              <div class="presupuesto">
                <h3>Presupuesto</h3>
                <pv-float-label class="input">
                  <pv-input-text id="presupuestoTotal" v-model="totalBudget" type="number"></pv-input-text>
                  <label for="presupuestoTotal">Total</label>
                </pv-float-label>
                <pv-float-label class="input">
                  <pv-input-text id="presupuestoParcial" v-model="partialBudget" type="number"></pv-input-text>
                  <label for="presupuestoParcial">Parcial</label>
                </pv-float-label>
              </div>
            </div>
            <div class="ubicacion">
              <h3>Ubicacion</h3>
              <pv-float-label class="input">
                <pv-input-text id="departamento" v-model="department"></pv-input-text>
                <label for="departamento">Departamento</label>
              </pv-float-label>
              <pv-float-label class="input">
                <pv-input-text id="provincia" v-model="province"></pv-input-text>
                <label for="provincia">Provincia</label>
              </pv-float-label>
              <pv-float-label class="input">
                <pv-input-text id="distrito" v-model="district"></pv-input-text>
                <label for="distrito">Distrito</label>
              </pv-float-label>
              <pv-float-label class="input">
                <pv-input-text id="direccion" v-model="address"></pv-input-text>
                <label for="direccion">Direccion</label>
              </pv-float-label>
              <pv-float-label class="input">
                <pv-input-text id="localidad" v-model="locality"></pv-input-text>
                <label for="localidad">Localidad</label>
              </pv-float-label>
              <pv-float-label class="input">
                <pv-input-text id="referencia" v-model="reference"></pv-input-text>
                <label for="referencia">Referencia</label>
              </pv-float-label>
            </div>
          </div>
        </template>
      </pv-card>
    </div>


    <div class="request-form-attach">
      <pv-card style="margin:5px">
        <template #title>
          <h2>Adjuntar Imagen</h2>
          <hr>
        </template>
        <template #content>
          <div class="attach-images">
            <pv-file-upload mode="basic" name="demo[]" url="./upload" choose-label="Seleccionar Imagen"/>
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
            <pv-file-upload mode="basic" name="demo[]" url="./upload" choose-label="Seleccionar Archivo"/>
          </div>
        </template>
      </pv-card>

      <div class="send-request">
        <pv-button @click="sendRequest">
          Enviar solicitud
        </pv-button>
      </div>
    </div>
  </div>


</template>

<style scoped>
.request-form-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

/*----------------------------*/
.request-form-content {
  background-color: lightgreen;
}

.request-form-inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input{
  margin-bottom: 25px;
}
#departamento {

}

/*-----------------------------*/

.request-form-attach {
  display: flex;
  flex-direction: column;
}

.attach-images {
  background-color: lightblue;
}

.attach-location {
  background-color: lightyellow;
}

.send-request {

}

@media screen and (max-width: 380px) {
  .request-form-container {
    flex-direction: column;
    align-items: center;
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
    margin-right: 0;
  }

  .request-form-content h2 {
    font-size: 20px;
  }
}

</style>