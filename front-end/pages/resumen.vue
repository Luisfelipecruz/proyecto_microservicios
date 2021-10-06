<template>
  <div>
    <resume v-model="payload"/>
  </div>
</template>

<script>
export default {
  name: "Resumen",
  data: () => ({
    payload: {
      assignature: {}
    }
  }),
}
</script>

<style scoped>

</style>
