<template>
  <div id="app">
    <!-- 之前使用fixed定位的时候写在这里的，使用better-scroll之后写在下面 -->
    <!-- <main-tabbar /> -->
    <keep-alive exclude="Detail">
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
    <main-tabbar v-if="isShowed"/>
  </div>
</template>

<script>
  import MainTabbar from "components/content/mainTabbr/MainTabbr.vue"
  export default {
    name: 'App',
    data(){
      return {
        isShowed:true
      }
    },
    components: {
      MainTabbar
    },
    watch:{
      $route:function(to,from){
        if(to.path === "/detail"){
          this.isShowed = false
        }else{
          this.isShowed = true
        }
      }
    }
  }
</script>

<style scoped>
  @import "./assets/css/base.css";
</style>