<script >

export default {
  name: "login",
  components: {},
  data() {
    return {
      email: '',
      password: '',
      full_name: '',
      rol: '',
      Company: true,
      Client: false
    }
  },
  methods: {
    goToLogin() {
      this.$router.push({ path: '/login' });
    },
    changeRol() {
      this.Company = !this.Company;
      this.Client = !this.Client;
    }
  }
}
</script>

<template>
  <div class="structure">
    <pv-card class="img-card" style="width: 600px; height: 800px">
      <template #content>
        <div class="img-container">
          <img src="../../assets/logo-register.png" alt="img-card-logo" style="width: 240px;">
        </div>
        <div class="label-container">
          <b>EasyPost</b>
        </div>
      </template>
    </pv-card>
    <pv-card class="form-card" style="width: 600px; height: 800px">
      <template #content>
        <div class="card-info">
          <div style="text-align: center; font-size: 30px"><b>Registrar nueva cuenta</b></div>
          <br><br>
          <div>
            <div style="text-align: left; font-size: 15px; padding: 0 0 15px;">¿Tienes una cuenta?</div>
            <pv-button class="button-a" @click="goToLogin">Iniciar sesion</pv-button>
          </div>
          <br>
          <form class="login-form">
            <div v-if="loginError" style="color: red; text-align: center;">
              Correo electrónico o contraseña no válidos.
            </div>
            <div class="form-group">
              <input v-model="full_name" type="text" placeholder="Nombre Completo" class="input" id="email">
            </div>
            <div class="form-group">
              <input v-model="email" type="text" placeholder="Correo electrónico" class="input" id="email">
            </div>
            <div class="form-group">
              <input v-model="password" type="password" placeholder="Contraseña" class="input" id="password">
            </div>
            <div class="form-group">
              <input v-model="password" type="password" placeholder="Repetir contraseña" class="input" id="password">
            </div>
            <div class="form-group">
              <pv-button v-if="Client" class="button-a" @click="changeRol">Cliente</pv-button>
              <pv-button v-if="Company" class="button-a" @click="changeRol">Cliente</pv-button>

              <pv-button v-if="Client" class="button-a" @click="changeRol">Empresa</pv-button>
              <pv-button v-if="Company" class="button-a" @click="changeRol">Empresa</pv-button>
            </div>
            <pv-button class="submit-button" style="color: black; background-color: #6FA9AE" @click="login">Ingresar</pv-button>
          </form>
        </div>
      </template>
    </pv-card>

  </div>
</template>

<style >
.structure {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
  background-image: url("../../assets/workman.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 0;
  font-family: Helvetica, sans-serif;
}

.img-card {
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("../../assets/register-login-image.png");
}

.label-container {
  text-align: center;
  justify-content: center;
  font-size: 80px;
  color: #704116;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card-info {
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-content: center;
  width: 500px;
}

.form-card {
  width: 180px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

.input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.submit-button {
  border-width: 0;
  height: 30px;
  border-color: inherit;
  border-radius: 10px;
}

.button-a {
  border-width: 0;
  height: 30px;
  border-color: inherit;
  border-radius: 10px;
}

.submit-button:hover {
  opacity: 0.8;
  cursor: pointer;
}
.button-a:hover {
  opacity: 0.4;
  cursor: pointer;
}
</style>