<template>
  <main class='container-fluid'>
    <section>
      <div class='container px-3 px-lg-5'>
        <div class='row mt-5'>
          <div class='col-lg-6 col-md-6 col-sm-12 col-12 main-info d-flex flex-column justify-content-center'>
            <picture class='px-3'>
              <img class='img-fluid' src='/sections/impulsa-uis-dark.svg' alt='impulsa uis'>
            </picture>
            <p class='text-description px-3 text-justify' style='width: 90%'>
              Buscamos dar visibilidad a los emprendimientos y empresas de los estudiantes, egresados de pregrado,
              posgrado y del IPRED de la UIS, siendo una vitrina virtual para sus negocios. Promoviendo las
              conexiones entre los empresarios y los diferentes públicos objetivo.
            </p>
          </div>
          <div class='col-lg-6 col-md-6 col-sm-12 col-12 main-picture d-flex justify-content-center'>
            <picture class='d-flex justify-content-center' style='width: 500px'>
              <img class='img-fluid' src='/sections/impulsa-uis-projects.svg' alt='proyectos'>
            </picture>
          </div>
        </div>
        <div
          class='d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center'>
          <nuxt-link to='/register'>
            <button role='button'
                    class='btn btn-outline-none my-5 py-3 px-5 btn-join text-white text-decoration-none text-uppercase fs-3 fw-bold info'>
              Unirme
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <div class='element'></div>
    <section class='container mt-5 featured-project'>
      <section>
        <h2 class='text-primary-title text-center text-cyan text-alegraya'>Emprendimiento destacado</h2>
        <h3 class='text-secondary-title text-center text-black fw-bold w-100'>ID3CO</h3>
      </section>
      <section v-if='hovered' class='d-flex flex-column align-items-center' @mouseover='hovered=!hovered'>
        <figure>
          <img class='img-fluid' src='/sections/featured-project.svg'
               alt='emprendimiento destacado'>
        </figure>
      </section>
      <section v-if='!hovered' @mouseleave='hovered=true'>
        <section class="position-relative">
          <figure>
            <img class='img-fluid' src='/sections/featured-project-hover.svg'
                 alt='emprendimiento destacado'>
          </figure>
        </section>
      </section>
      <div class="d-flex w-100 justify-content-center">
        <nuxt-link to="featured-project">
          <button class="btn btn-join text-description text-white fw-bold px-4" role="button">CONOCE MAS</button>
        </nuxt-link>
      </div>
    </section>
    <div class='element'></div>
    <section id='categories'>
      <section class='w-100'>
        <h2 class='text-primary-title text-center text-orange text-alegraya'>Categorías</h2>
        <p class='text-center text-black text-description'>A continuación encontrarás las categorías de los
          emprendimientos disponibles</p>
      </section>
      <section
        class='container-fluid category__slider w-100 d-flex align-items-center justify-content-md-center justify-content-lg-center justify-content-xl-center pl-5'>
        <div v-for='(card,i) in categories.slice(0,7)' :key='i'>
          <nuxt-link :to='/categories/+card.id'>
            <cards :title='card.title' :color='card.color'/>
          </nuxt-link>
        </div>
      </section>
      <section
        class='container-fluid category__slider w-100 d-flex align-items-center justify-content-md-center justify-content-lg-center justify-content-xl-center'>
        <div v-for='(card,i) in categories.slice(7,14)' :key='i'>
          <nuxt-link :to='/categories/+card.id'>
            <cards :title='card.title' :color='card.color'/>
          </nuxt-link>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    hovered: true
  }),
  computed: {
    categories() {
      return this.$store.state.categories.list
    }
  },
}

</script>

<style scoped lang='scss'>
/*Recycling Code*/
.element {
  background: url('static/sections/element.svg') repeat-x center;
  width: auto;
  height: 135px;
}

/*Recycling Code*/

.category__slider {
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
}

.category__slider::-webkit-scrollbar {
  -webkit-appearance: none;
}

.category__slider::-webkit-scrollbar:vertical {
  width: 10px;
}

.category__slider::-webkit-scrollbar-button:increment, .contenedor::-webkit-scrollbar-button {
  display: none;
}

.category__slider::-webkit-scrollbar:horizontal {
  height: 10px;
}

.category__slider::-webkit-scrollbar-thumb {
  background-color: #797979;
  border-radius: 20px;
  border: 2px solid #f1f2f3;
}

.category__slider::-webkit-scrollbar-track {
  border-radius: 10px;
}

.featured-project__no-hover {
  background: url('static/sections/featured-project.svg') no-repeat center;
  width: 100%;
  height: 665px;
}

.featured-project__hover {
  background: url('static/sections/featured-project-hover.svg') no-repeat center;
  width: 100%;
  height: 665px;
}

.text-justify {
  text-align: justify !important;
}

/*Extra extra small devices*/
@media (max-width: 360px) {
}

/*Extra small devices*/
@media (min-width: 361px) and (max-width: 575px) {
}

/*Small devices*/
@media (min-width: 576px) and (max-width: 767px) {
}

/*Medium devices*/
@media (min-width: 768px) and (max-width: 991px) {
}

/*Large devices*/
@media (min-width: 992px) and (max-width: 1199px) {
  .category__slider {
    overflow-x: hidden;
  }
}

/*Extra large devices*/
@media (min-width: 1200px) {
  .category__slider {
    overflow-x: hidden;
  }
}
</style>
