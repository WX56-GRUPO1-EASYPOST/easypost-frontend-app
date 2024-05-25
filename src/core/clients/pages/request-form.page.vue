<script>

import AuthService from "../../../public/services/authService.js";
import {User} from "../../../public/model/user.entity.js"
export default {
  name:"request-form",
  data() {
    return {
      enterprise:User
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
    <div class="request-form-content">
      <pv-card style="margin:5px">
        <template #title>
          <h2>Complete el siguiente formulario de cotización</h2>
          <hr>
        </template>
        <template #content>
          <h3>{{enterprise.name}}</h3>
          <img src="" :alt="enterprise.name">
          <div class="request-form-inputs">
          <pv-float-label>
            <pv-input-text id="departamento"></pv-input-text>
            <label for="departamento">Departamento</label>
          </pv-float-label>
          <pv-float-label>
            <pv-input-text id="provincia"></pv-input-text>
            <label for="provincia">Provincia</label>
          </pv-float-label>
          <pv-float-label>
            <pv-input-text id="distrito"></pv-input-text>
            <label for="distrito">Distrito</label>
          </pv-float-label>
            <pv-float-label>
              <pv-input-text id="presupuesto"></pv-input-text>
              <label for="presupuesto">Presupuesto</label>
            </pv-float-label>
          </div>
        </template>
      </pv-card>
    </div>
    <div class="request-form-attach">
      <div class="attach-images">
        adjuntar imagen
      </div>
      <div class="attach-location">
        adjuntar ubicacion
      </div>
      <div class="send-request">
        <pv-button>
          Realizar solicitud
        </pv-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.request-form-container{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
/*----------------------------*/
.request-form-content{
  background-color:lightgreen;
}
.request-form-inputs{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#departamento{

}
/*-----------------------------*/

.request-form-attach{
  display:flex;
  flex-direction: column;
}
.attach-images{
  background-color: lightblue;
}
.attach-location{
  background-color: lightyellow;
}
.send-request{

}

@media screen and (max-width: 380px){
  .request-form-container{
    flex-direction: column;
    align-items: center;
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
    margin-right: 0;
  }
  .request-form-content h2{
    font-size: 20px;
  }
}

</style>