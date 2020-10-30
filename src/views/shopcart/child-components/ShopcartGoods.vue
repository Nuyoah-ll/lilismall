<template>
  <div id="shopcart-goods" v-if="$store.state.c.goodsInShopcart.length > 0" ref="shopcart">
    <shopcart-item v-for="(item,index) in $store.state.c.goodsInShopcart" :key="item.iid" :good="item" :good-index="index"/>
  </div>
</template>

<script>
import ShopcartItem from "components/content/shopcartItem/ShopcartItem"

export default {
  name: "ShopcartGoods",
  components: {
    ShopcartItem
  }
};
</script>

<style scoped>

</style>