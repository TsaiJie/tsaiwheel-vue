<template>
	<div class="col"
			 :class="colClass"
			 :style="colStyle">
		<slot></slot>

	</div>
</template>
<script>
  export default {
    name: 'WheelCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        gutter: 0,
      }
    },
    computed: {
      colClass() {
        let {span, offset} = this
        return [`col-${span}`, offset && `offset-${offset}`]
      },
      colPadding() {
        return this.gutter / 2 + 'px'
      },
      colStyle() {
        return {
          paddingLeft: this.colPadding,
          paddingRight: this.colPadding,
        }
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
