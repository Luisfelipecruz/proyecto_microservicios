<template>
  <div>
    <div class="h-100">
      <section
        class="d-flex justify-content-center"
        style="margin-bottom: 60px"
      >
        <h1 class="text-primary-title text-alegraya text-red">
          Iniciar Sesión
        </h1>
      </section>

      <section class="container mb-5 w-100">
        <div class="row justify-content-center">
          <div class="col-5 justify-content-center">
            <validation-alert v-if="error" color="danger">
              <p>{{ error.message }}</p>
            </validation-alert>
            <validation-alert v-if="responseMessage" color="success">
              <p>{{ responseMessage.message }}</p>
            </validation-alert>
            <template v-if="needsConfirmation">
              <div class="alert alert-warning">
                <h2>
                  Ingresa el codigo de verificación enviado a tu correo
                  electronico
                </h2>
                <form class='d-flex m-3 pt-3' @submit.prevent="confirmUser">
                  <input
                    v-model="verificationCode"
                    class='form-control'
                    type="text"
                    placeholder="Codigo de Confirmación"
                  />
                  <button class="btn btn-primary ms-3" type="submit">Confirmar</button>
                </form>
              </div>
            </template>
          </div>
        </div>
        <form
          class="row flex-column align-items-center"
          @submit.prevent="signIn"
        >
          <div class="col-7 my-3">
            <label for="userFormControl" class="form-label text-description"
            >Usuario:</label
            >
            <input
              id="userFormControl"
              v-model="credentials.email"
              class="form-control p-3 fs-4"
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="col-7 mt-3">
            <label for="passwordFormControl" class="form-label text-description"
            >Contraseña</label
            >
            <input
              id="passwordFormControl"
              v-model="credentials.password"
              class="form-control p-3 fs-4"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div class="d-flex justify-content-center my-3">
            <nuxt-link class="fs-4 text-dark text-decoration-none mx-5" to="/"
            >¿Olvidaste tu contraseña?
            </nuxt-link
            >
            <nuxt-link
              class="fs-4 text-dark text-decoration-none mx-5"
              to="/register"
            >Registrarse
            </nuxt-link
            >
          </div>
          <div class="text-center mb-5 mt-5">
            <button
              class="
                btn btn-join
                text-white text-uppercase text-description text-center
                fw-bold
                px-5
              "
              type="submit"
            >
              Ingresar
            </button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import {Auth} from 'aws-amplify'

export default {
  name: 'Auth',
  data: () => ({
    error: null,
    responseMessage: null,
    verificationCode: null,
    needsConfirmation: false,
    credentials: {
      email: null,
      password: null,
    },
  }),
  async mounted() {
    // const user = await Auth.currentAuthenticatedUser()
    // console.log(user)
  },
  methods: {
    confirmUser() {
      Auth.confirmSignUp(this.credentials.email, this.verificationCode)
        .then((response) => {
          console.log(response)
          if (response === 'SUCCESS') {
            this.responseMessage = {
              message:
                'La cuenta ha sido verificada exitosamente, ahora inicie sesión.',
            }
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
    signIn() {
      if (!this.credentials.password) {
        alert('La contraseña es requerida')
      }
      Auth.signIn({
        username: this.credentials.email,
        password: this.credentials.password,
      })
        .then((data) => {
          this.$router.push({name: 'profile'})
          this.$nuxt.$emit('updateIsLoggedIn')
        })
        .catch((error) => {
          this.error = error
          if (error.code === 'UserNotConfirmedException') {
            this.needsConfirmation = true
          }
        })
    },
  },
}
</script>

<style scoped lang="scss">
::placeholder {
  font-size: 1.5rem;
}

select {
  font-size: 1.5rem;

  option {
    font-size: 1.5rem;
  }
}
</style>
