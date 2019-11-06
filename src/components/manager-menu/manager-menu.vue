<template>
	<div class="g-manager-menu">
		<el-menu
			:default-active="activeIndex"
			class="manager-menu-vertical"
			@select="handleOpen"
			:collapse="isCollapse"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
		>
			<el-menu-item index="/manager">
				<i class="el-icon-user-solid" />
				<span slot="title">用户信息</span>
			</el-menu-item>
			<el-menu-item index="/manager/add_artic">
				<i class="el-icon-document-add" />
				<span slot="title">新建文章</span>
			</el-menu-item>
			<el-menu-item index="/manager/artic_list">
				<i class="el-icon-folder-opened" />
				<span slot="title">文章管理</span>
			</el-menu-item>
			<el-menu-item index="/manager/data_statistics">
				<i class="el-icon-s-data" />
				<span slot="title">数据统计</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: 'GManagerMenu',
		components: {
		},
		data () {
			return {
				activeIndex: '/manager',
				isCollapse: false
			}
		},
		mounted () {
		},
		methods: {
			handleOpen (key, keyPath) {
				console.log(key, keyPath)
				this.$router.push({ path: key })
			}
		}
	}
</script>

<style lang="scss">
	.g-manager-menu{
		height: 100%;
		.el-menu-vertical-demo:not(.el-menu--collapse) {
			width: 300px;
			min-height: 400px;
		}
		.manager-menu-vertical{
			height: 100%;
		}
	}
</style>
