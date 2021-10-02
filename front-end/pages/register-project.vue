<template>
  <div>
    {{ payload }}-
    <section class='d-flex flex-column align-items-center justify-content-center'>
      <div class='d-flex align-items-center'>
        <button v-if='stepCounter>1'
                class='d-flex btn btn-outline-none border-none shadow-none justify-content-center me-lg-5 me-md-5 me-sm-3 me-0'
                @click='stepCounter-=1'>
          <span><img src='/elements/before-dark.svg' width='30' alt='regresar'></span>
        </button>
        <h1 class='text-center text-alegraya text-yellow text-primary-title'>Registro de emprendimiento</h1>
      </div>
      <p v-if='stepCounter===1' class='text-center fw-bold text-description'>Datos del emprendimiento o empresa</p>
    </section>
    <form class='container' @submit.prevent='nextStep'>
      <section class='row d-flex justify-content-center align-items-center'>

        <step-one v-if='stepCounter === 1' v-model='payload' />
        <step-two v-if='stepCounter === 2' v-model='payload' />
        <step-three v-if='stepCounter === 3' v-model='payload' />

        <div class='text-center my-5'>
          <button v-if='stepCounter>1' type='button' role='button'
                  class='btn btn-join text-description text-center text-white fw-bold px-4 mx-2'
                  @click='stepCounter-=1'>
            REGRESAR
          </button>
          <button v-if='stepCounter<=2' role='button'
                  class='btn btn-join text-description text-center text-white fw-bold px-4 mx-2'
                  type='submit'>
            SIGUIENTE
          </button>
          <button v-if='stepCounter===3' type='submit'
                  class='btn btn-join text-description text-center text-white fw-bold px-4 mx-2'>
            GUARDAR
          </button>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import { API } from 'aws-amplify'

export default {
  name: 'RegisterProject',
  data: () => ({
    payload: {
      state: {}

    },
    stepCounter: 1
  }),
  methods: {
    nextStep() {
      if (this.stepCounter === 3) {
        this.submit()
      } else {
        this.stepCounter += 1
      }
    },
    submit() {

      const body = this.payload
      if (!body.personalData) {
        alert('Acepte el uso de datos personales')
        return
      }

      if (!body.privacyData) {
        alert('Acepte la politica de privacidad')
        return
      }
      delete body.personalData
      delete body.privacyData
      body.state = body.state.departamento
      body.categoryId = String(body.categoryId)

      const apiName = 'emprendimientos'
      const path = '/emprendimientos'
      const payload = {
        body,
        response: true
      }
      console.log('payload')
      console.log(payload)
      API
        .post(apiName, path, payload)
        .then(response => {
          // Add your code here
          console.log('response')
          console.log(response)
          this.payload = {
            state: {}
          }
        })
        .catch(error => {
          console.log('error')
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
