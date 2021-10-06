<template>
  <div>
    <header>
      <b-navbar class="fixed-top bg-light shadow-sm" toggleable="lg" type="light">
        <b-navbar-brand class="font-weight-light text-d-primary">
          <b-button
            class="bg-transparent btn-outline-none shadow-none border-0 text-dark text-decoration-none text-d-primary"
            @click="toRoute('/')">
            ConnecTwo
          </b-button>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
          <b-navbar-nav class="align-items-center">
            <b-nav-item>
              <b-button
                class="bg-transparent btn-outline-none shadow-none text-decoration-none border-0 text-dark font-weight-light text-s-primary"
                to="/"
                @click="toRoute('/')">
                Inicio
              </b-button>
            </b-nav-item>
            <div>
              <b-dropdown id="dropdown-1" variant="transparent font-weight-light" text="Menu principal" class="m-md-2">
                <b-dropdown-item v-if="getUser != undefined">
                  <nuxt-link class="text-decoration-none text-dark font-weight-light text-s-primary" to="/weather">
                    Clima
                  </nuxt-link>
                </b-dropdown-item>
                <b-dropdown-item v-if="getUser != undefined">
                  <nuxt-link class="text-decoration-none text-dark font-weight-light text-s-primary" to="/schedule">
                    Agendamiento
                  </nuxt-link>
                </b-dropdown-item>
                <b-dropdown-item v-if="getUser != undefined">
                  <nuxt-link class="text-decoration-none text-dark font-weight-light text-s-primary" to="/route">
                    Dijkstra UIS
                  </nuxt-link>
                </b-dropdown-item>
                <b-dropdown-divider v-if="getUser != undefined"></b-dropdown-divider>
                <b-dropdown-item v-if="getUser == undefined">
                  <nuxt-link class="text-decoration-none text-dark font-weight-light text-s-primary" to="/signin">
                    Iniciar Sesion
                  </nuxt-link>
                </b-dropdown-item>
                <b-dropdown-item v-if="getUser != undefined">
                  <nuxt-link class="text-decoration-none text-dark font-weight-light text-s-primary" to="/profile">
                    Mi perfil
                  </nuxt-link>
                </b-dropdown-item>
                <b-dropdown-item v-if="getUser != undefined">
                  <b-button to="/signin"
                            class="bg-transparent border-0 px-0 mx-0 text-decoration-none text-dark font-weight-light text-s-primary"
                            @click="logOut">
                    Cerrar sesion
                  </b-button>
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <Nuxt style="padding: 150px 0"/>
  </div>
</template>

<script>
export default {
  name: "Default",
  data: () => ({}),
  computed: {
    getUser() {
      return this.$cookies.get('userLogged');
    }
  },
  methods: {
    logOut() {
      this.$cookies.remove('userLogged')
      window.location.href = 'signin'
    },
    toRoute(route) {
      window.location.href = route
    }
  }
}
</script>

<style scoped>

</style>
