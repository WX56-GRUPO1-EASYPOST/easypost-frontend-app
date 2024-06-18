<script>
import {EnterpriseEntity} from "../../enterprises/models/enterprise.entity.js";

export default {
  name: "EnterpriseCard",
  props: {
    enterprise: EnterpriseEntity
  }
}
</script>

<template>
  <pv-card class="enterprise-card">
    <template #header>
      <router-link :to="'/'+enterprise.id+'/request'" style="text-decoration: none">
        <h3 class="enterprise-title">{{ enterprise.projectName }}</h3>
      </router-link>
    </template>
    <template #content>
      <div class="enterprise-details">
        <div>
          detalles
        </div>
        <div class="enterprise-image">
          <img src="" alt="enterprise-image">
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.enterprise-card{
  margin-bottom: 10px;
}
.enterprise-details{
  display: flex;
  justify-content: space-around;
}
.enterprise-title {
  font-size: 18px;
  color: black;
}

.enterprise-title:hover {
  background-color: #b5b3b3;
}
</style>