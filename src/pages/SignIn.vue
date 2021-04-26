<style scoped>
.sign-in {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #2d3a4b;
}
.form {
	width: 380px;
	background-color: rgba(255, 255, 255, 0.88);
	border-radius: 4px;
	padding: 16px;
}
.btn {
	width: 100%;;
}
</style>

<template>
	<div class="sign-in">
		<el-form class="form" label-position="top">
			<h3>东莞市VOCs监查管理平台</h3>
			<el-form-item label="用户名">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input></el-input>
			</el-form-item>
			<el-form-item>
				<el-button class="btn" type="primary" @click="toMain">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	methods: {
		toMain () {
			this.$router.push('/main')
		}
	}
}
</script>
