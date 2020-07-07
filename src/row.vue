<template>
	<!--
	间距的实现：
	gutter：
	1. 为col设置左右内边距padding 为gutter的一半，这时col会往内部收缩
	2. 为row 设置左右负的外边距margin，为gutter的一半， 这时col会进行拉伸，恢复到之前的状态，然后就会显现距离
	重点 在slot的情形下，如何把gutter从父组件给子组件
	-->
	<div class="row" :style="RowStyle" :class="RowClass">
		<slot></slot>
	</div>
</template>
<script>
  export default {
    name: 'WheelRow',
    props: {
      gutter: {
        type: [String, Number]
      },
			algin: {
        type: String,
				validator(value) {
          return ['left', 'center', 'right'].includes(value)
				}
			}
    },
    computed: {
      RowMargin() {
        return -this.gutter / 2 + 'px'
      },
      RowStyle() {
        return {
          marginLeft: this.RowMargin,
          marginRight: this.RowMargin,
        }
      },
			RowClass() {
        let {algin} = this
				return [algin && `algin-${algin}`]
			}
    },
    mounted() {
      this.$children.forEach(col => {
        col.gutter = this.gutter
      });
    }
  }
</script>
<style scoped lang="scss">
	.row {
		display: flex;
		&.algin-left{
			justify-content: flex-start;
		}
		&.algin-right{
			justify-content: flex-end;
		}
		&.algin-center{
			justify-content: center;
		}
	}
</style>
