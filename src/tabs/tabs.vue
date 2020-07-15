<template>
	<div class="tabs">
		<slot></slot>
	</div>
</template>

<script>
	import Vue from 'vue'
  export default {
    name: "WheelTabs",
		props: {
      selected: {
        type: String,
				required: true
			},
			direction: {
        type: String,
				default: 'horizontal',
				validator(value){
				  return ['horizontal', 'vertical'].indexOf(value) >= 0
				}
			}
		},
		data() {
      return {
        eventBus: new Vue()
			}
		},
		created() {
      // this.$emit('update:selected', '这是 this $emit 出来的数据')
      this.event.$emit('update:selected', '这是 this eventBus $emit 出来的数据')
    },
		provide() {
			return {
			  eventBus: this.eventBus
			}
		}
  }
</script>

<style scoped>

</style>
