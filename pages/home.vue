<template>
  <div>
    <div class="container-fluid">
      <div class="row flex justify-between">
        <div class="col-auto p-0 m-0">
          <div class="sidebar flex flex-col items-start px-3 sm:items-start bg-gray-100 h-screen">
            <div class="sidebar-brand my-3 flex flex-row justify-start">
              <nuxt-link to="/" class="p-1.5 sm:p-1.5 flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                     class="bi bi-hdd-network mx-2" viewBox="0 0 16 16">
                  <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8.5v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10V7H2a2 2 0 0 1-2-2V4zm1 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm6 7.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5z"/>
                </svg>
                <span class="text-2xl d-none d-sm-inline"><strong>ConnecTwo</strong></span>
              </nuxt-link>
            </div>
            <div class="sidebar-nav flex justify-center items-center mb-auto">
              <ul class="flex flex-col justify-center items-start">
                <li class="my-1.5 p-1.5 rounded-lg">
                  <nuxt-link to="/" class="flex flex-row items-center nav-link text-black p-0 m-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         class="bi bi-calendar-event mx-2" viewBox="0 0 16 16">
                      <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                      <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                    </svg>
                    <p class="text-2xl d-none d-sm-flex">Agenda</p>
                  </nuxt-link>
                </li>
                <li class="my-1.5 p-1.5 rounded-lg">
                  <nuxt-link to="/" class="flex flex-row items-center nav-link text-black p-0 m-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         class="bi bi-journal-medical mx-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                            d="M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                      <path
                        d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                      <path
                        d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    </svg>
                    <p class="text-2xl d-none d-sm-flex">Covid</p>
                  </nuxt-link>
                </li>
                <li class="my-1.5 p-1.5 rounded-lg">
                  <nuxt-link to="/" class="flex flex-row items-center nav-link text-black p-0 m-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         class="bi bi-cloud-drizzle mx-2" viewBox="0 0 16 16">
                      <path
                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"/>
                    </svg>
                    <p class="text-2xl d-none d-sm-flex">Clima</p>
                  </nuxt-link>
                </li>
                <li class="my-1.5 p-1.5 rounded-lg">
                  <nuxt-link to="/" class="flex flex-row items-center nav-link text-black p-0 m-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         class="bi bi-bar-chart-steps mx-2" viewBox="0 0 16 16">
                      <path
                        d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z"/>
                    </svg>
                    <p class="text-2xl d-none d-sm-flex">Rutas</p>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="sidebar-account mx-2 sm:mb-4 mb-16">
              <button class="flex items-center">
                <img class="img-fluid rounded-full mx-2" src="http://lorempixel.com/400/400" width="30" alt="">
                <strong class="text-2xl d-none d-sm-flex">Carlos</strong>
              </button>

            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                Agenda
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <nuxt-link to="/">
                  <button role="button">
                    Covid
                  </button>
                </nuxt-link>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                Rutas
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                Resumen de agendamiento
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                  Persona
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                  Persona
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                  Persona
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  data: () => ({
    user: {
      name: 'Carlos'
    }
  })
}
</script>

<style scoped lang="scss">
.sidebar-brand a:hover{
  color: black;
}

.nav-link:hover {
  color: white;
}

.sidebar-nav ul li:hover {
  transition-duration: 500ms;
  background-color: #007bff;
}

.nav-link > p:hover {
  color: white;
}
</style>
