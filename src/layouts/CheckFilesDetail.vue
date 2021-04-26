<style scoped>
.breadcrumb {
	margin-bottom: 24px;
}
.images {
	display: flex;
	flex-wrap: wrap;
	margin-top: 12px;
}
.el-image {
	width: 300px;
	height: auto;
	margin-right: 8px;
}
</style>

<template>
	<div>
		<el-breadcrumb class="breadcrumb" separator="/">
			<el-breadcrumb-item :to="{ path: '/main/check-files/list' }">区域列表</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/main/check-files/list' }">检测文件列表</el-breadcrumb-item>
			<el-breadcrumb-item>详情</el-breadcrumb-item>
		</el-breadcrumb>
		<el-card shadow="hover">
			<template #header>
				<div class="card-header">
					<span>生产车间排风扇口</span>
					<!-- <el-button class="button" type="text">操作按钮</el-button> -->
				</div>
			</template>

			<el-descriptions title="" border>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-view"></i>
						浓度值
					</template>
					10%
				</el-descriptions-item>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-user"></i>
						上传人
					</template>
					张三
				</el-descriptions-item>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-date"></i>
						上传时间
					</template>
					2020-04-26 12:00:00
				</el-descriptions-item>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-setting"></i>
						监测仪器编号
					</template>
					12345678
				</el-descriptions-item>
			</el-descriptions>
			<div class="images">
				<el-image lazy src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
				<el-image lazy src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
				<el-image lazy src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
			</div>
		</el-card>
		<el-card shadow="hover">
			<template #header>
				<div class="card-header">
					<span>原料桶</span>
					<!-- <el-button class="button" type="text">操作按钮</el-button> -->
				</div>
			</template>

			<el-descriptions title="" border>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-view"></i>
						浓度值
					</template>
					9%
				</el-descriptions-item>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-user"></i>
						上传人
					</template>
					李四
				</el-descriptions-item>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-date"></i>
						上传时间
					</template>
					2020-04-26 12:00:00
				</el-descriptions-item>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-setting"></i>
						监测仪器编号
					</template>
					12345678
				</el-descriptions-item>
			</el-descriptions>
			<div class="images">
				<el-image lazy src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
				<el-image lazy src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
				<el-image lazy src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
			</div>
		</el-card>
		<el-card shadow="hover">
			<template #header>
				<div class="card-header">
					<span>原材料传输管道</span>
					<!-- <el-button class="button" type="text">操作按钮</el-button> -->
				</div>
			</template>

			<el-descriptions title="" border>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-view"></i>
						浓度值
					</template>
					7%
				</el-descriptions-item>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-user"></i>
						上传人
					</template>
					赵五
				</el-descriptions-item>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-date"></i>
						上传时间
					</template>
					2020-04-26 12:00:00
				</el-descriptions-item>
				<el-descriptions-item>
					<template #label>
						<i class="el-icon-setting"></i>
						监测仪器编号
					</template>
					12345678
				</el-descriptions-item>
			</el-descriptions>
			<div class="images">
				<el-image lazy src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
				<el-image lazy src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
				<el-image lazy src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
	data () {
		return {
			fileData: []
		}
	}
}
</script>