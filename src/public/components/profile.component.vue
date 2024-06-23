<script>
import {EnterpriseEntity} from "../../core/enterprises/models/enterprise.entity.js";
import {EnterpriseProfileApiService} from "../services/enterprise-profile-api.service.js";
import {ProfileEntity} from "../model/profile.entity.js";

export default {
  name: "profile",
  props: {
    profile: ProfileEntity
  },
  data() {
    return {
      /*profile: new EnterpriseEntity(),
      profileService: new EnterpriseProfileApiService()*/

      telefono: "",
      correo: "",
      departamento: "",
      distrito: "",
      residencial: "",
      name: "",
      descripcion: "",
      ruc: ""
    }
  },
  mounted() {
    let partes=[];
    let fullContactString = this.profile.fullContact;
    partes=fullContactString.split(' - ')
    this.telefono = partes[0];
    this.correo = partes[1];
    partes=[]
    let fullAddressString = this.profile.fullAddress;
    partes=fullAddressString.split(' - ')
    this.departamento = partes[0];
    this.distrito = partes[1];
    this.residencial = partes[2];
    partes=[]
    let fullDetailsString = this.profile.fullDetails;
    partes=fullDetailsString.split(' - ')
    this.name=partes[0];
    this.descripcion=partes[1];
    this.ruc=partes[2];
    partes=[]
  }
}
</script>


<template>
  <div class="container">
    <div style="display: flex;align-items: center">
      <!--      <div>
              <img :src="profile.profileImage" :alt="profile.name" class="image">
            </div>-->
      <div style="padding-left: 10px">
        <h2>{{ name }}</h2>
        <p><strong>Descripción:</strong></p>
        <p>{{ descripcion }}</p>
      </div>
    </div>
    <div>
      <div class="segment">
        <p><strong>Ruc:</strong>{{ ruc }}</p>
        <p><strong>Teléfono:</strong>{{ telefono }}</p>
        <p><strong>Correo:</strong>{{ correo }}</p>
        <p><strong>Departamento:</strong>{{ departamento }}</p>
        <p><strong>Distrito:</strong>{{ distrito }}</p>
        <p><strong>Residencial:</strong>{{ residencial }}</p>
      </div>
      <div style="text-align: center">
        <pv-button type="button" @click="this.$emit('close-dialog')">Close</pv-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.image {
  width: 50px;
  height: 50px;
}
</style>

