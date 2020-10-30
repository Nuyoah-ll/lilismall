import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
// index.js导出的那个对象（默认导出）
import Toast from "components/common/toast"
import fastclick from "fastclick"
import VueLazyLoad from "vue-lazyload"

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// 注册
Vue.use(Toast)
// 使用fastclick
fastclick.attach(document.body)

// 使用图片懒加载插件
Vue.use(VueLazyLoad,{
  // 传入loading指定正在加载时的占位图
  loading:require("./assets/img/home/good-placeholder.png")
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
