import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

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

let baseurl = window.location.host;
// let baseurl = 'whabit.wode.lh';
let https = true;
axios.defaults.baseURL = `http${https ? 's' : ''}://api.${baseurl}`;

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')