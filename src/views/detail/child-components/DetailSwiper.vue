<template>
  <div id="detail-swiper">
    <swiper class="detail-swiper">
      <swiper-item v-for="item in $store.state.b.detailImages" :key="item">
        <img :src="item" alt="商品详图" @load="imageLoaded"/>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  methods:{
    imageLoaded(){
      this.$bus.$emit("imgLoaded")
    }
  }
};
</script>

<style scoped>
.detail-swiper{
  height: 50vh;
}
</style>