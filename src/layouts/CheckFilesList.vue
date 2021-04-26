<style scoped>
.operator {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 24px;
}
.label {
	margin-left: 12px;
	margin-right: 4px;
}
.search-btn {
	margin-left: 8px;
}
.breadcrumb {
	margin-bottom: 24px;
}
.table-container {
}
.el-pagination {
	float: right;
	margin-top: 24px;
}
</style>

<template>
	<div>
		<el-breadcrumb class="breadcrumb" separator="/">
			<el-breadcrumb-item :to="{ path: '/main/check-files/list' }">区域列表</el-breadcrumb-item>
			<el-breadcrumb-item>检测文件列表</el-breadcrumb-item>
		</el-breadcrumb>

		<div class="operator">
			<span class="label">区域/企业：</span>
			<el-cascader
				size="small"
				placeholder="搜索区域/企业"
				:options="options"
				filterable>
			</el-cascader>
			<span class="label">上传日期：</span>
			<el-date-picker
				size="small"
				type="daterange"
				range-separator="至"
				start-placeholder="开始日期"
				end-placeholder="结束日期">
			</el-date-picker>
			<el-button class="search-btn" size="small" type="primary">搜索</el-button>
		</div>

		<div class="table-container">
			<el-table
				:data="tableData"
				stripe
				style="width: 100%">
				<el-table-column
					prop="date"
					label="上传时间">
				</el-table-column>
				<el-table-column
					prop="area"
					label="区域">
				</el-table-column>
				<el-table-column
					prop="company"
					label="企业">
				</el-table-column>
				<el-table-column
					fixed="right"
					label="操作"
					width="100">
					<template #default="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					</template>
				</el-table-column>
			</el-table>

			<el-pagination
				background
				layout="prev, pager, next"
				:total="100">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import { formatTime } from '../util'

const tableData = []
const now = Date.now()

for (let i = 0; i < 10; i++) {
	const dateRange = Math.ceil(Math.random() * 1000000)
	tableData.push({
		date: formatTime(now - dateRange),
		area: '东城街道',
		company: '东莞久耐机械有限公司'
	})
}

export default {
	data () {
		return {
			options: [{
				value: 'dongcheng',
				label: '东城街道',
				children: [{
					value: 'dongguanjiunai',
					label: '东莞久耐机械有限公司'
				}]
			}],
			tableData: tableData.sort((i1, i2) => new Date(i1.date) - new Date(i2.date))
		}
	},

	methods: {
		handleClick (e) {
			console.log(e)
			this.$router.push('/main/check-files/detail')
		}
	}
}
</script>