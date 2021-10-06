<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="col-12">
          <div class="d-flex flex-column align-items-center justify-content-center">
            <p class="font-weight-light text-s-primary">Encuentre la ruta mas corta para llegar a su edificio UIS</p>
            <form class="d-flex flex-column justify-content-center align-items-center" @submit.prevent="submit">
              <b-container>
                <b-row>
                  <b-col sm="6">
                    <select v-model="data.buildingI" class="form-select p-1 text-s-primary font-weight-light w-100 px-3"
                            aria-label="choose schedule">
                      <option selected disabled>Seleccione el edificio</option>
                      <option v-for="(build, i) in buildingsI" :key="i" :value="build.nodoEntrada">
                        {{ build.nombreEdificio }} {{ build.nodoEntrada }}
                      </option>
                    </select>
                  </b-col>
                  <b-col sm="6">
                    <select v-model="data.buildingF" class="form-select p-1 text-s-primary font-weight-light w-100 px-3"
                            aria-label="choose schedule">
                      <option selected disabled>Seleccione el edificio</option>
                      <option v-for="(build, i) in buildingsF" :key="i" :value="build.nodoEntrada">
                        {{ build.nombreEdificio }} {{ build.nodoEntrada }}
                      </option>
                    </select>
                  </b-col>
                  <b-col class="font-weight-light" style="font-size: calc(2rem + 0.1vw)"
                         v-if="this.respuesta != undefined">
                    Ruta optima: {{ respuesta }}
                  </b-col>
                </b-row>
              </b-container>
              <b-button type="submit" class="bg-transparent text-dark my-3">Enviar</b-button>
            </form>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="d-flex justify-content-center">
      <iframe src="/kepler.gl.html" width="1800" height="600"></iframe>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Routes",
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
  data: () => ({
    buildingsI: [],
    buildingsF: [],
    respuesta: []
  }),
  computed: {
    data: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  mounted() {
    this.constructBuildings()
  },
  methods: {
    async submit() {
      await this.authSubmit(this.data.buildingI, this.data.buildingF)
        .then(res => (this.respuesta = res.data))
    },
    authSubmit(nodoI, nodoF) {
      const struct = {
        "Pnt_inicial": nodoI,
        "Pnt_final": nodoF
      }
      console.log(struct)
      return axios.post('https://agendamientouis.herokuapp.com/grafoUIS/grafoCaminoMasCorto', struct)
    },
    getBuildings() {
      return axios.get('https://agendamientouis.herokuapp.com/grafoUIS/listarEdificios')
    },
    async constructBuildings() {
      await this.getBuildings()
        .then(res => (this.buildingsI = res.data))
      this.buildingsF = this.buildingsI
    }
  }
}
</script>

<style scoped>

</style>
