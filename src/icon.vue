<template>
	<svg class="t-icon" v-if="name">
		<use :xlink:href=`#i-${name}`></use>
	</svg>
</template>

<script>
  export default {
    props: ['name']
  }
</script>

<style lang="scss" scoped>
	.t-icon {
		height: 1em;
		width: 1em;
	}
</style>
