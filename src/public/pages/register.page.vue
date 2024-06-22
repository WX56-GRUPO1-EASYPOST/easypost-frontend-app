<script >

import {User} from "../model/user.entity.js";
import AuthService from '../services/authService.js';
import {SignUpUser} from "../model/sign-up-user.entity.js";

export default {
  name: "register",
  components: {},
  data() {
    return {
      id: 0,
      email: '',
      password: '',
      repeat_password: '',
      full_name: '',
      rol: 0,
      formErrors: [],
      Role:'Cliente',
      options:['Cliente','Empresa']
    }
  },
  methods: {
    isValidEmail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    },

    isPasswordStrong(password) {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      return pattern.test(password);
    },

    isValidName(name) {
      return name.length > 2;
    },

    async isEmailAlreadyRegistered(email) {
      try {
        const users = await AuthService.getAllUsers();
        return users.data.find(user => user.email === email) !== undefined;
      } catch (error) {
        console.error("Failed to fetch users", error);
        return false;
      }
    },

    goToLogin() {
      this.$router.push({ path: '/login' });
    },
    changeRol() {
      this.Company = !this.Company;
      this.Client = !this.Client;
    },
    async Register() {
      this.formErrors = [];

      /*const emailRegistered = await this.isEmailAlreadyRegistered(this.email);
      if (emailRegistered) {
        this.formErrors.push('El email ya está registrado.');
      }*/

      if (!this.isValidEmail(this.email)) {
        this.formErrors.push('El email no es válido.');
      }

      if (!this.isPasswordStrong(this.password)) {
        this.formErrors.push('La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula y un número.');
      }

      if (!this.isValidName(this.full_name)) {
        this.formErrors.push('El nombre completo debe tener más de dos caracteres.');
      }

      if (this.password !== this.repeat_password) {
        this.formErrors.push('Las contraseñas no coinciden.');
      }
      if (this.formErrors.length === 0) {

        if(this.Role==='Cliente'){
          this.rol=1;
        }else{
          this.rol=0;
        }

        const signUpUser= new SignUpUser(this.email,this.password,this.rol)

        AuthService.registerUser(signUpUser).then(response=>{
          console.log(response.data)
        })

        this.$router.push({ path: '/login' });
      } else {
        console.log(this.formErrors);
      }
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
          <div v-if="formErrors.length > 0">
            <ul>
              <li v-for="error in formErrors" :key="error" style="color: red;">{{ error }}</li>
            </ul>
          </div>
          <br>
          <form @submit.prevent="Register" class="login-form">
            <div class="form-group">
              <input v-model="full_name" type="text" placeholder="Nombre Completo" class="input" id="full-name">
            </div>
            <div class="form-group">
              <input v-model="email" type="text" placeholder="Correo electrónico" class="input" id="email">
            </div>
            <div class="form-group">
              <input v-model="password" type="password" placeholder="Contraseña" class="input" id="password">
            </div>
            <div class="form-group">
              <input v-model="repeat_password" type="password" placeholder="Repetir contraseña" class="input" id="repeat_password">
            </div>
            <div class="form-group-select-button">
              <pv-select-button v-model="Role" :options="options" style="padding: 5px" />
            </div>
            <pv-button label="Registrar" class="submit-button" style="background-color: #6FA9AE" type="submit"></pv-button>
          </form>
        </div>
      </template>
    </pv-card>

  </div>
</template>

<style scoped>
.form-group-select-button{
  margin: auto auto 10px auto;
  background-color: #6FA9AE;
  border-width: 0;
  border-color: inherit;
  border-radius: 5px;
}

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
  background: #fbfbfb;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-width: 0;
  height: 30px;
  border-color: inherit;
  border-radius: 10px;
}

.button-a {
  background-color: #6FA9AE;
  border-width: 0;
  height: 30px;
  border-color: inherit;
  border-radius: 10px;
}
.button-b {
  background-color: gray;
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