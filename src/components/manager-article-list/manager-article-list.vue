<template>
	<div class="manager-article-list" ref="managerArticleList">
		<el-table
			:data="tableData"
			class="manager-article-list-table"
			:height="tableHeight"
		>
			<el-table-column
				label="日期"
				width="180"
			>
				<template slot-scope="scope">
					<i class="el-icon-time" />
					<span style="margin-left: 10px">{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column
				label="标题"
				width="180"
			>
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<div>{{ scope.row.name }}</div>
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">
								{{ scope.row.name }}
							</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button
						size="mini"
						@click="handleEdit(scope.$index, scope.row)"
					>
						编辑
					</el-button>
					<el-button
						size="mini"
						type="danger"
						@click="handleDelete(scope.$index, scope.row)"
					>
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: 'GManagerArticleList',
		data () {
			return {
				tableHeight: null,
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}]
			}
		},
		mounted () {
			this.$nextTick(() => {
				this.tableHeightInit()
			})
		},
		methods: {
			tableHeightInit () {
				console.log(this.$refs.managerArticleList.clientHeight)
				this.tableHeight = this.$refs.managerArticleList.clientHeight
			},
			handleEdit (index, row) {
				console.log(index, row)
				this.$emit('CB-handleEdit')
			},
			handleDelete (index, row) {
				console.log(index, row)
			}
		}
	}
</script>

<style lang="scss">
	.manager-article-list{
		width: 100%;
		height: 100%;
	}
</style>
