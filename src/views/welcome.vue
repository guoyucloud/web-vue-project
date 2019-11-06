<template>
	<div class="welcome">
		<div class="welcome-main">
			<div class="welcome-title">
				<img src="./../assets/GuoYuCloudLogoAndTitle.png" alt="">
				<div class="welcome-go-home">
					<el-button
						round
						class="welcome-go-home__button"
						type="danger"
						@click="_goHome()"
					>
						进入主页
					</el-button>
					<el-button
						round
						class="welcome-go-home__button"
						type="danger"
						@click="_goBlog()"
					>
						进入博客
					</el-button>
				</div>
			</div>
		</div>
		<vue-particles
			color="#dedede"
			:particle-opacity="0.7"
			:particles-number="80"
			shape-type="circle"
			:particle-size="4"
			lines-color="#dedede"
			:lines-width="1"
			:line-linked="true"
			:line-opacity="0.4"
			:lines-distance="150"
			:move-speed="3"
			:hover-effect="true"
			hover-mode="grab"
			:click-effect="true"
			click-mode="push"
		/>
	</div>
</template>

<script>
	export default {
		name: 'Welcome',
		data () {
			return {
				blogUrl: 'https://blog.guoyucloud.com'
			}
		},
		components: {
		},
		methods: {
			_goHome () {
				this.$router.push('/home')
			},
			_goBlog () {
				window.open(this.blogUrl)
			}
		}
	}
</script>

<style lang="scss">
	.welcome{
		position: relative;
		width: 100%;
		height: 100%;
		.welcome-main{
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			text-align: center;
			display: flex;
			flex-flow: row wrap;
			justify-content:center;/*x轴对齐方式*/
			align-items:center;     /*y轴对滴方式*/
			height: 100vh;        /**屏幕高度百分百*/
			.welcome-title{
				img{
					width: 100%;
				}
				.welcome-go-home{
					width: 100%;
					.welcome-go-home__button{
						/*background-color: rgb(197,48,39);*/
						color: #FFF;
						background-color: rgba(197,0,0,0.3);
						border-color:rgba(197,48,39,0.3);
					}
					.welcome-go-home__button:hover{
						/*background-color: rgb(197,48,39);*/
						color: #FFF;
						background-color: rgba(197,48,39,1);
						border-color:rgba(197,48,39,1);
					}
				}
			}
		}
		#particles-js{
			width: 100%;
			height: 100%;
			background-image: url("./../assets/background.jpg");
		}
	}
</style>
