<template>
  <div id="home-goods-list">
    <goods-list
      v-if="currentIndex === 0"
      :goods="$store.state.a.goods.pop.list"
      width="100vw"
    />
    <goods-list
      v-if="currentIndex === 1"
      :goods="$store.state.a.goods.new.list"
      width="100vw"
    />
    <goods-list
      v-if="currentIndex === 2"
      :goods="$store.state.a.goods.sell.list"
      width="100vw"
    />
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList";

export default {
  name: "HomeGoodsList",
  components: { GoodsList },
  props: {
    currentIndex: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style>
</style>