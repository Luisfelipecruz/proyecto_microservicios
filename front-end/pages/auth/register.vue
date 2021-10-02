<template>
  <div>
    <h2>Auth</h2>
    <hr>
    <form @submit.prevent='signUp'>
      <input v-model='credentials.email' type='email' placeholder='Email'>
      <input v-model='credentials.password' type='password' placeholder='Contraseña'>
      <button type='submit'>Registrar</button>
    </form>
    <validation-alert v-if='errors.length' color='danger'>
      <p v-for='(error,i) in errors' :key='i'>
        Error: {{ error.message }}
      </p>
    </validation-alert>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Auth',
  data: () => ({
    errors: [],
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
    validateInputs() {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/
      const res = regex.exec(this.credentials.password)
      console.log('res')
      console.log(res)
    },
    async signUp() {
      this.validateInputs()
      try {
        const { user } = await Auth.signUp({
          username: this.credentials.email,
          password: this.credentials.password,
          attributes: {
            email: this.credentials.email,          // optional
            phone_number: '+573107665574'   // optional - E.164 number convention
            // other custom attributes
          }
        })
        console.log(user)
      } catch (error) {
        console.log('error signing up:', error)
        this.errors.push(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
