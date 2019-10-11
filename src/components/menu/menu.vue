<template>
	<div class="g-menu">
		<el-menu
			:default-active="activeIndex"
			mode="horizontal"
			@select="handleSelect"
		>
			<el-menu-item index="/">
				首页
			</el-menu-item>
			<el-menu-item index="/artic_list">
				文章列表
			</el-menu-item>
			<el-menu-item index="/resume">
				个人简历
			</el-menu-item>
			<el-submenu index="1">
				<template slot="title">
					站长工具
				</template>
				<el-menu-item index="/login">
					登录
				</el-menu-item>
				<el-menu-item index="/manager">
					管理控制台
				</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					友情推广
				</template>
				<el-menu-item index="diy-1">
					丑妞手工作坊
				</el-menu-item>
				<el-menu-item index="diy-2">
					油田方太专卖店
				</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: 'GMenu',
		data () {
			return {
				activeIndex: '/'
			}
		},
		methods: {
			handleSelect (key, keyPath) {
				console.log(key, keyPath)
				if (key === '/login' || key === '/manager') {
					let routeUrl = this.$router.resolve({ path: key })
					window.open(routeUrl.href, '_blank')
				} else {
					this.$router.push({ path: key })
				}
			}
		}
	}
</script>

<style lang="scss">
	.g-menu{
		width: 500px;
		border-bottom: 0 !important;
		margin: 0 auto;
	}
</style>
