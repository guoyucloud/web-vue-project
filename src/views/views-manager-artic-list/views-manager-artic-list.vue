<template>
	<div class="views_manager_artic_list">
		<el-tabs
			type="border-card"
			:stretch="true"
			v-model="activeName"
			@tab-click="_tabClick"
			class="views_manager_artic_list-border-card"
		>
			<el-tab-pane
				label="文章列表"
				name="list"
			>
				<g-manager-article-list
					ref="viewsManagerArticListTable"
					@CB-handleEdit="_handleEdit"
					class="views_manager_artic_list-table"
				/>
			</el-tab-pane>
			<el-tab-pane label="编辑文章" name="edit" disabled>
				<g-manager-add-article class="views_manager_artic_list-add-article" />
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		name: 'GViewsManagerArticList',
		data () {
			return {
				activeName: 'list'
			}
		},
		components: {
		},
		methods: {
			_handleEdit () {
				this.activeName = 'edit'
			},
			_tabClick () {
				this.$nextTick(() => {
					this.$refs.viewsManagerArticListTable.tableHeightInit()
				})
			}
		}
	}
</script>
<style lang="scss">
	.views_manager_artic_list{
		width: 100%;
		height: 100%;
		.views_manager_artic_list-border-card{
			width: 100%;
			height: 100%;
			overflow: auto;
			.el-tabs__content{
				height: calc(100% - 39px - 30px);
				.el-tab-pane{
					width: 100%;
					height: 100%;
					.views_manager_artic_list-table{
						/*width: 100%;*/
						/*height: 100%;*/
					}
					.views_manager_artic_list-add-article{
						/*width: 100%;*/
						/*height: 100%;*/
					}
				}
			}
		}
	}
</style>
