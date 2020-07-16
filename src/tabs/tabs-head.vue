<template>
	<div class="tabs-head">
		<slot></slot>
		<div class="line" ref="line"></div>
		<div class="actions-wrapper">
			<slot name="actions"></slot>
		</div>

	</div>
</template>

<script>
  export default {
    name: "WheelTabsHead",
		inject: ['eventBus'],
		mounted() {
      this.eventBus.$on('update:selected',(item, vm)=>{
        let {width,  left} = vm.$el.getBoundingClientRect()
				this.$refs.line.style.width = `${width}px`
				this.$refs.line.style.transform = `translateX(${left}px)`
      })
    }

  }
</script>

<style lang="scss" scoped>
	$tab-height: 40px;
	$blue: skyblue;
	$border-color: #ddd;
.tabs-head {
	position: relative;
	display:  flex;
	height:$tab-height;
	justify-content: flex-start;
	align-items: center;
	border: 1px solid $border-color;
	> .actions-wrapper {
		margin-left: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 1em;
	}
	> .line {
		position: absolute;
		bottom: 0;
		border-bottom: 1px solid $blue;
		width: 100px;
		transition: all 250ms;
	}
}
</style>
