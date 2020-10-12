<template>
  <div id="app">
    <tabbar>
      <template v-slot:default>
        <tabbar-item url="/home" text-color="red">
          <template v-slot:icon>
            <img src="./assets/img/tabbar/home.svg" alt="首页">
          </template>
          <template v-slot:icon-active>
            <img src="./assets/img/tabbar/home_active.svg" alt="购物车">
          </template>
          <template v-slot:text>首页</template>
        </tabbar-item>

        <tabbar-item url="/category" text-color="red">
          <template v-slot:icon>
            <img src="./assets/img/tabbar/category.svg" alt="分类">
          </template>
          <template v-slot:icon-active>
            <img src="./assets/img/tabbar/category_active.svg" alt="购物车">
          </template>
          <template v-slot:text>分类</template>
        </tabbar-item>

        <tabbar-item url="/shopcart" text-color="red">
          <template v-slot:icon>
            <img src="./assets/img/tabbar/shopcart.svg" alt="购物车">
          </template>
          <template v-slot:icon-active>
            <img src="./assets/img/tabbar/shopcart_active.svg" alt="购物车">
          </template>
          <template v-slot:text>购物车</template>
        </tabbar-item>

        <tabbar-item url="/profile" text-color="red">
          <template v-slot:icon>
            <img src="./assets/img/tabbar/profile.svg" alt="我的">
          </template>
          <template v-slot:icon-active>
            <img src="./assets/img/tabbar/profile_active.svg" alt="购物车">
          </template>
          <template v-slot:text>我的</template>
        </tabbar-item>
      </template>
    </tabbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Tabbar from "components/common/Tabbar/Tabbar.vue"
  import TabbarItem from "components/common/TabbarItem/TabbarItem.vue"

  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>
  @import "./assets/css/base.css";
</style>