<template>
	<div class="wrapper" :class="{error}">
		<input type="text" :value="value" :disabled="disabled" :readonly="readOnly">
		<template v-if="error">
			<Icon name="error" class="icon-error"></Icon>
			<span class="error-message">{{error}}</span>
		</template>
	</div>

</template>

<script>
  import Icon from './icon'

  export default {
    name: "WheelInput",
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readOnly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    },
    components: {
      Icon
    }
  }
</script>

<style lang="scss" scoped>
	$height: 32px;
	$border-color: #999;
	$border-color-hover: #666;
	$border-radius: 4px;
	$font-size: 12px;
	$border-shadow-color: rgba(0, 0, 0, 0.5);
	$danger: #f1453d;
	$border-shadow-color-danger: rgba($danger, .5);
	.wrapper {
		display: inline-flex;
		align-items: center;
		> :not(:last-child) {margin-right: .5em}
		> input {
			height: $height;
			border: 1px solid $border-color;
			border-radius: $border-radius;
			padding: 0 8px;
			font-size: inherit;
			&:hover {border-color: $border-color-hover;}
			&:focus {box-shadow: inset 0 1px 3px $border-shadow-color;outline: none;}
			&[disabled], &[readonly] {border-color: #ccc;color: #ccc;cursor: not-allowed;}
		}
		&.error {
			> input {
				border-color: $danger;
				&:focus {box-shadow: inset 0 1px 3px $border-shadow-color-danger;outline: none;}
			}
		}
		.icon-error {
			fill: $danger;
		}
		.error-message {
			color: $danger;
		}
	}
</style>
