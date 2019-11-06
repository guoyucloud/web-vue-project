<template>
	<div class="resumes">
		<iframe class="resumes-pdf" :src="'/pdf/web/viewer.html?file=' + resumesUrl" frameborder="0" />
	</div>
</template>

<script>
	export default {
		name: 'GResumes',
		components: {
		},
		data () {
			return {
				numPages: undefined,
				resumesUrl: '/resumes/gy_tj_resumes.pdf'
			}
		},
		mounted () {
		}
	}
</script>
<style lang="scss">
	.resumes{
		width: 100%;
		height: 100%;
		margin: 0 auto;
		text-align: center;
		.resumes-pdf{
			display: inline-block;
			width: 100%;
			height: 100%;
			margin: 0 auto;
			text-align: center;
		}
	}
</style>
