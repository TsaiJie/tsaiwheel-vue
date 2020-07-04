<template>
	<button class="t-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
		<t-icon class="icon"  v-if="icon && !loading" :name="icon"></t-icon>
		<t-icon class="icon loading" v-if="loading" name="loading"></t-icon>
		<div class="content">
			<slot></slot>
		</div>

	</button>
</template>

<script>
  export default {
    props: {
      icon: {type: String},
			loading: {
        type: Boolean,
				default: false
			},
			iconPosition: {
        type: String,
				default: 'left',
				validator(value){
				  return value === 'left' || value === 'right'
				}
			}
    }
  }
</script>

<style lang="scss">
	@keyframes spin {
		0% { transform: rotate(0deg)}
		100% { transform: rotate(360deg)}
	}
	.t-button {
		display: inline-flex;
		/*垂直居中*/
		justify-content: center;
		align-items: center;
		vertical-align: middle;

		font-size: var(--font-size);
		height: var(--button-height);
		padding: 0 1em;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		background: var(--button-bg);
		&:hover {
			border-color: var(--border-color-hover);
		}
		&:active {
			background-color: var(--button-active-bg);
		}
		&:focus {
			outline: none;
		}
		/*默认icon在前面 content在后面*/
		> .icon {
			order: 1;
			margin-right: .3em;
		}

		> .content {
			order: 2;
		}
		/*如果iconPosition = right 则 content在前 icon在后*/
		&.icon-right {
			> .icon {
				order: 2;
				margin-left: .3em;
				margin-right: 0;
			}
			> .content {
				order: 1
			}
		}
		.loading {
			animation: spin 2s infinite linear;
		}
	}
</style>
