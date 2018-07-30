// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
// import router from './router'
// 引入需要的element-ui组件
// import { Button, Select } from 'element-ui'

Vue.config.productionTip = false

// 使用ElementUI组件
Vue.use(ElementUI)
// Vue.use(Button)
// Vue.use(Select)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
//  router,
//  components: { App },
//  template: '<App/>'
})
