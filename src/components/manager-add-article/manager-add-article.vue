<template>
	<div class="manager-add-article">
		<el-input class="manager-add-article_title" v-model="input" placeholder="请输入标题" />
		<mavon-editor class="manager-add-article_mavon_editor" @save="bbq" v-model="value" />
	</div>
</template>

<script>
	let me
	export default {
		name: 'GManagerAddArticle',
		data () {
			return {
				value: '',
				input: ''
			}
		},
		created: function () {
			me = this
		},
		methods: {
			bbq (val, render) {
				console.log('me', me)
				console.log('title', me.input)
				console.log('value', me.value)
				console.log('val', val)
				console.log('render', render)
			}
		}
	}
</script>

<style lang="scss">
	.manager-add-article{
		width: 100%;
		height: 100%;
		.manager-add-article_title{
			margin-bottom: 5px;
		}
		.manager-add-article_mavon_editor{
			width: 100%;
			height: calc(100% - 45px);
		}
	}
</style>
