<template>
  <div>
    <article class="mb-5">
      <div class="container d-flex flex-column align-items-center text-center">
        <section class="my-5">
          <h3
            class="
              text-primary-title
              fw-bold
              text-center text-red text-alegraya
            "
          >
            Perfil
          </h3>
        </section>
        <section id="profileData">
          <p class="fw-bold fs-1">
            {{ user['custom:name'] }} {{ user['custom:lastName'] }}
          </p>
          <p class="fs-1">@{{ user.nickname }}</p>
          <p class="fs-1">Relación: {{ user['custom:uRelation'] }}</p>
          <p class="fs-1">Pregrado: {{ user['custom:preProgram'] }}</p>
          <p class="fs-1">Posgrado: {{ user['custom:posProgram'] }}</p>
        </section>
        <br />
        <!--        <section id="profileProjects">
          <section>
            <h4 class="fw-bold fs-1">Emprendimientos registrados:</h4>
          </section>
          <div class="my-3">
            <figure class="my-5">
              <img class="img-fluid" src="/sections/image-static-project.svg" width="200" alt="emprendimiento">
            </figure>
            <p class="fs-2 fw-bold">{{ user.emprendimiento }}</p>
          </div>
        </section>-->
      </div>

      <div class="container d-flex justify-content-center">
        <nuxt-link class="registerLink" to="/register-project">
          <h6 class="fs-1 fw-bold align-self-center">
            Registrar emprendimiento
          </h6>

          <button class="btn btn-outline-none">
            <img
              src="/sections/plus-button.svg"
              width="30"
              alt="registrar emprendimiento"
            />
          </button>
        </nuxt-link>
      </div>
    </article>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Profile',
  data: () => ({
    user: {},
  }),
  async mounted() {
    try {
      const { attributes } = await Auth.currentAuthenticatedUser()
      this.user = attributes
    } catch (e) {
      console.log(e)
      if (e === 'The user is not authenticated') {
        await this.$router.push('/login')
      }
    }
  },
}
</script>

<style lang="scss">
.registerLink {
  text-decoration: none;
  color: black;
  display: flex;
}
</style>
