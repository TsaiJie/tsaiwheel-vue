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
      phone: {type: Object, validator},
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
    computed: {
      colClass() {
        let {span, offset, phone, ipad, narrowPc, pc, widePc} = this

        return [
          `col-${span}`,
          offset && `offset-${offset}`,
          (phone && (phone.span || phone.offset)) && `col-phone-${phone.span}`,
          (ipad && (ipad.span || ipad.offset)) && `col-ipad-${ipad.span}`,
          (narrowPc && (narrowPc.span || narrowPc.offset)) && `col-narrow-pc-${narrowPc.span}`,
          (pc && (pc.span || pc.offset)) && `col-pc-${pc.span}`,
          (widePc && (widePc.span || widePc.offset)) && `col-wide-pc-${widePc.span}`,
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
		@media (max-width: 576px) {
			$class-prefix: col-phone-;
			/*.col.col-x*/
			/*使用scss使用生成多个class*/
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n /24) * 100%;
				}
			}
			$class-prefix: offset-phone-;
			/*.col.offset-x*/
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n /24) * 100%;
				}
			}
		}
		@media (min-width: 577px) and (max-width: 768px) {
			$class-prefix: col-ipad-;
			/*.col.col-x*/
			/*使用scss使用生成多个class*/
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n /24) * 100%;
				}
			}
			$class-prefix: offset-ipad-;
			/*.col.offset-x*/
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n /24) * 100%;
				}
			}
		}
		@media (min-width: 769px) and (max-width: 992px) {
			$class-prefix: col-narrow-pc-;
			/*.col.col-x*/
			/*使用scss使用生成多个class*/
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n /24) * 100%;
				}
			}
			$class-prefix: offset-narrow-pc-;
			/*.col.offset-x*/
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n /24) * 100%;
				}
			}
		}
		@media (min-width: 993px) and (max-width: 1200px) {
			$class-prefix: col-pc-;
			/*.col.col-x*/
			/*使用scss使用生成多个class*/
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n /24) * 100%;
				}
			}
			$class-prefix: offset-pc-;
			/*.col.offset-x*/
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n /24) * 100%;
				}
			}
		}
		@media (min-width: 1201px) {
			$class-prefix: col-wide-pc-;
			/*.col.col-x*/
			/*使用scss使用生成多个class*/
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n /24) * 100%;
				}
			}
			$class-prefix: offset-wide-pc-;
			/*.col.offset-x*/
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n /24) * 100%;
				}
			}
		}

	}
</style>
