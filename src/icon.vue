<template>
  <svg class="t-icon" v-if="name">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
import './svg.js'
export default {
  name: 'WheelIcon',
  props: ['name'],
}
</script>

<style lang="scss" scoped>
.t-icon {
  height: 1em;
  width: 1em;
}
</style>
