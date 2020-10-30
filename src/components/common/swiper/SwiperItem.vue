<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide",
  destroyed() {
    // console.log("swiper-item被销毁了")
  },
  created(){
    // console.log("swiper-item被创建了")
  }
};
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
}
</style>
