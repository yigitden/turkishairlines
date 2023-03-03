import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import router from './router'
import store from './store'

library.add(fab,fas,far)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(store).mount('#app')
