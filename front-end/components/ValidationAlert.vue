<template>
  <div :class="['alert', 'alert-'+color, 'alert-dismissible', 'fade', 'show']" role='alert'>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ValidationAlert',
  props: {
    color: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.alert {
  font-size: 1.6rem;
}
</style>
