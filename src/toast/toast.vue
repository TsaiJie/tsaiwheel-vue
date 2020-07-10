<template>
	<div class="toast" ref="wrapper">
		<div class="message">
			<slot v-if="!enableHtml"></slot>
			<div v-else v-html="$slots.default[0]"></div>
		</div>
		<div class="line" ref="line"></div>
		<span class="close" v-if="closeButton" @click="clickClose()">
			{{closeButton.text}}
		</span>
	</div>
</template>

<script>
  export default {
    name: "WheelToast",
		props: {
      // 自动关闭
      autoClose: {
        type: Boolean,
				default: true
			},
			// 自动关闭的时间
			autoCloseDelay: {
        type: Number,
				default: 50
			},
			closeButton: {
        type: Object,
				default () {
          return {
            text: '关闭',
						callback: undefined
					}
				}
			},
			enableHtml: {
        type: Boolean,
				default: false
			}
		},
		mounted() {
      this.updateHeight()
      this.handleAutoClose()
    },
    methods: {
      handleAutoClose(){
        if (this.autoClose) {
          setTimeout(()=>{
            this.close()
          }, this.autoCloseDelay * 1000)
        }
			},
      updateHeight() {
        this.$nextTick(()=>{
          // 高度从height 变为 min-height之后 子元素就不能继承了
          // 当打印出来的高度和自己看到的不一样时 可能时异步的问题 $nextTick解决异步问题 当数据更新了，在dom中渲染后，自动执行该函数
          // 获取css的高度要使用getBoundingClientRect() 不能使用style.height
          this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`;
        })
			},
      close() {
        //移除元素
        this.$el.remove()
				// 注销组件
				this.$destroy()
			},
      clickClose() {
        this.close()
				if (this.closeButton && typeof this.closeButton.callback === 'function') this.closeButton.callback()
			}
		}
  }
</script>

<style lang="scss" scoped>
	$font-size: 14px;
	$toast-min-height: 40px;
	$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
	// 实现居中
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	font-size: $font-size;
	min-height: $toast-min-height;
	// 文字垂直居中
	display: flex;
	align-items: center;
	background: $toast-bg;
	border-radius: 4px;
	box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
	color: white;
	padding: 0 16px;
	.message {
		padding: 8px 0;
	}
	.close{
		padding-left: 16px;
		flex-shrink: 0;
	}
	.line {
		height: 100%;
		border-left: 1px solid #666;
		margin-left: 16px;
	}
}
</style>
