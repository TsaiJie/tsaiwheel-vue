<template>
	<!--	阻止冒泡-->
	<div class="popover" @click.stop="xxx">
		<!--		对话框阻止冒泡-->
		<!--		v-if 是不显示在dom树中，页面中没有这个元素-->
		<!--		v-show 是显示在dom树中，页面中有这个元素 但是看不到-->
		<div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
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
      xxx() {
        this.visible = !this.visible
        if (this.visible === true) {
          this.$nextTick(() => {
            // 为了避免用户使用 overflow:hidden 把这个弹出框移到body中去
            document.body.appendChild(this.$refs.contentWrapper)
						// top, left 可视范围的 要加上 scrollY滚动条的
            let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
						this.$refs.contentWrapper.style.top = top + scrollY + 'px'
						this.$refs.contentWrapper.style.left = left + scrollX + 'px'
            // x.bind() 会生成一个新的函数不再是原来的函数了
            let eventHandle = () => {
              this.visible = false
              // 每次新增函数的时候 要移除之前的函数 为document移除点击函数
              document.removeEventListener('click', eventHandle)
            }
            // 为document监听点击函数， 当监听函数触发后 然后再移除这个函数
            document.addEventListener('click', eventHandle)
          })
        }
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
	.popover {
		display: inline-flex;
		vertical-align: top;
		position: relative;
	}
	.content-wrapper {
		position: absolute;
		border: 1px solid red;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
		transform: translateY(-100%);
	}
</style>
