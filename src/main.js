import Vue from 'vue'
import App from './App.vue'
import './mock/index';
import http from './http/index'
import router from './router/index'

import store from './store/index'

Vue.prototype.$http=http;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
