<template>
  <div id="home-swiper">
    <swiper ref="homeSwiper">
      <swiper-item v-for="item in $store.state.a.bannerList" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    // deactivated(){
    //   console.log("home sper quxiao le ")
    //   this.$refs.homeSwiper.stopTimer()
    // },
    // activated(){
    //   console.log("home-seiper beijihuo le")
    //   this.$refs.homeSwiper.startTimer()
    // }
  }
</script>

<style scoped>
  /* 使用better-scroll之后，不需要下面这个属性 */
  /* #home-swiper{
    margin-top:7vh;
  } */
</style>