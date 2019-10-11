<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
	html,body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		width: 100%;
		height: 100%;
		.el-header,.el-main,.el-footer{
			padding: 0;
		}
	}
	.el-input__inner{
		background:none !important;
		outline:none !important;
		border:none !important;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
</style>
