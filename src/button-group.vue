<template>
  <div class="t-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WheelButtonGroup',
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== 'button') {
        console.warn(
          `t-button-group的子元素应该全部是 t-button， 但是你写的是${name}`
        );
      }
    }
  },
};
</script>

<style lang="scss" scoped>
$border-radius: 4px;
.t-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .t-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
