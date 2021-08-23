<template>
  <div>
    <navbar/>
    <section class="my-5">
      <div class="container-sm">
        <div class="w-1/2">
          <form>
            <label for="cityName" class="form-label"><strong>Buscar ciudad</strong></label>
            <input id="cityName" v-model="city" type="text" class="form-control" placeholder="Buscar ciudad">
            <button type="button" class="btn btn-primary my-1" @click="fetchWeather() ; fetchTime()">Buscar</button>
          </form>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-12" v-if="typeof weather.main != 'undefined'">
            <p class="fs-4">{{ time.date_time_txt }}</p>
            <h3 class="fs-1 fw-bold">{{ weather.name }}, {{ weather.sys.country }}</h3>
            <h4 class="fs-3">Coordenadas<p>Lat: {{ weather.coord.lat }} Lon: {{ weather.coord.lon }}</p></h4>
            <hr class="md:w-1/4 w-1/2">
            <br>
            <p class="fs-1">{{ Math.round(weather.main.temp) }}°C</p>
            <p class="fs-1 text-uppercase">{{ weather.weather[0].description }}</p>
            <p class="fs-4">Sensacion termica {{ Math.round(weather.main.feels_like) }}°C</p>
            <article>
              <section class="d-flex  justify-content-start">
                <div class="container px-0">
                  <div class="row  w-75">
                    <div class="col-12 col-sm-6">
                      <p><strong>Humedad: </strong>{{ weather.main.humidity }}%</p>
                    </div>
                    <div class="col-12 col-sm-6">
                      <p><strong>Presion: </strong>{{ weather.main.pressure }} hPa</p>
                    </div>
                    <div class="col-12 col-sm-6">
                      <p><strong>Velocidad del viento: </strong>{{ weather.wind.speed }} m/s</p>
                    </div>
                    <div class="col-12 col-sm-6">
                      <p><strong>Visibildad: </strong>{{ weather.visibility }} m</p>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data() {
    return {
      city: null,
      API_KEY: 'c1aefd0770a9f2bd47f79413ae1e670e',
      URL_BASE: 'https://api.openweathermap.org/data/2.5/',
      TIME_KEY: '3d557a3d716344dbba531d06379353d8',
      TIME_URL: 'https://api.ipgeolocation.io/timezone?',
      weather: {},
      time: {}

    }
  },
  methods: {
    fetchWeather() {
      fetch(`${this.URL_BASE}weather?q=${this.city}&units=metric&lang=es&appid=${this.API_KEY}`)
        .then(res => {
          return res.json();
        }).then(this.setWeather)
    },
    fetchTime() {
      fetch(`${this.TIME_URL}apiKey=${this.TIME_KEY}&location=${this.city}`)
        .then(response => {
          return response.json();
        }).then(this.setTime)
    },
    setWeather(data) {
      this.weather = data;
      // eslint-disable-next-line no-console
      console.log(this.weather)
    },
    setTime(data) {
      this.time = data;
      // eslint-disable-next-line no-console
      console.log(this.time)
    }
  },
}
</script>

<style scoped>

</style>
