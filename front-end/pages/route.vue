<template>
  <div>
    <routes v-model="payload"/>
  </div>
</template>

<script>
export default {
  name: 'Route',
  data: () => ({
    payload: {
      buildingI: [],
      buildingF: []
    }
  }),
}
</script>
