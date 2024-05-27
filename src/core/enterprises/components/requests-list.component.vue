<script setup>
import { ref, onMounted } from 'vue';
import Request from "../components/request.component.vue";
import requestService from "../services/requestService.js";

const requests = ref([]);

onMounted(async () => {
  try {

    const company = JSON.parse(localStorage.getItem('user'));
    const companyId = company.id;
    console.log(companyId)
    const response = await requestService.getRequestsByCompanyId(companyId);
    console.log(response); // Imprime la respuesta completa
    requests.value = response; // Accede directamente a response
    console.log(requests.value);
  } catch (error) {
    console.error('Error al obtener las solicitudes:', error);
  }
});
</script>

<template>
  <h1 style="text-align: center">Solicitudes</h1>
  <pv-card>
    <template #content>
      <Request v-for="request in requests" :key="request.id" :request="request" />
    </template>
  </pv-card>
</template>

<style scoped>

</style>