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
	border-radius: 4px;
	padding: 24px;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}
.el-pagination {
	display: flex;
	justify-content: flex-end;
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
			<el-button class="search-btn" size="small" type="primary">
				<i class="el-icon-search"></i>
				搜索
			</el-button>
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
						<el-button @click="handleClick(scope.row)" type="text" size="small">
							<i class="el-icon-view"></i>
							查看
						</el-button>
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
const areaArr = '长安镇、东城街道、南城街道、万江街道、莞城街道、石碣镇、石龙镇、茶山镇、石排镇、企石镇、横沥镇、桥头镇、谢岗镇、东坑镇、常平镇，寮步镇、樟木头镇、大朗镇、黄江镇、清溪镇、塘厦镇、凤岗镇、大岭山镇、虎门镇、厚街镇、沙田镇、道滘镇、洪梅镇、麻涌镇、望牛墩镇、中堂镇、高埗镇'.split('、')
const comArr = ['东莞久耐机械有限公司', '东莞升联药品机械模具有限公司', '东莞市德泰力机械有限公司']

for (let i = 0; i < 10; i++) {
	const dateRange = Math.ceil(Math.random() * 1000000000) + 1000000000
	tableData.push({
		date: formatTime(now - dateRange),
		area: areaArr[Math.ceil(Math.random() * areaArr.length) - 1],
		company: comArr[Math.ceil(Math.random() * comArr.length) - 1]
	})
}

const options = []
areaArr.forEach(area => {
	options.push({
		value: area,
		label: area,
		children: comArr.map(com => {
			return { value: com, label: com }
		})
	})
})

export default {
	data () {
		return {
			options: options,
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