<template>
	<div class="g-pdf">
		<canvas v-for="page in pages" :id="'canvas'+page" :key="page" />
	</div>
</template>
<script>
	import PDF from 'pdfjs-dist'
	PDF.disableWorker = true
	export default {
		name: 'GPdf',
		data () {
			return {
				width: 100,
				pages: 0,
				pdfDoc: ''
			}
		},
		props: {
			pdfUrl: {
				type: String,
				default: ''
			}
		},
		methods: {
			/* 加载PDF文件 */
			loadFile: function (url) {
				let _this = this
				PDF.getDocument(url).then(function (pdf) {
					_this.pdfDoc = pdf
					_this.pages = _this.pdfDoc.numPages
					_this.$nextTick(() => {
						_this.renderPage(1)
					})
				})
			},
			/* 渲染PDF文件 */
			renderPage: function (num) {
				let _this = this
				this.pdfDoc.getPage(num).then(function (page) {
					let canvas = document.getElementById('canvas' + num)
					let ctx = canvas.getContext('2d')
					let dpr = window.devicePixelRatio || 1// 设备像素比
					let bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio ||
						ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1// 浏览器在渲染canvas之前会用几个像素来来存储画布信息,类似img
					let ratio = dpr / bsr
					var viewport = page.getViewport(screen.availWidth / page.getViewport(1).width) // 用户网页的可视区域
					canvas.width = viewport.width * ratio// 画布大小,默认值是width:300px,height:150px
					canvas.height = viewport.height * ratio
					canvas.style.width = '100%'
					ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
					var renderContext = {
						canvasContext: ctx,
						viewport: viewport
					}
					page.render(renderContext)
					if (_this.pages > num) {
						_this.renderPage(num + 1)
					}
				})
			}
		},
		created: function () {
			this.loadFile(this.pdfUrl)
		}
	}
</script>
<style lang="scss">
	.g-pdf{
		width: 100%;
		height: 100%;
		overflow: scroll;
	}
</style>
