<template>
  <div class="container">
    <div class="row flex">
      <div class="col-auto info-container">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
              <b-button @click="isLogged" class="border-0 bg-transparent btn-outline-none shadow-none p-0">
                <figure class="rounded-sm" style="border: 1px solid gray">
                  <img alt="agendamiento" class="img-fluid" src="/widgets/calender.svg">
                </figure>
              </b-button>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
              <nuxt-link to="/">
                <figure class="rounded-sm" style="border: 1px solid gray">
                  <img alt="covid en colombia" class="img-fluid" src="/widgets/virus.svg">
                </figure>
              </nuxt-link>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
              <nuxt-link to="/weather">
                <figure class="rounded-sm" style="border: 1px solid gray">
                  <img alt="clima" class="img-fluid" src="/widgets/routes.svg">
                </figure>
              </nuxt-link>
            </div>
          </div>
          <div class="row">
            <div class="col-12 my-3">
              <div class="box d-flex justify-content-center align-items-center bg-gray-200 rounded-3">
                <p class="fs-1 text-uppercase">
                  resumen de agendamiento
                </p>
              </div>
            </div>
          </div>
          <b-conta8iner class="justify-content-center">
            <b-row id="covid-service" class="d-flex justify-content-center align-items-center">
              <b-col sm="12" md="4"
                     class="d-flex flex-column justify-content-center align-items-center position-relative">
                <img class="position-absolute" src="/states/people-fill.svg" width="50" alt="estado" style="top: 5px">
                <p class="text-white text-center position-absolute font-weight-light px-2"
                   style="font-size: calc(1rem + 0.2vw)">Casos
                  confirmados hoy <br> en Santander</p>
                <p v-show="false">{{ getData() }}</p>
                <div v-if="getData() != undefined" class="d-flex justify-content-center">
                  <p class="text-white text-center position-absolute font-weight-bolder px-2"
                     style="top:135px; font-size: 2rem">
                    {{ this.santander[1] }}</p>
                </div>
                <svg class="rounded-lg mx-2" xmlns="http://www.w3.org/2000/svg" width="250" height="250"
                     viewBox="0 0 380 380" fill="none">
                  <rect width="380" height="380" fill="rgb(51, 102, 204)"/>
                </svg>
              </b-col>
              <b-col sm="12" md="4"
                     class="d-flex flex-column justify-content-center align-items-center position-relative my-3 mx-md-3 mx-lg-0">
                <img class="position-absolute" src="/states/people-fill.svg" width="50" alt="estado" style="top: 5px">
                <p class="text-white text-center position-absolute font-weight-light px-2"
                   style="font-size: calc(1rem + 0.2vw)">Casos totales en Santander</p>
                <p v-show="false">{{ getData() }}</p>
                <div v-if="getData() != undefined" class="d-flex justify-content-center">
                  <p class="text-white text-center position-absolute font-weight-bolder px-2"
                     style="top:120px; font-size: 1.5rem">
                    {{ this.santander[5] }}</p>
                </div>
                <svg class="rounded-lg mx-2" xmlns="http://www.w3.org/2000/svg" width="250" height="250"
                     viewBox="0 0 380 380" fill="none">
                  <rect width="380" height="380" fill="rgb(95, 183, 229)"/>
                </svg>
              </b-col>
              <b-col sm="12" md="4"
                     class="d-flex flex-column justify-content-center align-items-center position-relative">
                <img class="position-absolute" src="/states/death-fill.svg" width="50" alt="estado"
                     style="top: 5px">
                <p class="text-white text-center position-absolute font-weight-light px-2"
                   style="font-size: calc(1rem + 0.2vw)">Fallecidos de hoy <br> en Santander</p>
                <p v-show="false">{{ getData() }}</p>
                <div v-if="getData() != undefined" class="d-flex justify-content-center">
                  <p class="text-white text-center position-absolute font-weight-bolder px-2"
                     style="top:135px; font-size: 2rem">
                    {{ this.santander_muertos[1] }}</p>
                </div>
                <svg class="rounded-lg mx-2" xmlns="http://www.w3.org/2000/svg" width="250" height="250"
                     viewBox="0 0 380 380" fill="none">
                  <rect width="380" height="380" fill="rgb(237, 30, 121)"/>
                </svg>
              </b-col>
            </b-row>
          </b-conta8iner>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Index',
  data: () => ({
    covid: {},
    santander: [],
    santander_muertos: []
  }),
  computed: {
    covidStates() {
      return this.$store.state.covid.list
    },
  },
  methods: {
    fetchData() {
      return axios.get('https://atlas.jifo.co/api/connectors/6ff7af44-3323-4e0a-b878-a4dd2853199e')
    },
    async getData() {
      await this.fetchData()
        .then(res => (this.covid = res.data))
      const newArray = this.covid.data[1]
      this.santander = (newArray[29])
      this.santander_muertos = (this.covid.data[2])[6];
    },
    isLogged() {
      if (this.$cookies.get('userLogged') === undefined) {
        this.$router.push('/signin')
      } else {
        window.location.href = 'schedule'
      }
    }
  },
}
</script>

<style>
:root {

}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  /* font-size: 62.5%;*/
}

.text-d-primary {
  font-size: calc(1rem + 0.1vw);
}

.text-d-primary {
  font-size: calc(2.5rem + 0.1vw);
}
</style>
