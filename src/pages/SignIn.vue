<style scoped>
.sign-in {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background-color: rgb(45, 58, 75, 0.3); */
	/* background-image: url('./bg.jpeg');
	background-size: 100vw 100vh;
	background-repeat: no-repeat; */
	position: relative;
}
.bg {
	position: absolute;
	top: 0px;
	width: 100vw;
	height: 100vh;
	opacity: 0.6;
	/* background-color: rgb(45, 58, 75, 0.3); */
}
.form {
	width: 380px;
	background-color: rgba(255, 255, 255, 0.88);
	border-radius: 4px;
	padding: 16px;
	z-index: 1;
}
.title {
	display: flex;
	align-items: center;
}
.logo {
	width: 40px;
	height: 40px;
	margin-right: 8px;
}
.btn {
	width: 100%;;
}
</style>

<template>
	<div class="sign-in">
		<img class="bg" src="/bg.jpeg" alt="">
		<el-form class="form" label-position="top">
			<h3 class="title"><img class="logo" src="/logo.png" />东莞市VOCs监查管理平台</h3>
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
