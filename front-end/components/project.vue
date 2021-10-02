<template>
  <div class="cursor-pointer" @click="projectSelected">
    <div class="d-flex flex-column align-items-center m-5">
      <img class="rounded-circle" src="https://lorempixel.com/200/200">
      <h3 class="mt-4 fw-bold">{{ project.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project',
  props: ['project'],
  methods: {
    projectSelected() {
      this.$router.push(`/categories/${this.$route.params.category_id}/emprendimiento/${this.project.id}`)
    }
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
