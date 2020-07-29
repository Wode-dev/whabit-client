import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import {
  store
} from './core/store.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')