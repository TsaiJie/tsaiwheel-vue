<template>
	<!--
		1. 解决的3个bug overflow: hidden body.appendChild
		2. 重复关闭的问题（冒泡）document只管外面 popover只管里面
		3. 忘了取消监听document -》 收拢close
	-->
	<!--	做组件不能阻止冒泡-->
	<div class="popover" @click="onClick" ref="popover">
		<!--		对话框阻止冒泡-->
		<!--		v-if 是不显示在dom树中，页面中没有这个元素-->
		<!--		v-show 是显示在dom树中，页面中有这个元素 但是看不到-->
		<div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
    data() {
      return {
        visible: false
      }
    },
    methods: {
      positionContent() {
        // 为了避免用户使用 overflow:hidden 把这个弹出框移到body中去
        document.body.appendChild(this.$refs.contentWrapper)
        // top, left 可视范围的 要加上 scrollY滚动条的
        let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.top = top + scrollY + 'px'
        this.$refs.contentWrapper.style.left = left + scrollX + 'px'
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
    },
    mounted() {
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
		transform: translateY(-100%);
		margin-top: -10px;
		background: white;
		/*最大宽度*/
		max-width: 20em;
		/*换行*/
		word-break: break-all;
		/*三角形*/
		&::before, &::after {
			position: absolute;
			top: 100%;
			left: 10px;
			content: '';
			display: block;
			height: 0;
			width: 0;
			border: 10px solid transparent;
		}
		&::before {
			border-top-color: black;
		}
		&::after {
			top: calc(100% - 1px);
			border-top-color: white;
		}
	}
</style>
