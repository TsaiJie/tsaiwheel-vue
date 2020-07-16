<template>
<!--	阻止冒泡-->
	<div class="popover" @click.stop="xxx">
<!--		对话框阻止冒泡-->
		<div class="content-wrapper" v-if="visible" @click.stop>
			<slot name="content"></slot>
		</div>
		<slot></slot>
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
          setTimeout(() => {
            // x.bind() 会生成一个新的函数不再是原来的函数了
            let eventHandle = () => {
              this.visible = false
							console.log('document 隐藏')
							// 每次新增函数的时候 要移除之前的函数 为document移除点击函数
							document.removeEventListener('click', eventHandle)
						}
						// 为document监听点击函数， 当监听函数触发后 然后再移除这个函数
            document.addEventListener('click', eventHandle)
          })
        }else {
          console.log('组件隐藏')
				}
      }

    }
  }
</script>

<style lang="scss" scoped>
	.popover {
		display: inline-flex;
		vertical-align: top;
		position: relative;
		.content-wrapper {
			position: absolute;
			bottom: 100%;
			left: 0;
			border: 1px solid red;
			box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
		}
	}
</style>
