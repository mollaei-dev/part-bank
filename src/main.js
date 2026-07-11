import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/main.scss'

import 'vue-toastification/dist/index.css'
import Toast, { POSITION } from 'vue-toastification'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 2000,
  closeButton: false,
  closeOnClick: true,
  pauseOnHover: true,
  toastClassName: 'app-toast',
  bodyClassName: 'app-toast-body',
  transition: 'Vue-Toastification__fade',
  transitionDuration: 800,
})

app.mount('#app')
