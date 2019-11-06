<template>
	<div class="g-footer">
		<span>
			@GuoYu | WEB前端技术 | <a :href="url" target="_blank">津ICP备18000299号-1</a>
		</span>
	</div>
</template>

<script>
	export default {
		name: 'GFooter',
		data () {
			return {
				url: 'http://www.beian.miit.gov.cn/'
			}
		}
	}
</script>

<style lang="scss">
	.g-footer{
		width: 100%;
		margin: 0 auto;
		border-top: solid 1px #e6e6e6;
		line-height: 30px;
		text-align: center;
		color: #666;
		font-size: 12px;
		a, a:hover, a:visited, a:link, a:active {
			color:#666;
		}
	}
</style>
