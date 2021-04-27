<style scoped>
.main {
	width: 100vw;
	height: 100vh;
}
.el-aside {
	width: 200px;
	background-color: rgb(48, 65, 86);
}
.el-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #e0e0e0;
}
.el-main {
	padding: 24px;
}
</style>

<template>
	<el-container class="main">
		<el-aside width="200px">
			<el-menu
				:default-active="$route.path"
				class="el-menu-vertical-demo"
				background-color="rgb(48, 65, 86)"
				text-color="#fff"
				active-text-color="#1890ff"
				router>
				<template v-for="(item, i) in menu" :key="i">
					<el-submenu v-if="item.children && item.children.length > 0" :index="item.path">
						<template #title>
							<i v-if="item.icon" :class="item.icon"></i>
							<span>{{item.title}}</span>
						</template>
						<el-menu-item v-for="(subitem, j) in item.children" :key="j" :index="subitem.path">{{subitem.title}}</el-menu-item>
					</el-submenu>
					<el-menu-item v-else :index="item.path">
						<i v-if="item.icon" :class="item.icon"></i>
						<template #title>{{item.title}}</template>
					</el-menu-item>
				</template>
			</el-menu>
		</el-aside>

		<el-container>
			<el-header>
				<h4>东莞市VOCs监查管理平台</h4>
				<el-dropdown>
					<i class="el-icon-user" style="margin-right: 15px"></i>
					<span>管理员1</span>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>登出</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</el-header>

			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	data () {
		return {
			menu: [
                {
                    icon: 'el-icon-s-grid',
                    title: '区域列表',
                    path: '/main/check-files'
                },
                {
                    icon: 'el-icon-s-tools',
                    title: '系统设置',
                    path: '/main/settings'
                }
            ]
		}
	}
}
</script>

