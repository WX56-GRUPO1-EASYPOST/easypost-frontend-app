<script>
import AuthService from '../services/authService.js';
import {SignInUserEntity} from "../model/sign-in-user.entity.js";
import ProfilesService from "../services/profiles.service.js";
export default {
  name: "login",
  data() {
    return {
      correo_electronico: '',
      contrasena: '',
      loginError: false,
      emailError: ''
    }
  },
  computed: {
    isFormValid() {
      return this.correo_electronico && this.contrasena && this.emailError==='';
    }
  },
  methods: {
    validateEmail() {
      let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!this.correo_electronico.match(regex)) {
        this.emailError = 'Correo electrónico no válido';
      } else {
        this.emailError = '';
      }
    },
    async login() {
      if (!this.isFormValid) return;
      const singInUser = new SignInUserEntity(this.correo_electronico,this.contrasena)
      const response = await AuthService.loginUser(singInUser);
      console.log(response.data)
      const user = response.data;
      this.loginError = !user;
      if (user) {
        const currentUser = {
          id:user.id
        }
        const userToken = user.token;
        localStorage.setItem("user", JSON.stringify(currentUser))
        localStorage.setItem("token",userToken)
        const profile = await ProfilesService.GetProfileByUserId(user.id)
        localStorage.setItem("userRole",profile.data.type)
        console.log(profile.data.type)
        this.$router.push({path: currentUser.role === 'Company' ? '/enterprise-home' : '/client-home'});
      }
    }
  }
}
</script>


<template>
  <div class="structure">
    <pv-card class="form-card">
      <template #content>
        <div class="card-content">
          <div class="img-container">
            <img src="../../assets/logo-register.png" alt="img-card-logo">
            <div class="label-container">
              <b>EasyPost</b>
            </div>
          </div>
          <div class="form-container">
            <div style="text-align: center; font-size: 1.3em"><b>Ingrese a su cuenta</b></div>
            <div class="error-message" :style="{ visibility: loginError ? 'visible' : 'hidden' }">
              Correo electrónico o contraseña no válidos.
            </div>
            <br>
            <br>
            <form class="login-form">

              <div>
                <pv-float-label>
                <pv-input-text @input="validateEmail"  v-model="correo_electronico" type="text" id="email" />
                <label for="email">Correo electrónico</label>
                </pv-float-label>
                <div class="error-message" :style="{ visibility: emailError ? 'visible' : 'hidden' }">{{ emailError }}</div>
              </div>
              <div>
                <pv-float-label>
                  <pv-input-text v-model="contrasena" type="password" id="password" />
                  <label for="password">Contraseña</label>
                </pv-float-label>
              </div>
              <pv-button :disabled="!isFormValid" label="Ingresar" @click="login" raised></pv-button>
            </form>
            <h4>¿No tienes una cuenta?</h4>
            <router-link to="/register"><pv-button label="Crear cuenta" severity="secondary" raised /></router-link>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>


<style scoped>
.structure {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../../assets/workman.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 0;
  font-family: Helvetica, sans-serif;
}

.form-card {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("../../assets/register-login-image.png");
}

.card-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 55em;
  gap: 6em;
  height: 70vh;
}

.img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position:relative;
}
.label-container{
  font-size: 3.5em;
  font-weight: bold;
  color: #101010;
  margin-top: 1em;
  margin-bottom: 1em;
  position:absolute;
  top:65%;
}
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:white;
  height:100%;
  min-width:70%;
  border-radius: 20px;
  box-shadow: -13px 20px 37px 4px rgba(0,0,0,0.48);
  -webkit-box-shadow: -13px 20px 37px 4px rgba(0,0,0,0.48);
  -moz-box-shadow: -13px 20px 37px 4px rgba(0,0,0,0.48);
}
.login-form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
}
@media (max-width: 768px) {
  .card-content {
    flex-direction: column;
  }

  .img-container, .form-container {
    width: 100%;
  }
  .form-container{
    min-width:50%;
  }
}
@media (max-width: 1440px) {
  .img-container{
    width: 80%;
  }
  .form-container{
    min-width:70%;
  }
}
@media (max-width: 1024px) {
  .img-container{
    width: 50%;
  }
  .form-container{
    min-width:50%;
  }
}
.error-message {
  color: red;
  text-align: center;
}

</style>
