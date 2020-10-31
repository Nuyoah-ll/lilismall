<template>
  <div id="detail-recommed-goods">
    <p class="recomment-title">热门推荐</p>
    <p class="none-recommend" v-if="!$store.state.b.detailRecommendList">暂无推荐</p>
    <goods-list :goods="$store.state.b.detailRecommendList" width="100vw"/>
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList"
export default {
  name: "DetailRecommendGoods",
  components: {
    GoodsList
  },
};
</script>

<style scoped>
.recomment-title{
  margin:2vh;
}
.none-recommend{
  text-align: center;
}
</style>