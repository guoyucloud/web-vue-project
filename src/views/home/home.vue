<template>
	<div class="home">
		<div class="home-calendar">
			<el-calendar v-model="value" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		components: {
		},
		data () {
			return {
				value: new Date()
			}
		}
	}
</script>

<style lang="scss">
	.home-calendar{
	}
</style>
