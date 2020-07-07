<template>
	<div class="col" :class="[`col-${span}`]">
		<slot></slot>
	</div>
</template>
<script>
	export default {
	  name: 'WheelCol',
		props: {
	    span :{
	      type: [Number, String]
			}
		}
	}
</script>

<style scoped lang="scss">
	.col {
		height: 100px;
		background: grey;
		width: 50%;
		border: 1px solid red;
		$class-prefix: col-;
		/*.col.col-x*/
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n /24) * 100%;
			}
		}
	}
</style>
