<script>


export default {
  name: "ticket-form.component",

  data() {
    return {
      selectedCategory: null,
      categories: [
        { category: 'Queja', value: 0 },
        { category: 'Consulta', value: 1 },
        { category: 'Error', value: 2 },
      ],
      selectedPriority: null,
      priorities: [
        { priority: 'Bajo', value: 0 },
        { priority: 'Medio', value: 1 },
        { priority: 'Alto', value: 2 },
      ]
    };
    }

}
</script>

<template>
  <div class="document-section">
    <div class="document-form">
      <h3>Crear Ticket</h3>
      <div class="form-group">
        <label for="title">Título:</label>
        <input type="text" v-model="title" id="title" placeholder="Ingrese el título del documento">
      </div>

        <div class="card flex justify-content-center">
          <pv-dropdown v-model="selectedCategory" :options="categories" optionLabel="category" placeholder="Categoria" class="w-full md:w-14rem"></pv-dropdown>
        </div>

      <div class="card flex justify-content-center">
        <pv-dropdown v-model="selectedPriority" :options="priorities" optionLabel="priority" placeholder="Prioridad" class="w-full md:w-14rem"></pv-dropdown>
      </div>

      <div class="form-group">
        <label for="description">Descripción:</label>
        <pv-textarea v-model="value" rows="5" cols="30">Ingresar</pv-textarea>
      </div>

      <div class="send-ticket">
        <pv-button @click="openDialog=!openDialog">
          Enviar
        </pv-button>
      </div>

    </div>
  </div>
</template>

<style scoped>

.document-section {
  display: flex;
  align-items: center;
}

.document-form {
  margin-right: 20px;
}

.form-group {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}

.btn-add {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}

.progress-container {
  display: flex;
  align-items: center;
}

.progress-bar {
  width: 100px;
  height: 10px;
  background-color: lightgray;
  position: relative;
  margin-right: 5px;
}

.progress-text {
  font-size: 14px;
  color: black;
}

.progress-checkbox {
  margin-left: 5px;
}

</style>