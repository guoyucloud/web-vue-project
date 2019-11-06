<template>
	<div class="article_list">
		<el-row v-infinite-scroll="load">
			<el-col v-for="(o, index) in count" :key="o">
				<el-card shadow="hover">
					<div class="article_list-main">
						<a class="article_list-title" target="_blank" :href="'/artic_content?pid='+ o">
							{{ o }}
						</a>
						<p class="article_list-abstract">
							{{ index }}
						</p>
						<div class="article_list-meta">
							<span>
								<i class="el-icon-view" />
								{{ 666 }}
							</span>
							<span>
								<i class="el-icon-chat-dot-square" />
								{{ 777 }}
							</span>
							<span>
								<i class="el-icon-magic-stick" />
								{{ 888 }}
							</span>
							<span>
								<i class="el-icon-date" />
								{{ 20191008 }}
							</span>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'GArticleList',
		components: {
		},
		data () {
			return {
				currentDate: new Date(),
				count: 0
			}
		},
		methods: {
			load () {
				this.count += 2
			}
		}
	}
</script>
<style lang="scss">
	.article_list{
		.article_list-main{
			/*padding: 14px;*/
			/*height: 200px;*/
		}
		.article_list-title{
			margin: -7px 0 4px;
			display: inherit;
			font-size: 18px;
			font-weight: 700;
			line-height: 1.5;
			color: #333;
		}
		.article_list-abstract{
			margin: 0 0 8px;
			font-size: 13px;
			line-height: 24px;
			color: #999;
		}
		.article_list-meta{
			padding-right: 0!important;
			font-size: 12px;
			font-weight: 400;
			line-height: 20px;
			color: #333;
		}
	}
</style>
