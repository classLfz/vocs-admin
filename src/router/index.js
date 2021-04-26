import { createRouter, createWebHashHistory } from 'vue-router'
import SignIn from '../pages/SignIn.vue'
import Main from '../pages/Main.vue'
import CheckFiles from '../layouts/CheckFiles.vue'
import CheckFilesList from '../layouts/CheckFilesList.vue'
import CheckFilesDetail from '../layouts/CheckFilesDetail.vue'
import Settings from '../layouts/Settings.vue'

const routes = [
	{
		path: '/',
		component: SignIn
	},
	{
		path: '/main',
		component: Main,
		children: [
			{
				path: '',
				redirect: '/main/check-files',
				component: Main
			},
			{
				path: 'check-files',
				component: CheckFiles,
				children: [
					{
						path: '',
						redirect: '/main/check-files/list',
						component: CheckFiles
					},
					{
						path: 'list',
						component: CheckFilesList
					},
					{
						path: 'detail',
						component: CheckFilesDetail
					}
				]
			},
			{
				path: 'settings',
				component: Settings
			}
		]
	}
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes
})
