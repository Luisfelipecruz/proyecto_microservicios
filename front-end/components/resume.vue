<template>
  <div class="container">
    <div class="header">
      <p class="font-weight-light text-d-primary">
        Lista de personas que asistiran a clase presencial esta semana
      </p>
      <b-col class="col-12">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <p class="font-weight-light text-s-primary">1. Seleccione la materia</p>
          <form class="d-flex flex-column justify-content-center align-items-center" @submit.prevent="table">
            <select v-model="data.assignature" class="form-select p-1 text-s-primary font-weight-light w-100 px-3"
                    aria-label="choose schedule">
              <option selected>Seleccione la materia</option>
              <option v-for="(assignature, i) in assignatures" :key="i" :value="assignature">{{
                  assignature.nombre
                }}
              </option>
            </select>
            <b-button type="submit" class="bg-transparent text-dark my-3">Enviar</b-button>
          </form>
        </div>
      </b-col>
      <b-col class="col-12 my-5">
        <b-table striped hover :items="items"></b-table>
      </b-col>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Resume",
  props: ['value'],
  data: () => ({
    assignatures: [],
    items: []
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
    this.getUserCode()
    this.getAssignature()
  },
  methods: {
    getUserCode() {
      return this.$cookies.get('userLogged').CodEst
    },
    authAssignature(code) {
      const body = {
        'CodEst': code
      }
      return axios.post('https://agendamientouis.herokuapp.com/usuarios/bucarMateriasEstudiante', body)
    },
    async getAssignature() {
      await this.authAssignature(this.$cookies.get('userLogged').CodEst)
        .then(res => console.log(this.assignatures = res.data))
    },
    getTable(code) {
      const body = {
        'idMat': code
      }
      return axios.post('https://agendamientouis.herokuapp.com/agendamiento/ReservasSemanaMateria', body)
    },
    async table() {
      await this.getTable(this.data.assignature.idMat)
        .then(res => (this.items = res.data))
    }
  }
}
</script>

<style scoped>

</style>
