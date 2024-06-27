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
      rol: '',
      Description: "Añadir descripción",
      Ruc        : "",
      Phone      : "",
      Department : "",
      District   : "",
      Residential: "",
      formErrors: [],
      Role:'Client',
      options:['Client','Company']
    }
  },
  computed: {
    isFormValid() {
      return this.full_name && this.email && this.isValidEmail(this.email) && this.password && this.repeat_password && this.password === this.repeat_password && this.Role;
    }
  }
  ,
  methods: {
    validateFullName() {
      if (!this.full_name) {
        this.formErrors['full_name'] = 'El nombre completo es requerido.';
      } else if (this.full_name.length < 3 || this.full_name.length > 30) {
        this.formErrors['full_name'] = 'El nombre completo debe tener entre 3 y 15 caracteres.';
      } else {
        this.formErrors['full_name'] = '';
      }
    },
    // ...
    validateEmail() {
      if (!this.email) {
        this.formErrors['email'] = 'El correo electrónico es requerido.';
      } else if (!this.isValidEmail(this.email)) {
        this.formErrors['email'] = 'El correo electrónico no es válido.';
      } else {
        this.formErrors['email'] = '';
      }
    },
    validateRuc() {
      if (!this.Ruc) {
        this.formErrors['Ruc'] = 'El Ruc es requerido.';
      } else if (!/^\d+$/.test(this.Ruc)) {
        this.formErrors['Ruc'] = 'El Ruc solo debe contener números.';
      } else {
        this.formErrors['Ruc'] = '';
      }
    },
    validatePhone() {
      if (!this.Phone) {
        this.formErrors['Phone'] = 'El teléfono es requerido.';
      } else if (!/^\d+$/.test(this.Phone)) {
        this.formErrors['Phone'] = 'El teléfono solo debe contener números.';
      } else {
        this.formErrors['Phone'] = '';
      }
    },
    validateDepartment() {
      if (!this.Department) {
        this.formErrors['Department'] = 'El departamento es requerido.';
      } else {
        this.formErrors['Department'] = '';
      }
    },
    validateDistrict() {
      if (!this.District) {
        this.formErrors['District'] = 'El distrito es requerido.';
      } else {
        this.formErrors['District'] = '';
      }
    },
    validateResidential() {
      if (!this.Residential) {
        this.formErrors['Residential'] = 'El residencial es requerido.';
      } else {
        this.formErrors['Residential'] = '';
      }
    },
    validatePassword() {
      if (!this.password) {
        this.formErrors['password'] = 'La contraseña es requerida.';
      } else if (!this.isPasswordStrong(this.password)) {
        this.formErrors['password'] = 'La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula y un número.';
      } else {
        this.formErrors['password'] = '';
      }
    },
    validateRepeatPassword() {
      if (!this.repeat_password) {
        this.formErrors['repeat_password'] = 'Repetir contraseña es requerido.';
      } else if (this.password !== this.repeat_password) {
        this.formErrors['repeat_password'] = 'Las contraseñas no coinciden.';
      } else {
        this.formErrors['repeat_password'] = '';
      }
    },
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


      if (!this.full_name) {
        this.formErrors.push('El nombre completo es requerido.');
      } else if (this.full_name.length < 3 || this.full_name.length > 30) {
        this.formErrors.push('El nombre completo debe tener entre 3 y 15 caracteres.');
      }

      if (!this.email) {
        this.formErrors.push('El correo electrónico es requerido.');
      } else if (!this.isValidEmail(this.email)) {
        this.formErrors.push('El correo electrónico no es válido.');
      }

      if (!this.password) {
        this.formErrors.push('La contraseña es requerida.');
      } else if (!this.isPasswordStrong(this.password)) {
        this.formErrors.push('La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula y un número.');
      }

      if (!this.repeat_password) {
        this.formErrors.push('Repetir contraseña es requerido.');
      } else if (this.password !== this.repeat_password) {
        this.formErrors.push('Las contraseñas no coinciden.');
      }

      if (!this.Ruc) {
        this.$set(this.formErrors, 'Ruc', 'El Ruc es requerido.');
      }

      if (!this.Phone) {
        this.$set(this.formErrors, 'Phone', 'El teléfono es requerido.');
      }

      if (!this.Department) {
        this.$set(this.formErrors, 'Department', 'El departamento es requerido.');
      }

      if (!this.District) {
        this.$set(this.formErrors, 'District', 'El distrito es requerido.');
      }

      if (!this.Residential) {
        this.$set(this.formErrors, 'Residential', 'El residencial es requerido.');
      }
      if (!this.Role) {
        this.formErrors.push('El rol es requerido.');
      }

      if (this.formErrors.length === 0) {

        if(this.Role === 'Client'){
          this.rol="Client";
        }else{
          this.rol="Company";
        }

        const signUpUser= new SignUpUser(
            this.email,
            this.password,
            this.rol,
            this.full_name,
            this.Description,
            this.Ruc,
            this.Phone,
            this.email,
            this.Department,
            this.District,
            this.Residential
        )

        AuthService.registerUser(signUpUser).then(response=>{
          console.log(response.data)
        })
        console.log(signUpUser)

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
            <div style="text-align: center; font-size: 1.3em"><b>Registre su cuenta</b></div>
            <br>
            <br>
            <form class="register-form">
              <div style="display: flex; flex-direction:column; align-items:center;">
                <pv-float-label>
                  <pv-input-text v-model="full_name" type="text" id="full-name" @input="validateFullName" />
                  <label for="full-name">Nombre Completo</label>
                </pv-float-label>
                <div class="error-message">{{ formErrors['full_name'] }}</div>
              </div>
              <!-- ... -->
              <div>
                <pv-float-label>
                  <pv-input-text v-model="email" type="text" id="email" @input="validateEmail" />
                  <label for="email">Correo electrónico</label>
                </pv-float-label>
                <div class="error-message">{{ formErrors['email'] }}</div>
              </div>
              <div>
                <pv-float-label>
                  <pv-input-text v-model="Ruc" type="text" id="Ruc" @input="validateRuc" />
                  <label for="Ruc">Ruc</label>
                </pv-float-label>
                <div class="error-message">{{ formErrors['Ruc'] }}</div>
              </div>
              <div>
                <pv-float-label>
                  <pv-input-text v-model="Phone" type="text" id="Phone" @input="validatePhone" />
                  <label for="Phone">Teléfono</label>
                </pv-float-label>
                <div class="error-message">{{ formErrors['Phone'] }}</div>
              </div>
              <div>
                <pv-float-label>
                  <pv-input-text v-model="Department" type="text" id="Department" @input="validateDepartment" />
                  <label for="Department">Departamento</label>
                </pv-float-label>
                <div class="error-message">{{ formErrors['Department'] }}</div>
              </div>
              <div>
                <pv-float-label>
                  <pv-input-text v-model="District" type="text" id="District" @input="validateDistrict" />
                  <label for="District">Distrito</label>
                </pv-float-label>
                <div class="error-message">{{ formErrors['District'] }}</div>
              </div>
              <div>
                <pv-float-label>
                  <pv-input-text v-model="Residential" type="text" id="Residential" @input="validateResidential" />
                  <label for="Residential">Residencial</label>
                </pv-float-label>
                <div class="error-message">{{ formErrors['Residential'] }}</div>
              </div>
              <div style="display: flex; flex-direction:column; align-items:center;" >
                <pv-float-label>
                  <pv-input-text v-model="password" type="password" id="password" @input="validatePassword" />
                  <label for="password">Contraseña</label>
                </pv-float-label>
                <div class="error-message">{{ formErrors['password'] }}</div>
              </div>
              <div>
                <pv-float-label>
                  <pv-input-text v-model="repeat_password" type="password" id="repeat-password" @input="validateRepeatPassword" />
                  <label for="repeat-password">Repetir Contraseña</label>
                </pv-float-label>
                <div class="error-message">{{ formErrors['repeat_password'] }}</div>
              </div>
              <div style="display: flex;align-items: center;gap:1em">
                <label for="role">Rol</label>
                <pv-float-label>
                  <pv-select-button v-model="Role" :options="options" />

                </pv-float-label>
              </div>
              <pv-button :disabled="!isFormValid" label="Registrar" @click="Register" raised></pv-button>
            </form>
            <h4>¿Ya tienes una cuenta?</h4>
            <router-link to="/login"><pv-button label="Iniciar sesión" severity="secondary" raised /></router-link>
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
  height:130%;
  min-width:70%;
  border-radius: 20px;
  box-shadow: -13px 20px 37px 4px rgba(0,0,0,0.48);
  -webkit-box-shadow: -13px 20px 37px 4px rgba(0,0,0,0.48);
  -moz-box-shadow: -13px 20px 37px 4px rgba(0,0,0,0.48);
}
.register-form{
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
  font-size: 0.7em;
}

</style>