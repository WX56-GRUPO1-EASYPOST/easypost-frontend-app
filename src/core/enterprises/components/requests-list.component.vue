<script setup>
import {ref, onMounted} from 'vue';
import Request from "../components/request.component.vue";
import requestService from "../services/requestService.js";
//import ProfilesService from "../../../public/services/profiles.service.js";
//import authService from "../../../public/services/authService.js";

const requests = ref([]);
const showRequestDetails = ref(false);
const currentRequest = ref(null);
const client = ref(null)
const details = async (data) => {
  showRequestDetails.value = true;
  currentRequest.value = data.value;
  /*try {
    const response = await ProfilesService.GetProfileByUserId(currentRequest.value.clientId);
    client.value = response.data;
  } catch (error) {
    console.error('Error al obtener el cliente:', error);*/

};
onMounted(async () => {
  try {
    const company = JSON.parse(localStorage.getItem('user'));
    const companyId = company.id;
    console.log(companyId)
    const response = await requestService.getRequestsByCompanyId(companyId,0);
    console.log(response); // Imprime la respuesta completa
    requests.value = response; // Accede directamente a response
    console.log(requests.value);
  } catch (error) {
    console.error('Error al obtener las solicitudes:', error);
  }
});
</script>

<template>
  <div class="request-content">
    <div class="request-list-container">
      <Request v-for="request in requests" :key="request.id" :request="request"
                style="margin-bottom:10px"/>
    </div>
    <div v-if="showRequestDetails" class="request-detail">
      <pv-card>
        <template #content>
          <h2>Detalles de la Solicitud</h2>
<!--          <h3>Datos del Cliente</h3>
          <ul>
            <li>{{ client?.fullContact }}</li>
            <li>{{ client?.fullDetails }}</li>
          </ul>-->
          <h3>Ubicación</h3>
          <ul>
            <li>Departamento: {{ currentRequest?.ubicacion.departamento }}</li>
            <li>Provincia: {{ currentRequest?.ubicacion.provincia }}</li>
            <li>Distrito: {{ currentRequest?.ubicacion.distrito }}</li>
            <li>Localidad: {{ currentRequest?.ubicacion.localidad }}</li>
            <li>Dirección: {{ currentRequest?.ubicacion.direccion }}</li>
            <li>Referencia: {{ currentRequest?.ubicacion.referencia }}</li>
          </ul>
          <h3>Detalles del proyecto</h3>
          <ul>
            <li>plazo: {{ currentRequest?.detalles_del_proyecto.plazo }}</li>
            <li>Motivo de solicitud: {{ currentRequest?.detalles_del_proyecto.motivo }}</li>
            <li>Diseño: {{ currentRequest?.detalles_del_proyecto.diseño }}</li>
            <li>Cantidad: {{ currentRequest?.detalles_del_proyecto.cantidad }}</li>
            <li>Presupuesto: {{ currentRequest?.detalles_del_proyecto.presupuesto }}</li>
          </ul>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.request-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.request-list-container {
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
}

.request-detail {
  max-width: 800px;
  min-width: 500px;
}
@media screen and (max-width:1480px) {
  /*.request-content{
    flex-direction: column;
  }*/
}
@media screen and (max-width: 955px){
  .request-content{
    flex-direction: column;
  }
}
</style>