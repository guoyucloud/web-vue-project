<template>
	<div class="g-header">
		<div class="header-logo">
			<img src="./../../assets/GuoYuCloudLogoAndTitle.png" alt="">
		</div>
		<div class="header-menu">
			<g-menu />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GHeader',
		data () {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.g-header{
		width: 100%;
		padding: 25px 0;
		.header-logo{
			width: 350px;
			height: 89px;
			text-align: center;
			margin: 0 auto;
			img{
				width: 100%;
			}
		}
		.header-menu{
			height: 61px;
			margin: 0 auto;
			border-bottom: solid 1px #e6e6e6;
		}
	}
</style>
