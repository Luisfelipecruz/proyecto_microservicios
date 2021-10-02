<template>
  <div>
    <h2>Auth</h2>
    <hr>
    <form @submit.prevent='signIn'>
      <input v-model='credentials.email' type='email' placeholder='Email'>
      <input v-model='credentials.password' type='password' placeholder='Contraseña'>
      <button type='submit'>Iniciar sesion</button>
    </form>

    <template v-if='needsConfirmation'>
      <h2>Ingresa el codigo de verificacion enviado a tu correo electronico</h2>
      <form @submit.prevent='confirmUser'>
        <input v-model='verificationCode' type='text' placeholder='Codigo de Confirmación'>
        <button type='submit'>Confirmar</button>
      </form>
    </template>

    <validation-alert v-if='error' color='danger'>
      <p>{{ error.message }}</p>
    </validation-alert>
    <validation-alert v-if='responseMessage' color='success'>
      <p>{{ error.message }}</p>
    </validation-alert>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Auth',
  data: () => ({
    error: null,
    responseMessage: null,
    verificationCode: null,
    needsConfirmation: false,
    credentials: {
      email: null,
      password: null
    }
  }),
  async mounted() {
    // const user = await Auth.currentAuthenticatedUser()
    // console.log(user)
  },
  methods: {
    confirmUser() {
      Auth.confirmSignUp(this.credentials.email, this.verificationCode).then((response) => {
        console.log(response)
        if (response === 'SUCCESS') {
          this.responseMessage = {
            message: 'La cuenta ha sido verificada exitosamente, ahora inicie sesión.'
          }
        }

      }).catch((error) => {
        console.error(error)
      })
    },
    signIn() {
      Auth.signIn({
        username: this.credentials.email,
        password: this.credentials.password
      }).then((data) => {
        this.$router.push({name: 'profile'})
      }).catch((error) => {
        this.error = error
        if (error.code === 'UserNotConfirmedException') {
          this.needsConfirmation = true
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
