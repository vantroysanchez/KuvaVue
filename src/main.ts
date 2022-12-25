import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue3-cookies'
// import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCookie )

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
