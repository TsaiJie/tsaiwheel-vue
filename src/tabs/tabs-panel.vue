<template>
	<div class="tabs-panel">
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: "WheelTabsPanel",
		inject: ['eventBus'],
		created() {
      this.eventBus.$on("update:selected",(name)=>{
        console.log(name)

			})
    }
  }
</script>

<style scoped>

</style>
