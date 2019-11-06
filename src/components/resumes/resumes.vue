<template>
	<div class="resumes">
		<pdf
			class="resumes-pdf"
			v-for="i in numPages"
			:key="i"
			:src="src"
			:page="i"
		/>
	</div>
</template>

<script>
	import pdf from 'vue-pdf'

	const loadingTask = pdf.createLoadingTask('https://alsyy.lenovows.com/owa_sy/api/files/GetWatermarkFile?url=2064b041f948e817636e747d4f2384037e36bf545a8601709a561b4319773ef9f8ff2673a4211db3a740feba150bc5df3b1ab8d46b44c5176a04400a6a5d3e8793290f99dffcf879bcdbc330e289d88009eadd1c224c1f9f&isConvertPDF=true&watermarkText=guoyu&dup_t=1570523030763&token=')

	export default {
		name: 'GResumes',
		components: {
			pdf
		},
		data () {
			return {
				src: loadingTask,
				numPages: undefined
			}
		},
		mounted () {
			this.src.then(pdf => {
				this.numPages = pdf.numPages
			})
		}
	}
</script>
<style lang="scss">
	.resumes{
		margin: 0 auto;
		text-align: center;
		.resumes-pdf{
			display: inline-block;
			width: 100%;
			margin: 0 auto;
			text-align: center;
		}
	}
</style>
