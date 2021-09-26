import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'

import './static/css/index.css'

const i18n = createI18n({
  legacy: false,
  locale: 'es'
})

createApp(App).use(router).use(store).use(i18n).mount('#app')
