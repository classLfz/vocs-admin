import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import {
	ElAside,
	ElBreadcrumb,
	ElBreadcrumbItem,
	ElButton,
	ElCard,
	ElCascader,
	ElContainer,
	ElDatePicker,
	ElDescriptions,
	ElDescriptionsItem,
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElForm,
	ElFormItem,
	ElHeader,
	ElIcon,
	ElImage,
	ElInput,
	ElMain,
	ElMenu,
	ElMenuItem,
	ElPagination,
	ElSubmenu,
	ElTable,
	ElTableColumn
} from 'element-plus'

const app = createApp(App)

app.use(ElInput)
app.use(ElButton)
app.use(ElForm)
app.use(ElFormItem)
app.use(ElContainer)
app.use(ElAside)
app.use(ElHeader)
app.use(ElMain)
app.use(ElDropdown)
app.use(ElDropdownMenu)
app.use(ElDropdownItem)
app.use(ElMenu)
app.use(ElSubmenu)
app.use(ElMenuItem)
app.use(ElIcon)
app.use(ElTable)
app.use(ElTableColumn)
app.use(ElDatePicker)
app.use(ElCascader)
app.use(ElPagination)
app.use(ElCard)
app.use(ElBreadcrumb)
app.use(ElBreadcrumbItem)
app.use(ElDescriptions)
app.use(ElDescriptionsItem)
app.use(ElImage)

app.use(router)

app.mount('#app')
