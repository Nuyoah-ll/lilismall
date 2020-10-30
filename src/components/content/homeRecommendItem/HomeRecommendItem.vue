<template>
  <div id="home-recommend-item">
    <div class="img"><slot name="img"></slot></div>
    <div class="text"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendItem",
  components: {},
};
</script>

<style scoped>
#home-recommend-item {
  width: 20%;
}

.img {
  border-radius: 50%;
}

.text{
  margin:1vh 0;
  text-align: center;
  font-size:14px;
}
</style>