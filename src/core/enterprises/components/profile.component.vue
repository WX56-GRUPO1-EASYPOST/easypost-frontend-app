<script>
import {EnterpriseEntity} from "../models/enterprise.entity.js";
import {EnterpriseProfileApiService} from "../services/enterprise-profile-api.service.js";

export default {
  name: "profile",
  data() {
    return {
      profile: new EnterpriseEntity(),
      profileService: new EnterpriseProfileApiService()
    }
  },
  mounted() {
    let id = localStorage.getItem("userId")
    this.profileService.getProfileById(id)
        .then(response => {
          this.profile = response.data;
        })
  }
}
</script>


<template>
  <div class="container">
    <div style="display: flex;align-items: center">
      <div>
        <img :src="profile.profileImage" :alt="profile.name" class="image">
      </div>
      <div style="padding-left: 10px">
        <p>{{ profile.name }}</p>
        <p><strong>Descripción:</strong></p>
        <p>{{ profile.descripcion }}</p>
      </div>
    </div>
    <div>
      <div class="segment">
        <p><strong>Ruc:</strong>{{ profile.ruc }}</p>
        <p><strong>Teléfono:</strong>{{ profile.telefono }}</p>
        <p><strong>Correo:</strong>{{ profile.correo }}</p>
        <p><strong>Departamento:</strong>{{ profile.departamento }}</p>
        <p><strong>Distrito:</strong>{{ profile.distrito }}</p>
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

