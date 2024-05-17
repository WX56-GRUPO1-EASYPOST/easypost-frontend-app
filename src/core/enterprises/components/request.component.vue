<script setup>
import { ref, onMounted } from 'vue';
import requestService from "../services/requestService.js";
import authService from "../../../public/services/authService.js";
const requests = ref([]);
const clients = ref([]);
const selectedRequest = ref(null);

onMounted(async () => {
  try {
    const currentUrl = window.location.href;
    const segments = currentUrl.split('/');
    const companyId = segments[segments.length - 1];

    console.log(companyId);
    // Obtener las solicitudes por ID de empresa
    requests.value = await requestService.getRequestsByCompanyId(companyId);
    console.log(requests.value[0]);

    await Promise.all(requests.value.map(async request => {
      const user = await authService.getUserById(request.cliente_id);
      console.log(user.data);
      clients.value[request.id] = user.data;
      console.log(clients.value[request.id].name);
    }));

  } catch (error) {
    console.error('Error al obtener las solicitudes:', error);
  }
});

const getGoogleMapsUrl = (request) => {
  // Obtener la dirección de la solicitud
  const address = `${request.ubicacion.direccion}, ${request.ubicacion.distrito}, ${request.ubicacion.provincia}, ${request.ubicacion.departamento}`;

  // Construir y retornar la URL del mapa de Google Maps
  return `https://www.google.com/maps/embed/v1/place?key=CODIGO-API&q=${encodeURIComponent(address)}`;
}

const showDetails = (request) => {
  selectedRequest.value = request;
}
</script>

<template>
  <div class="main-container">
    <pv-card class="list-request">
      <template #content>
    <h1 style="text-align: center">Solicitudes</h1>
    <div v-if="requests.length === 0">
      <p>No requests found</p>
    </div>
    <div v-else>
      <div v-for="request in requests" :key="request.id">
        <pv-card class="card-request">
          <template #content >
            <div class="request-info">
              <div>
                <h4>{{ request.ubicacion.localidad}} - {{request.ubicacion.distrito}}</h4>
                <p v-if="clients">Cliente: {{ clients[request.id]?.name }}</p>
                <p>Ubicación: {{ request.ubicacion.departamento }},{{ request.ubicacion.provincia }},{{ request.ubicacion.distrito }}</p>
              </div>
              <div>
                <iframe :src="getGoogleMapsUrl(request)" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div>
                <pv-button @click="showDetails(request)">Ver detalles</pv-button>
              </div>
            </div>

          </template>
        </pv-card>
        <!-- Mostrar otros detalles de la solicitud según sea necesario -->
      </div>
    </div>
      </template>
    </pv-card>
    <!-- Tarjeta de detalles -->
    <pv-card v-if="selectedRequest" class="request-detail">
      <template #content>
        <h2>Detalles de la Solicitud</h2>
        <h3>Datos del Cliente</h3>
        <ul>
          <li>Nombres: {{ clients[selectedRequest.id].name }}</li>
          <li>Email: {{ clients[selectedRequest.id].email }}</li>
        </ul>
        <h3>Ubicación</h3>
        <ul>
          <li>Departamento: {{ selectedRequest.ubicacion.departamento }}</li>
          <li>Provincia: {{ selectedRequest.ubicacion.provincia }}</li>
          <li>Distrito: {{ selectedRequest.ubicacion.distrito }}</li>
          <li>Localidad: {{ selectedRequest.ubicacion.localidad }}</li>
          <li>Dirección: {{ selectedRequest.ubicacion.direccion }}</li>
          <li>Referencia: {{ selectedRequest.ubicacion.referencia }}</li>
        </ul>
        <h3>Detalles del proyecto</h3>
        <ul>
          <li>plazo: {{ selectedRequest.detalles_del_proyecto.plazo }}</li>
          <li>Motivo de solicitud: {{ selectedRequest.detalles_del_proyecto.motivo }}</li>
          <li>Diseño: {{ selectedRequest.detalles_del_proyecto.diseño }}</li>
          <li>Cantidad: {{ selectedRequest.detalles_del_proyecto.cantidad }}</li>
          <li>Presupuesto: {{ selectedRequest.detalles_del_proyecto.presupuesto }}</li>
        </ul>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.main-container{
  width:100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #AAFFC2 0%, #ADFFEB 50%, #FBFBFB 100%);
}

.card-request{
  background-color: #D9D9D9;
  margin: 10px;
}
.request-info{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.list-request{
  max-width: 1100px;
  min-width: 900px;
  max-height: 1000px;
  margin: auto;
}
.request-detail{
  max-width: 800px;
  min-width: 500px;
  height: 75vh;
  margin: auto;
}
</style>