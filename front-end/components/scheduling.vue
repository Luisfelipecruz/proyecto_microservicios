<template>
  <div class="container">
    <div class="header">
      <h1 class="text-s-primary text-center font-weight-light mb-5">
        Agendamiento
        <p v-show="false">{{ getCodUser() }}</p>
      </h1>
    </div>
    <div class="contain">
      <form @submit.prevent="submit">
        <b-row>
          <b-col class="col-12 col-sm-6 px-5">
            <p class="text-d-primary font-weight-light">
              1. Seleccion la materia
            </p>
            <select v-model="data.assignature" class="form-select p-1 text-s-primary font-weight-light w-100" required
                    aria-label="choose assignature">
              <option selected>Seleccione una materia</option>
              <option v-for="(assignature, i) in assignatures" :key="i" :value="assignature">
                {{ assignature.nombre }}
              </option>
            </select>
          </b-col>
          <b-col class="col-12 col-sm-6 px-5">
            <p class="text-d-primary font-weight-light">2. Seleccione el horario</p>
            <select v-model="data.schedule" required class="form-select p-1 text-s-primary font-weight-light w-100"
                    aria-label="choose schedule">
              <option selected>Seleccione un horario</option>
              <option v-for="(schedule, i) in data.assignature.horario" :key="i" :value="schedule.idHorMatGrp">
                {{ schedule.DiaSemana }} {{ schedule.Horario }} {{ schedule.Edificio }} {{ schedule.Salon }}
              </option>
            </select>
          </b-col>
          <b-col class="col-12 px-5 my-5">
            <p class="text-d-primary font-weight-light">3. Confirme y finalice el proceso</p>
            <button class="bg-transparent border-0 font-weight-light" type="submit" style="font-size: 2rem">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                   class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
              </svg>
              Agendar
            </button>
          </b-col>
          <b-col class="col-12 my-5" style="overflow-x: scroll; overflow-y: scroll">
            <b-table striped hover :items="items"></b-table>
          </b-col>
          <b-col class="col-12 my-3 d-flex justify-content-center">
            <nuxt-link to="/resumen">
              <span class="text-center">Resumen</span>
            </nuxt-link>
          </b-col>
        </b-row>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Scheduling",
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
  data: () => ({
    assignatures: [],
    assings: {},
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
    this.getCodUser()
    this.table()
  },
  methods: {
    getSchedule(code) {
      const user = {
        'CodEst': code,
      }
      return axios.post('https://agendamientouis.herokuapp.com/usuarios/bucarMateriasEstudianteHorario', user)
    },
    async getCodUser() {
      await this.getSchedule(this.$cookies.get('userLogged').CodEst)
        .then(res => (this.assignatures = res.data))
    },
    autSubmit(bool, idmatgrp, iduser) {
      const body = {
        'Asistira': bool,
        'idHorMatGrp': idmatgrp,
        'idUsuario': iduser
      }
      return axios.post('https://agendamientouis.herokuapp.com/agendamiento/', body)
    },
    async submit() {
      await this.autSubmit(true, this.data.schedule, this.$cookies.get('userLogged').idUsuario)
        .then(res => (this.assings = res.data))
      window.location.href = 'schedule'
    },
    getTable(iduser) {
      const body = {
        'idUsuario': iduser
      }
      return axios.post('https://agendamientouis.herokuapp.com/agendamiento/ReservasSemanaUsuario', body)
    },
    async table() {
      await this.getTable(this.$cookies.get('userLogged').idUsuario)
        .then(res => (this.items = res.data))
    }
  }
}
</script>

<style scoped>

</style>
