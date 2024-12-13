import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import 'normalize.css'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
