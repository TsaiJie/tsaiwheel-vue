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
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    methods: {
      checkChild() {
        // $children 只能获取子组件 不能获取子元素
        if (this.$children.length === 0) {
          console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-body， 但是没有写子组件')
        }
      },
      selectTab() {
        this.$children.forEach((vm) => {
          if (vm.$options.name === 'WheelTabsHead') {
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === 'WheelTabsItem' && childVm.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    mounted() {
			this.checkChild()
			this.selectTab()
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
