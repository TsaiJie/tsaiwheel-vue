<template>
	<div class="col"
			 :class="colClass"
			 :style="colStyle">
		<slot></slot>


	</div>
</template>
<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: 'WheelCol',
    props: {
      span: {type: [Number, String]},
      offset: {type: [Number, String]},
      ipad: {type: Object, validator},
      narrowPc: {type: Object, validator},
      pc: {type: Object, validator},
      widePc: {type: Object, validator},
    },
    data() {
      return {
        gutter: 0,
      }
    },
		methods: {
      createClasses(obj, str=''){
        let array = []
        if (!obj) return array
				if (obj.span) array.push(`col-${str}${obj.span}`)
				if (obj.offset) array.push(`offset-${str}${obj.offset}`)
				return array
			}
		},
    computed: {
      colClass() {
        let {span, offset, ipad, narrowPc, pc, widePc, } = this
				let createClasses = this.createClasses
        return [
         ...createClasses({span, offset}),
         ...createClasses(ipad, 'ipad-'),
         ...createClasses(narrowPc, 'narrow-pc-'),
         ...createClasses(pc, 'pc-'),
         ...createClasses(widePc, 'wide-pc-'),
        ]
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
	@mixin Adaptive($property, $class-prefix, $min-width) {
		@media (min-width: #{$min-width}) {
			/*.col.col-x*/
			/*使用scss使用生成多个class*/
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					#{$property}: ($n /24) * 100%;
				}
			}
		}
	}
	.col {
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
		@include Adaptive(width,col-ipad-,557px);
		@include Adaptive(margin-left,offset-ipad-,557px);
		@include Adaptive(width,col-narrow-pc-,769px);
		@include Adaptive(margin-left,offset-narrow-pc-,769px);
		@include Adaptive(width,col-pc-,993px);
		@include Adaptive(margin-left,offset-pc-,993px);
		@include Adaptive(width,col-wide-pc-,1201px);
		@include Adaptive(margin-left,offset-wide-pc-,1201px);


	}
</style>
