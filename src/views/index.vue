<template>
	<el-container class="index-container">
		<el-header>
			<g-header />
		</el-header>
		<el-main>
			<router-view />
		</el-main>
		<el-footer>
			<g-footer />
		</el-footer>
	</el-container>
</template>

<script>
	export default {
		name: 'Index',
		data () {
			return {
			}
		},
		mounted () {
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.index-container.el-container{
		width: 60%;
		margin: 0 auto;
		height: 100%;
		overflow: hidden;
		font-size: 14px;
		.el-header{
			width: 100%;
			margin: 0 auto;
			height: 200px !important;
		}
		.el-main{
			width: 100%;
			margin: 0 auto;
			/*text-align: center;*/
			overflow: hidden;
			overflow-y: auto;
		}
		.el-footer{
			width: 100%;
			margin: 0 auto;
			height: 30px !important;
		}
	}
</style>
