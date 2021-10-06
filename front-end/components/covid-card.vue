<template>
  <div>
    <article class="d-flex flex-column justify-content-center align-items-center position-relative">
      <img class="position-absolute" :src="image" width="50" alt="estado" style="top: 5px">
      <p class="text-white position-absolute font-weight-light" style="font-size: calc(1rem + 0.2vw)">{{ title }}</p>
      <svg class="rounded-lg mx-2" xmlns="http://www.w3.org/2000/svg" width="200" height="200"
           viewBox="0 0 380 380" fill="none">
        <rect width="380" height="380" :fill="color"/>
      </svg>
    </article>
  </div>
</template>

<script>
export default {
  name: "Covid-card",
  props: ['title', 'color', 'image'],
}
</script>

<style scoped>
</style>
