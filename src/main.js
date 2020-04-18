import Vue from 'vue'
import App from './App.vue'
import './mock/index';
import http from './http/index'
import router from './router/index'

import store from './store/index'
//5. 引用字体图标
import "./common/stylus/style.styl"
import './filter/index'
import headertop from './components/HeaderTop/HeaderTop.vue'
Vue.prototype.$http=http;
Vue.prototype.$bus=new Vue()
Vue.component('header-top',headertop)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
