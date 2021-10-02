<template>
  <div>
    <h2>Auth</h2>
    <hr>
    <button @click="signUp">Registrar</button>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'auth',
  async mounted() {
    // const user = await Auth.currentAuthenticatedUser()
    // console.log(user)
  },
  methods: {
    async signUp() {
      try {
        const { user } = await Auth.signUp({
          username: 'jonitiso',
          password: '12345678',
          attributes: {
            email: 'jonitiso@gmail.com',          // optional
            phone_number: '+573107665574',   // optional - E.164 number convention
            // other custom attributes
          }
        });
        console.log(user);
      } catch (error) {
        console.log('error signing up:', error);
      }
    }
  }
}
</script>

<style scoped>

</style>
