<template>
  <article class="category-slider__card text-center my-5 mx-3">
    <div class="card-body d-flex flex-column justify-content-center align-items-center position-relative">
      <h4 class="card-title text-alegraya text-center text-white justify-content-center position-absolute w-50">{{ title }}</h4>
      <svg width="150" height="150" viewBox="0 0 206 206" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 206V37.8749L108.595 0L206 28.5346V196.111L108.313 168.639L0 206Z" :fill="color"/>
      </svg>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Cards',
  props: ['title', 'color'],
}
</script>

<style scoped lang="scss">

.category-slider__card {
  /*<Deslizamiento horizontal>*/
  scroll-snap-align: center;
  /*</Deslizamiento horizontal>*/

}
.card-title {
  font-size: 1.6rem;
}
</style>
