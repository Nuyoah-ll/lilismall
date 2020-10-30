import ToastPlugin from "./ToastPlugin.vue";

const obj = {};

// 由于需要使用Vue.use(obj)来注册这个插件，所以obj需要暴露一个install方法
// 该方法的第一个参数是Vue构造器，第二个参数可设计可不设计，它接受Vue.use(xxx,options)里的options
obj.install = function(Vue){
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(ToastPlugin);
  // 2.使用new的方式根据组件构造器来实例化组件
  const toast = new toastConstructor();
  // 3.将组件实例手动挂载到某个元素上(类似于App组件挂载到div.app上)
  // new Vue({
  //   store,
  //   router,
  //   render: h => h(App),
  // }).$mount('#app')
  toast.$mount(document.createElement("div"));
  // toast.$el对应的就是这个div，将它直接设置在body中
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}

export default obj;