<template>
	<div  class="col"
				:class="[`col-${span}`, offset && `offset-${offset}`]"
				:style="{paddingLeft: gutter/2 +'px', paddingRight: gutter/2 + 'px'}">
		<div style="border: 1px solid green; height: 100px">
			<slot></slot>
		</div>

	</div>
</template>
<script>
	export default {
	  name: 'WheelCol',
		props: {
	    span :{
	      type: [Number, String]
			},
			offset: {
	      type: [Number, String]
			}
		},
		data() {
	    return {
	      gutter: 0
			}
		}
	}
</script>

<style scoped lang="scss">
	.col {
		/*background: grey;*/
		width: 50%;
		$class-prefix: col-;
		/*.col.col-x*/
		/*使用scss使用生成多个class*/
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n /24) * 100%;
			}
		}
		$class-prefix: offset-;
		/*.col.offset-x*/
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n /24) * 100%;
			}
		}
	}
</style>
