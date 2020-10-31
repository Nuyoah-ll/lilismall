<template>
  <div id="goods-list" :style="{width}">
    <goods-list-item v-for="item in goods" :key="item.acm" :good="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      required: true,
      default(){
        return []
      },
    },
    width:{
      type:String,
      required:true
    }
  },
  created() {
    // console.log("HomeGoodsList被创建了");
  },
  destroyed() {
    // console.log("HomeGoodsList被销毁了");
  },
};
</script>

<style scoped>
#goods-list {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  /* 使flex items多行布局（默认为单行） */
  flex-wrap: wrap;
  /* 用于解决tabbar挡住最下面的商品的问题。所以这里设置一个下边距，且高度等于tabbar高度 */
  /* 使用了better-scroll之后就不需要了 */
  /* margin-bottom: 10vh; */
}
</style>