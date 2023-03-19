import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ViewUIPlus from 'view-ui-plus'
import router from './router'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './theme.less'
import App from './App.vue'

createApp(App)
.use(router)
.use(createPinia())
.use(ViewUIPlus)
.mount('#app')
