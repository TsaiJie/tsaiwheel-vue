<template>
	<!--
		1. 解决的3个bug overflow: hidden body.appendChild
		2. 重复关闭的问题（冒泡）document只管外面 popover只管里面
		3. 忘了取消监听document -》 收拢close
	-->
	<!--	做组件不能阻止冒泡-->
	<div class="popover" ref="popover">
		<!--		对话框阻止冒泡-->
		<!--		v-if 是不显示在dom树中，页面中没有这个元素-->
		<!--		v-show 是显示在dom树中，页面中有这个元素 但是看不到-->
		<div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]: true}">
			<slot name="content"></slot>
		</div>
		<span ref="triggerWrapper">
			<slot></slot>
		</span>

	</div>
</template>

<script>
  export default {
    name: "WheelPopover",
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        visible: false
      }
    },
    mounted() {
      this.addPopoverListeners()
    },
    beforeDestroy() {
			this.putBackContent()
			this.removePopoverListeners()
    },
    methods: {
      addPopoverListeners () {
        if (this.trigger === 'click') {
          this.$refs.popover.addEventListener('click', this.onClick)
        } else {
          this.$refs.popover.addEventListener('mouseenter', this.open)
          this.$refs.popover.addEventListener('mouseleave', this.close)
        }
      },
      removePopoverListeners() {
        if (this.trigger === 'click') {
          this.$refs.popover.removeEventListener('click', this.onClick)
        } else {
          this.$refs.popover.removeEventListener('mouseenter', this.open)
          this.$refs.popover.removeEventListener('mouseleave', this.close)
        }
      },
      putBackContent() {
        const {contentWrapper, popover} = this.$refs
        if (!contentWrapper) {
          return
        }
        popover.appendChild(contentWrapper)
      },
      positionContent() {
        // top, left 可视范围的 要加上 scrollY滚动条的
        let {contentWrapper, triggerWrapper} = this.$refs
        // 为了避免用户使用 overflow:hidden 把这个弹出框移到body中去
        document.body.appendChild(contentWrapper)
        //居中对齐
        let {height: contentWrapperHeight} = contentWrapper.getBoundingClientRect()
        let {top, left, height, width} = triggerWrapper.getBoundingClientRect()
        let positions = {
          top: {
            top: top + scrollY,
            left: left + scrollX,
          },
          bottom: {
            top: top + height + scrollY,
            left: left + scrollX
          },
          left: {
            top: top + scrollY + (height - contentWrapperHeight) / 2,
            left: left + scrollX,
          },
          right: {
            top: top + scrollY + (height - contentWrapperHeight) / 2,
            left: left + scrollX + width,
          }

        }
        contentWrapper.style.left = positions[this.position].left + 'px'
        contentWrapper.style.top = positions[this.position].top + 'px'
      },
      onClickDocument(e) {
        if (this.$refs.popover && this.$refs.popover.contains(e.target)) {
          return;
        }
        if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target)) {
          return;
        }
        this.close()

      },
      close() {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      open() {
        this.visible = true
        setTimeout(() => {
          // 调整弹窗的位置
          this.positionContent()
          // 绑定函数的时候需要等到 这个dom元素渲染后
          // 为document监听点击函数， 当监听函数触发后 然后再移除这个函数
          document.addEventListener('click', this.onClickDocument)
        })
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          //看是否点击的是按钮部分
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
	$border-color: #333;
	$border-radius: 4px;
	.popover {
		display: inline-flex;
		vertical-align: top;
		position: relative;
	}
	.content-wrapper {
		position: absolute;
		border: 1px solid $border-color;
		border-radius: $border-radius;
		filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
		padding: .5em 1em;

		background: white;
		/*最大宽度*/
		max-width: 20em;
		/*换行*/
		word-break: break-all;
		&::before, &::after {
			position: absolute;
			content: '';
			display: block;
			height: 0;
			width: 0;
			border: 10px solid transparent;
		}
		&.position-top {
			transform: translateY(-100%);
			margin-top: -10px;
			/*三角形*/
			&::before, &::after {
				top: 100%;
				left: 10px;
			}
			&::before {
				border-top-color: black;
			}
			&::after {
				top: calc(100% - 1px);
				border-top-color: white;
			}
		}
		&.position-bottom {
			margin-top: 10px;
			/*三角形*/
			&::before, &::after {
				bottom: 100%;
				left: 10px;
			}
			&::before {
				border-bottom-color: black;
			}
			&::after {
				bottom: calc(100% - 1px);
				border-bottom-color: white;
			}
		}
		&.position-left {
			transform: translateX(-100%);
			margin-left: -10px;
			&::before, &::after {
				left: 100%;
				top: 50%;
				transform: translateY(-50%);
			}
			&::before {
				border-left-color: black;
			}
			&::after {
				left: calc(100% - 1px);
				border-left-color: white;
			}
		}

		&.position-right {
			margin-left: 10px;
			&::before, &::after {
				right: 100%;
				top: 50%;
				transform: translateY(-50%);
			}
			&::before {
				border-right-color: black;
			}
			&::after {
				right: calc(100% - 1px);
				border-right-color: white;
			}
		}


	}
</style>
