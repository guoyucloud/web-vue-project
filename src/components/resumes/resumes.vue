<template>
	<div class="resumes">
		<g-pdf class="resumes-pdf" :pdf-url="resumesUrl" />
	</div>
</template>

<script>
	// import CPdf from './../pdf/CPdf'
	export default {
		name: 'GResumes',
		components: {
		},
		data () {
			return {
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
