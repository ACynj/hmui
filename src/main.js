import { createApp } from 'vue'
import App from './App.vue'
import HmButton from '@/components/button.vue'
import HmDialog from '@/components/dialog.vue'
import '@/assets/fonts/iconfont.css'
const app =  createApp(App)
app.component(HmButton.name, HmButton)
app.component(HmDialog.name, HmDialog)
app.mount('#app')
