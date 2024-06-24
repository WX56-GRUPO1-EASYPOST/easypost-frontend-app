<script>
//import {EnterpriseEntity} from "../../enterprises/models/enterprise.entity.js";
import {ProfileEntity} from "../../../public/model/profile.entity.js";

export default {
  name: "EnterpriseCard",
  props: {
    enterprise: ProfileEntity
  },
  data() {
    return {
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
    let partes = [];
    let fullContactString = this.enterprise.fullContact;
    partes = fullContactString.split(' - ')
    this.telefono = partes[0];
    this.correo = partes[1];
    partes = []
    let fullAddressString = this.enterprise.fullAddress;
    partes = fullAddressString.split(' - ')
    this.departamento = partes[0];
    this.distrito = partes[1];
    this.residencial = partes[2];
    partes = []
    let fullDetailsString = this.enterprise.fullDetails;
    partes = fullDetailsString.split(' - ')
    this.name = partes[0];
    this.descripcion = partes[1];
    this.ruc = partes[2];
    partes = []
  }
}
</script>

<template>
  <pv-card class="enterprise-card">
    <template #header>
      <router-link :to="'/'+enterprise.id+'/request'" style="text-decoration: none">
        <h3 class="enterprise-title">{{ name }}</h3>
      </router-link>
    </template>
    <template #content>
      <h4>Ruc: {{ ruc }}</h4>
      <h4>Description: {{ descripcion }}</h4>
      <div>
        <h4>Contacto:</h4>
        <h5>Telefono: {{ telefono }}</h5>
        <h5>Correo: {{ correo }}</h5>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.enterprise-card {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.enterprise-title {
  text-align: center;
  color: black;
}

.enterprise-title:hover {
  background-color: #b5b3b3;
}

</style>