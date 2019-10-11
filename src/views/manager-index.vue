<template>
	<el-container class="manager-index-container">
		<el-aside>
			<g-manager-menu />
		</el-aside>
		<el-main>
			<router-view />
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'ManagerIndex',
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
	.manager-index-container.el-container{
		width: 100%;
		height: 100%;
		align-items: stretch;
		.el-main {
			margin: 15px!important;
			padding: 25px!important;
			box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
		}
	}
</style>
