<template>
  <div id="container" style="height: 100vh">
    <section class="pt-32">
      <div class="container-sm">
        <div>
          <div class="d-flex align-items-end p-2 rounded-3" style="border: 1px solid white">
            <form>
              <label class="form-label fs-2 fw-light text-white" for="cityName">Buscar ciudad</label>
              <input id="cityName" v-model="city" class="form-control bg-transparent rounded-pill d-inline-block border-white text-white text-shadow"
                     placeholder="Buscar ciudad"
                     type="text">
            </form>
            <button class="btn btn-outline-light rounded-pill py-3 mx-2 d-flex align-items-center justify-content-center"
                    style="width: 90px; height: 40px"
                    type="button" @click="getWeather();getTime()">
              Buscar
            </button>
          </div>
        </div>
        <div id="forecast-container" class="d-flex flex-column align-items-center">
          <div v-if="typeof weather.main != 'undefined' "
               class="d-flex p-3">
            <p v-show="false">{{ weather }}</p>
            <div v-if="weather.weather[0].main == 'Clouds'" class="nuboso">
              <img alt="nubes" src="/status/nubes.png">
            </div>
            <div v-if="weather.weather[0].main =='Rain'" class="lluvia">
              <img alt="lluvia" class="img-fluid" src="/status/lluvia.png">
            </div>
            <div v-if="weather.weather[0].main =='Clear'" class="despejado">
              <img alt="lluvia" class="img-fluid" src="/status/despejado.png">
            </div>
          </div>
          <div v-if="typeof weather.main == 'undefined'"
               class="d-flex p-3">
            <p v-show="false">{{ weather.data }}</p>
            <div v-if="typeof weather.data != 'undefined'">
              <div v-if="weather.data.weather[0].main == 'Clouds'" class="nuboso">
                <img alt="nubes" src="/status/nubes.png">
              </div>
              <div v-if="weather.data.weather[0].main =='Rain'" class="lluvia">
                <img alt="lluvia" class="img-fluid" src="/status/lluvia.png">
              </div>
              <div v-if="weather.data.weather[0].main =='Clear'" class="despejado">
                <img alt="lluvia" class="img-fluid" src="/status/despejado.png">
              </div>
            </div>
          </div>
          <div class="row px-1">
            <div v-if="typeof weather.main != 'undefined'" class="col-12">
              <div class="forecast-box mt-3 py-3 rounded-3">
                <p class="fs-6 text-white text-shadow text-center">Hoy, {{ time.date_time_txt }}</p>
                <h3 class="fs-1 fw-bold text-center text-white text-shadow">{{ weather.name }}, {{
                    weather.sys.country
                  }}</h3>
                <p class="text-8xl text-white text-shadow text-center">{{ Math.round(weather.main.temp) }}°C</p>
                <p class="fs-1 text-uppercase text-white text-shadow text-center fw-light">
                  {{ weather.weather[0].description }}</p>
                <article>
                  <section class="d-flex  justify-content-start">
                    <div class="container px-0">
                      <div class="row">
                        <div class="col-12 col-sm-12 d-flex justify-content-center">
                          <p class="text-white text-shadow fw-light"><strong>Humedad: </strong>{{
                              weather.main.humidity
                            }}%</p>
                        </div>
                        <div class="col-12 col-sm-12 d-flex justify-content-center">
                          <p class="text-white text-shadow fw-light"><strong>Velocidad del
                            viento: </strong>{{ weather.wind.speed }} m/s</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </article>
              </div>
            </div>
            <div v-if="typeof weather.main == 'undefined'" class="col-12">
              <div class="forecast-box mt-3 py-3">
                <p v-show="false">{{ weather.data }}</p>
                <div v-if="typeof weather.data != 'undefined'">
                  <p v-show="false">{{ time.data }}</p>
                  <div v-if="typeof time.data != 'undefined'">
                    <p class="fs-6 text-white text-shadow text-center">Hoy, {{ time.data.date_time_txt }}</p>
                  </div>
                  <h3 class="fs-1 fw-bold text-center text-white text-shadow">{{ weather.data.name }},
                    {{ weather.data.sys.country }}</h3>
                  <p class="text-8xl text-white text-shadow text-center">{{ Math.round(weather.data.main.temp) }}°C</p>
                  <p class="fs-1 text-uppercase text-white text-shadow text-center fw-light">
                    {{ weather.data.weather[0].description }}</p>
                  <article>
                    <section class="d-flex  justify-content-start">
                      <div class="container px-0">
                        <div class="row">
                          <div class="col-12 col-sm-12 d-flex justify-content-center">
                            <p class="text-white text-shadow fw-light">
                              <strong>Humedad: </strong>{{ weather.data.main.humidity }}%</p>
                          </div>
                          <div class="col-12 col-sm-12 d-flex justify-content-center">
                            <p class="text-white text-shadow fw-light"><strong>Velocidad del
                              viento: </strong>{{ weather.data.wind.speed }} m/s</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Weather",
  layout: "default",
  data() {
    return {
      city: null,
      API_KEY: 'c1aefd0770a9f2bd47f79413ae1e670e',
      URL_BASE: 'https://api.openweathermap.org/data/2.5/',
      TIME_KEY: '3d557a3d716344dbba531d06379353d8',
      TIME_URL: 'https://api.ipgeolocation.io/timezone?',
      link: "https://www.openstreetmap.org/#map=12/4.6096/-74.0818",
      weather: {},
      time: {}
    }
  },
  mounted() {
    axios
      .get(`${this.URL_BASE}weather?q=Bogota&units=metric&lang=es&appid=${this.API_KEY}`)
      .then(data => (this.weather = data))
    axios.get(`${this.TIME_URL}apiKey=${this.TIME_KEY}&location=Bogota`)
      .then(response => (this.time = response))
  },

  methods: {
    async getWeather() {
      const {data} = await axios.get(`${this.URL_BASE}weather?q=${this.city}&units=metric&lang=es&appid=${this.API_KEY}`);
      this.weather = data;
    },
    async getTime() {
      const {data} = await axios.get(`${this.TIME_URL}apiKey=${this.TIME_KEY}&location=${this.city}`);
      this.time = data;
    }
  },

}
</script>

<style scoped>
#container {
  /* background: linear-gradient(192.05deg, #47BFDF 0%, #4A91FF 100%);*/
  background-image: url('/bacground-mobile.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

::placeholder {
  color: white;
}

.forecast-box {
  background: rgba(255, 255, 255, 0.3) !important;
  border: 1px solid white;
}

.text-shadow {
  text-shadow: -1.39839px 2.09758px 0.699193px rgba(0, 0, 0, 0.1);
}
</style>
