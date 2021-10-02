<template>
  <div>
    <header v-if="!collapsed" class="pb-5">
      <nav class="navbar navbar-expand-lg navbar-dark h-50 pb-3">
        <div
          class="
            container-fluid
            d-flex
            flex-sm-row flex-column
            justify-content-between
          "
        >
          <nuxt-link to="/" class="navbar-brand"
          ><span
          ><img
            src="/navbar/navbar-logo.svg"
            width="200"
            alt="impulsa uis"/></span
          ></nuxt-link>

          <transition name="slide-fade">
            <div
              v-if="!collapsed && !actived"
              id="navbarExpandContent"
              class="collapse navbar-collapse justify-content-end"
            >
              <ul class="navbar-nav mb-2 mb-lg-0 align-items-center">
                <li class="nav-item mx-4">
                  <button class="btn btn-outline-none bg-transparent">
                    <nuxt-link to="/about" class="nav-link active text-white"
                    >Quienes somos
                    </nuxt-link
                    >
                  </button>
                </li>
                <li class="nav-item mx-4">
                  <button class="btn btn-outline-none bg-transparent">
                    <nuxt-link
                      to="/featured-project"
                      class="nav-link active text-white"
                    >Emprendimiento destacado
                    </nuxt-link>
                  </button>
                </li>
                <li class="nav-item mx-4">
                  <button class="btn btn-outline-none bg-transparent">
                    <a href="#categories" class="nav-link active text-white"
                    >Categorias</a
                    >
                  </button>
                </li>
                <li class="nav-item mx-4">
                  <button class="btn btn-outline-none bg-transparent">
                    <nuxt-link to="/" class="nav-link active text-white"
                    >Promo
                    </nuxt-link
                    >
                  </button>
                </li>
                <li class="nav-item mx-4">
                  <button class="btn btn-outline-none bg-transparent">
                    <nuxt-link to="/contact" class="nav-link active text-white"
                    >Contacto
                    </nuxt-link
                    >
                  </button>
                </li>
                <li class="p-button mx-0 mx-sm-3 mx-md-3 mx-lg-3">
                  <nuxt-link
                    v-if="!isLoggedIn"
                    class="fs-5"
                    to="/login">
                    <button class=" nav-button
                        button-profile
                        btn btn-outline-none
                        bg-transparent
                        d-flex
                        align-items-center
                        px-1">
                    </button>
                  </nuxt-link>

                </li>
                <li class="p-button mx-0 mx-sm-3 mx-md-3 mx-lg-3" v-if="isLoggedIn">
                  <div class="dropdown">
                    <button
                      class="
                        nav-button
                        button-profile
                        btn btn-outline-none
                        bg-transparent
                        d-flex
                        align-items-center
                        px-1
                      "
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>
                    <ul
                      class="dropdown-menu justify-content-start"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <nuxt-link
                          v-if="isLoggedIn"
                          class="dropdown-item fs-5"
                          to="/profile"
                        >Perfil
                        </nuxt-link
                        >
                      </li>
                      <li>
                        <button
                          v-if="isLoggedIn"
                          class="dropdown-item fs-5"
                          @click="logout"
                        >
                          Cerrar sesion
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </transition>
          <div class="d-flex justify-content-start">
            <transition name="slide-fade">
              <div v-if="!actived" class="mx-0 mx-sm-3 mx-md-3 mx-lg-3">
                <nuxt-link to="/">
                  <button
                    class="
                      nav-button
                      button-mode
                      btn btn-outline-none
                      shadow-none
                    "
                  ></button>
                </nuxt-link>
              </div>
            </transition>
            <div
              class="
                d-flex
                flex-row
                align-self-center
                mx-0 mx-sm-3 mx-md-3 mx-lg-3
                p-0
              "
            >
              <form
                class="d-flex align-items-center bg-transparent p-0"
                @submit.prevent="submit"
              >
                <transition name="slide-fade">
                  <button
                    v-if="actived"
                    type="button"
                    class="btn btn-light position-relative shadow-none"
                    style="width: 30px; height: 30px"
                    @click="actived = false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-x-circle position-relative"
                      viewBox="0 0 16 16"
                      style="top: -2px; right: 5px"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                </transition>
                <transition name="slide-fade">
                  <input
                    v-if="actived"
                    class="
                      form-control
                      rounded-3
                      fs-4
                      border-0
                      shadow-none
                      mx-3
                      p-2
                    "
                    type="search"
                    placeholder="Buscar"
                    aria-label="Buscar"
                  />
                </transition>
                <button
                  type="button"
                  class="
                    nav-button
                    button-search
                    btn btn-outline-none
                    shadow-none
                    px-1
                  "
                  @click="actived ? submit() : (actived = true)"
                ></button>
              </form>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="collapsed = !collapsed"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
    <Nuxt
      v-if="!collapsed"
      @updateIsLoggedIn="updateIsLoggedIn"
      class="my-lg-5 py-lg-5 my-md-5 py-md-5 pb-0 pt-5 mt-5 my-b"
    />
    <div v-if="collapsed">
      <div class="d-flex align-items-center justify-content-between m-5">
        <div class="d-flex align-items-center">
          <img
            class="img-fluid"
            width="35px"
            src="/navbar/menu-logo.svg"
            alt="impulsa uis"
          />
          <h5 class="text-primary-title fw-bold">MENÚ</h5>
        </div>
        <button
          class="btn btn-outline-none bg-transparent nav-button button-close"
          @click="collapsed = !collapsed"
        ></button>
      </div>
      <div
        id="navbarSupportedContent"
        class="navbar d-lg-flex justify-content-center"
      >
        <ul class="navbar-nav mb-2 mb-lg-0 align-items-center">
          <li class="nav-item mx-4">
            <button
              class="btn btn-outline-none bg-transparent"
              @click="collapsed = false"
            >
              <nuxt-link to="/" class="nav-link active text-dark fw-bold"
              >Inicio
              </nuxt-link
              >
            </button>
          </li>
          <li class="nav-item mx-4">
            <button
              class="btn btn-outline-none bg-transparent"
              @click="collapsed = false"
            >
              <nuxt-link to="/about" class="nav-link active text-dark fw-bold"
              >Quienes somos
              </nuxt-link
              >
            </button>
          </li>
          <li class="nav-item mx-4">
            <button
              class="btn btn-outline-none bg-transparent"
              @click="collapsed = false"
            >
              <nuxt-link
                to="/featured-project"
                class="nav-link active text-dark fw-bold"
              >Emprendimiento destacado
              </nuxt-link>
            </button>
          </li>
          <li class="nav-item mx-4">
            <button
              class="btn btn-outline-none bg-transparent"
              @click="collapsed = false"
            >
              <a href="#categories" class="nav-link active text-dark fw-bold"
              >Categorias
              </a
              >
            </button>
          </li>
          <li class="nav-item mx-4">
            <button
              class="btn btn-outline-none bg-transparent"
              @click="collapsed = false"
            >
              <nuxt-link to="/" class="nav-link active text-dark fw-bold"
              >Promo
              </nuxt-link
              >
            </button>
          </li>
          <li class="nav-item mx-4">
            <button
              class="btn btn-outline-none bg-transparent"
              @click="collapsed = false"
            >
              <nuxt-link to="/contact" class="nav-link active text-dark fw-bold"
              >Contacto
              </nuxt-link
              >
            </button>
          </li>
          <li class="nav-item mx-4">
            <button
              class="
                nav-button
                button-mode button-mode-dark
                btn btn-outline-none
                bg-transparent
                px-1
              "
            >
              <nuxt-link
                to="/"
                class="nav-link p-0 align-items-center w-100"
              ></nuxt-link>
            </button>
          </li>
          <li class="nav-item mx-4">
            <div class="dropdown d-flex flex-column align-items-center justify-content-center">
              <button
                class="
                  nav-button
                  button-profile button-profile-dark
                  btn btn-outline-none
                  bg-transparent
                  d-flex
                  align-items-center
                  px-1
                  my-3
                "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >

              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <nuxt-link
                    v-if="isLoggedIn"
                    class="dropdown-item fs-5"
                    to="/profile"
                  >Perfil
                  </nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    v-if="!isLoggedIn"
                    class="dropdown-item fs-5"
                    to="/login"
                  >Iniciar sesion
                  </nuxt-link
                  >
                </li>
                <li>
                  <button
                    v-if="isLoggedIn"
                    class="dropdown-item fs-5"
                    @click="logout"
                  >
                    Cerrar sesion
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footer v-if="!collapsed" class="d-flex align-items-center mt-5 pb-xl-3">
      <div class="container-fluid px-3">
        <div
          class="
            socials
            d-md-flex
            flex-column
            align-items-center
            flex-lg-row
            mx-md-5
          "
        >
          <div>
            <p class="text-white text-uppercase fs-3 fw-lighter d-inline">
              redes sociales:
            </p>
            <div class="d-flex flex-row my-2">
              <a href="https://www.facebook.com/ImpulsaUIS"
                 class="d-flex justify-content-center align-items-center text-decoration-none" target="_blank">
                <img
                  class="img-fluid"
                  src="/footer/facebook.svg"
                  width="25"
                  alt="facebook"
                />
                <p class="text-white fs-2 fw-bold d-inline mx-2 my-0">
                  Impulsa UIS
                </p>
              </a>
            </div>
          </div>
          <div class="mt-lg-5">
            <div class="d-flex flex-row my-2 mx-lg-2">
              <a href="https://www.instagram.com/impulsauis/"
                 class="text-decoration-none d-flex justify-content-center align-items-center" target="_blank">
                <img
                  class="img-fluid"
                  src="/footer/instagram.svg"
                  width="25"
                  alt="instagram"
                />
                <p class="text-white fs-2 fw-bold d-inline mx-2 my-0">
                  @impulsauis
                </p>
              </a>
            </div>
          </div>
        </div>
        <div
          class="
            sponsors
            d-flex
            justify-content-sm-center justify-content-md-center
          "
        >
          <div class="me-3 me-lg-5">
            <p class="text-white text-uppercase fs-3 fw-lighter d-block">
              apoya:
            </p>
            <a href="https://jejaimes.com.co/" target="_blank">
              <img
                class="sponsor-img"
                src="/footer/support.svg"
                alt="jaimes ingenieros"
              />
            </a>
          </div>
          <div class="ms-3 ms-lg-5">
            <p class="text-white text-uppercase fs-3 fw-lighter d-block">
              organiza:
            </p>
            <a href="https://www.aseduis.com/Bucaramanga/" target="_blank"><img class="sponsor-img"
                                                                                src="/footer/ase.svg"
                                                                                alt="aseduis"/></a>

          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {Auth} from 'aws-amplify'

export default {
  name: 'Default',
  data: () => ({
    collapsed: false,
    actived: false,
    isLoggedIn: false,
  }),
  async mounted() {
    await this.getAuthStatus()
    this.$nuxt.$on('updateIsLoggedIn', async () => {
      await this.getAuthStatus()
    })
  },
  methods: {
    async getAuthStatus() {
      try {
        await Auth.currentAuthenticatedUser()
        this.isLoggedIn = true
      } catch {
        this.isLoggedIn = false
      }
    },
    updateIsLoggedIn() {
      this.getAuthStatus()
    },
    submit() {

    },
    async logout() {
      await Auth.signOut()
      await this.$router.push('/login')
      await this.getAuthStatus()
    },
  },
}
</script>

<style lang="scss">
footer .container-fluid {
  display: grid;
  grid-template-columns: 1.8fr 1.2fr 1.2fr 1.5fr;
  grid-template-rows: 1fr 1.5fr;
  grid-auto-flow: row;
  grid-template-areas:
    '. . . .'
    'socials socials sponsors sponsors';
}

.socials {
  grid-area: socials;
}

.sponsors {
  grid-area: sponsors;
}

/*Navbar*/
.navbar .nav-item .nav-link {
  font-weight: 400;
  font-size: calc(0.2rem + 0.9vw);
  text-align: center;
}

.navbar-nav .nav-item .nav-link:hover {
  transform: scale(1.2);
}

.nav-button {
  width: 50px;
  height: 50px;
}

.nav-button:hover {
  transform: scale(1.2);
}

.button-mode {
  background: url('static/buttons/mode.svg') no-repeat center;
}

.button-search {
  background: url('static/buttons/search.svg') no-repeat center;
}

.button-profile {
  background: url('static/buttons/profile.svg') no-repeat center;
}

.button-close {
  background: url('static/buttons/close.svg') no-repeat center;
}

.button-close:hover {
  background: url('static/buttons/close-active.svg') no-repeat center;
}

.button-mode-dark {
  background: url('static/buttons/mode-dark.svg') no-repeat center;
}

.button-search-dark {
  background: url('static/buttons/search-dark.svg') no-repeat center;
}

.button-profile-dark {
  background: url('static/buttons/profile-dark.svg') no-repeat center;
}

.button-mode:hover {
  background: url('static/buttons/mode-active.svg') no-repeat center !important;
}

.button-search:hover {
  background: url('static/buttons/search-active.svg') no-repeat center;
}

.button-profile:hover {
  background: url('static/buttons/profile-active.svg') no-repeat center;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}

/*Navbar*/

header {
  width: 100%;
  height: 200px;
  background: #000000;
  clip-path: polygon(0 0, 100% 0, 100% 54%, 82% 100%, 55% 71%, 17% 100%, 0 58%);
}

/*Extra Extra Small devices*/
@media (max-width: 360px) {
  .navbar-brand span img {
    width: 170px;
  }

  .navbar .nav-item .nav-link {
    font-size: 2rem;
  }

  footer {
    width: 100%;
    height: 200px;
    background: url('static/navbar/footer-xxs-background.svg') repeat-x bottom;
  }
  .sponsor-img {
    width: 50px;
  }
}

/*Extra Small devices*/
@media (min-width: 361px) and (max-width: 575px) {
  .navbar-brand span img {
    width: 170px;
  }

  .navbar .nav-item .nav-link {
    font-size: 2rem;
  }

  footer {
    width: 100%;
    height: 200px;
    background: url('static/navbar/footer-xs-background.svg') repeat-x bottom;
  }
  .sponsor-img {
    width: 60px;
  }
}

/*Small devices*/
@media (min-width: 576px) and (max-width: 767px) {
  .navbar-brand span img {
    width: 170px;
  }

  .navbar .nav-item .nav-link {
    font-size: 2rem;
  }

  footer {
    width: 100%;
    height: 200px;
    background: url('static/navbar/footer-sm-background.svg') repeat-x bottom;
  }
  .sponsor-img {
    width: 60px;
  }
}

/*Medimum devices*/
@media (min-width: 768px) and (max-width: 991px) {
  .navbar-brand span img {
    width: 170px;
  }

  .navbar .nav-item .nav-link {
    font-size: 2rem;
  }

  footer .container-fluid .row {
    margin-top: 150px !important;
  }

  footer {
    width: 100%;
    height: 200px;
    background: url('static/navbar/footer-md-background.svg') repeat-x bottom;
  }
  .sponsor-img {
    width: 70px;
  }
}

/*Large devices*/
@media (min-width: 992px) and (max-width: 1199px) {
  .navbar-brand span img {
    width: 170px;
  }

  .navbar .nav-item .nav-link {
    font-weight: 400;
    text-align: center;
  }

  ::placeholder {
    font-size: 1rem;
  }

  footer {
    width: 100%;
    height: 200px;
    background: url('static/navbar/footer-lg-background.svg') repeat-x bottom;
  }
  .sponsor-img {
    width: 70px;
  }
}

/*Extra Large devices*/
@media (min-width: 1200px) {
  footer {
    width: 100%;
    height: 200px;
    background: url('static/navbar/footer-xxl-background.svg') repeat-x bottom;
  }
  .sponsor-img {
    width: 80px;
  }
}

:root {
  --cyan: #3bb3c3;
  --orange: #e67016;
  --green: #67b93e;
  --yellow: #cc9600;
  --red: #e4312a;
  --purple: #7a1a66;

  .text-cyan {
    color: var(--cyan);
  }

  .text-orange {
    color: var(--orange);
  }

  .text-green {
    color: var(--green);
  }

  .text-yellow {
    color: var(--yellow);
  }

  .text-red {
    color: var(--red);
  }

  .text-black {
    color: #000000;
  }

  .text-primary-title {
    font-size: calc(4rem + 0.5vw);
  }

  .text-secondary-title {
    font-size: calc(3.5rem + 1vw);
  }

  .text-description {
    font-size: 2rem;
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5% !important;
}

body {
  font-family: 'News Cycle', sans-serif;
}

.btn-join {
  --btn-raise: 1rem;
  clip-path: polygon(
      var(--btn-raise) 0,
      calc(100% - var(--btn-raise)) 0,
      100% 50%,
      calc(100% - var(--btn-raise)) 100%,
      var(--btn-raise) 100%,
      0 50%
  );
  background-color: #7a1a66;
}

.btn-join:hover {
  box-shadow: inset 5px 6px 13px rgba(0, 0, 0, 0.25);
  color: var(--purple) !important;
  --btn-raise: 1rem;
  clip-path: polygon(
      var(--btn-raise) 0,
      calc(100% - var(--btn-raise)) 0,
      100% 50%,
      calc(100% - var(--btn-raise)) 100%,
      var(--btn-raise) 100%,
      0 50%
  );
  background-color: #ffffff;
}

.text-alegraya {
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: 800;
}
</style>
