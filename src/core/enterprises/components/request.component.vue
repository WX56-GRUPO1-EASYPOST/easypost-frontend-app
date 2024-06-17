<script setup>
import { ref, onMounted } from 'vue';
import authService from "../../../public/services/authService.js";

const props = defineProps({
  request: Object
});

const emit = defineEmits(['seeRequestDetails'])

const client = ref(null);

const selectedRequest = ref(null);

onMounted(async () => {
  try {
    const response = await authService.getUserById(props.request.cliente_id);
    client.value = response.data;
    console.log(client.value)
  } catch (error) {
    console.error('Error al obtener el cliente:', error);
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
  emit('seeRequestDetails',selectedRequest)
}
</script>

<template>
  <div class="main-container">
    <pv-card class="list-request">
      <template #content>
        <pv-card class="card-request">
          <template #content >
            <div class="request-info">
              <div>
                <h4>{{ request.ubicacion.localidad}} - {{request.ubicacion.distrito}}</h4>
                <p v-if="client">Cliente: {{ client.name }}</p>
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
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.main-container{
  width:100%;
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.list-request{
  width:900px;
  max-height: 1000px;
}
.card-request{
  background-color: #D9D9D9;
}
.request-info{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.request-info > div{
  margin: auto;
}
@media screen and (max-width: 940px) {
  .list-request{
    width: 100%;
  }
  .request-info{
    flex-direction: column;
  }
}
</style>