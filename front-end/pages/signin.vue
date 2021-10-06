<template>
  <div id="container" style="background-color: #f6f6f6; height: 100vh">
    <b-container>
      <div id="contain" class="d-flex flex-column justify-content-center align-items-center">
        <H1>Inicio de sesion</H1>
        <b-card class="shadow-lg p-4">
          <b-card-body class="p-x position-relative">
            <form @submit.prevent="signin">
              <b-row>
                <b-col class="col-12 col-sm-6 px-5">
                  <label class="col-form-label fs-2 font-weight-light" for="codStudent"
                         style="color: rgba(73, 80, 87, 1);">Codigo de estudiante</label>
                  <input id="codStudent" v-model="userCode" class="form-control fs-2 my-3"
                         placeholder="Ingresa el codigo de estudiante"
                         required type="number">
                </b-col>
                <b-col class="col-12 col-sm-6 px-5">
                  <label class="col-form-label fs-2 font-weight-light" for="password"
                         style="color: rgba(73, 80, 87, 1);">Contraseña</label>
                  <input id="password" v-model="userPassword" class="form-control fs-2 my-3"
                         placeholder="Ingresa tu contraseña"
                         required type="password">
                </b-col>
              </b-row>
              <b-row>
                <b-col class="col-12 px-5 d-flex flex-column align-items-center">
                  <b-button class="btn-outline-none border-0 fs-3 w-100 my-3" type="submit">Iniciar Sesion</b-button>
                </b-col>
              </b-row>
            </form>
          </b-card-body>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Sigin",
  data: () => ({
    userCode: null,
    userPassword: null,
    SIGN_IN_PATH: 'https://agendamientouis.herokuapp.com/usuarios/singIn',
    error: false,
    student: {}
  }),
  methods: {
    authSigin(code, password) {
      const user = {
        'usuario': code,
        'pasword': password,
      }
      return axios.post(this.SIGN_IN_PATH, user)
    },
    async signin() {
      await this.authSigin(this.userCode, this.userPassword)
        .then(res => (this.student = res.data))
      window.location.href = 'profile'
      this.$cookies.set('userLogged', this.student)
    },
    getUserLogged() {
      return this.$cookies.get('userLogged');
    }
  }
}
</script>

<style scoped>

.card {
  border-radius: 10px !important;
}

.card-header {
  border-radius: 10px !important;
}

.card-body {
  padding: 0;
}

.header-img {
  width: 175px;
  height: 150px;
}

.avatar-sign-in {
  top: -30px;
}

@media (max-height: 999px) {
  #contain {
    padding: 90px 0;
  }
}

@media (min-height: 1000px) {
  #contain {
    padding: 90px 0;
  }
}
</style>
