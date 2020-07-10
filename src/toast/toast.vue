<template>
	<div class="toast">
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: "WheelToast",
  }
</script>

<style lang="scss" scoped>
	$font-size: 14px;
	$height: 40px;
	$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
	// 实现居中
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	font-size: $font-size;
	height: $height;
	// 文字垂直居中
	display: flex;
	align-items: center;
	background: $toast-bg;
	border-radius: 4px;
	box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
	color: white;
	padding: 0 16px;

}
</style>
