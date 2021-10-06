<template>
  <b-container class="d-flex justify-content-center align-items-center">
    <b-card class="shadow-lg p-3 w-50">
      <b-card-body class="d-flex flex-column justify-content-center align-items-center position-relative">
        <h1 class="font-weight-light text-center" style="font-size: calc(3rem + 0.1vw)">
          {{ getUser.primNomUsr }} {{ getUser.segNomUsr }} {{ getUser.primApeUsr }} {{ getUser.SegmApeUsr }}
        </h1>
        <div class="text-center font-weight-normal" style="font-size: calc(2rem + 0.3vw)">
          Codigo de estudiante
          <p class="font-weight-light" style="font-size: 2rem">{{ getUser.CodEst }}</p>
        </div>
        <div class="text-center font-weight-normal" style="font-size: calc(2rem + 0.3vw)">
          Genero
          <p class="font-weight-light" style="font-size: 2rem">{{ getUser.generoUsr }}</p>
        </div>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({}),
  computed: {
    getUser() {
      return this.$cookies.get('userLogged')
    }
  }
}
</script>

<style scoped>

</style>
