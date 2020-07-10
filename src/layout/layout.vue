<template>
<div class="layout" :class="layoutClass">
	<slot></slot>
</div>
</template>

<script>
  export default {
    name: "WheelLayout",
		data(){
      return {
        layoutClass: {
          hasSider: false
				}
			}
		},
		mounted() {
      this.$children.forEach(vm=>{
        if(vm.$options.name === 'WheelSider') {
          this.layoutClass.hasSider = true
				}
      })
    }
  }
</script>

<style lang="scss" scoped>
.layout {
	/*flex-grow的意思已经很明显了，就是索取父容器的剩余空间，默认值是0*/
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	&.hasSider {
		flex-direction: row;
	}
}
</style>
