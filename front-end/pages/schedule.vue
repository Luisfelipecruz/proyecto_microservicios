<template>
  <div>
    <scheduling v-model="payload"/>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  data: () => ({
    payload: {
      assignature: {}
    }
  }),
}
</script>
