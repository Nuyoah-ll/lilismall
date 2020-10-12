import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("views/Home");
const Category = () => import("views/Category");
const Shopcart = () => import("views/Shopcart");
const Profile = () => import("views/Profile");

Vue.use(VueRouter)

// 解决重复点击路由报错的bug
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shopcart",
    component: Shopcart
  },
  {
    path: "/profile",
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;