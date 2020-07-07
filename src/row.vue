<template>
<!--
间距的实现：
gutter：
1. 为col设置左右内边距padding 为gutter的一半，这时col会往内部收缩
2. 为row 设置左右负的外边距margin，为gutter的一半， 这时col会进行拉伸，恢复到之前的状态，然后就会显现距离
重点 在slot的情形下，如何把gutter从父组件给子组件
-->
	<div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
		<slot></slot>
	</div>
</template>
<script>
	export default {
	  name: 'WheelRow',
		props:{
	    gutter:{
	      type: [String,Number]
			}
		},
		mounted() {
      this.$children.forEach(col=>{
        col.gutter = this.gutter
      });
    }
  }
</script>
<style scoped lang="scss">
	.row {
		display: flex;
	}
</style>
