<template>
  <div id="goods-list-item" @click="toDetails(commonGoodId)">
    <img class="img" v-lazy="commonImg" @load="imageLoaded" />
    <p class="title-link">
      {{ good.title }}
    </p>
    <div>
      <span class="price">{{ commonPrice }}</span>
      <span class="favor">
        <img src="~assets/img/home/star.png" class="star" />
        <span class="star-num">{{ good.cfav }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  components: {},
  props: {
    good: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoaded() {
      this.$bus.$emit("imgLoaded");
    },
    toDetails(iid) {
      this.$router.push({
        path: "/detail",
        query: {
          iid
        },
      });
    },
  },
  computed:{
    commonImg(){
      // 因为Home和Detail组件中展示的商品是不同接口返回的数据，数据结构不一样，所以需要在这里处理一下
      // 其中，Home组件中接口返回的商品图片在show.img里，而Detail组件中接口返回的商品图片在image里
      return this.good.img || this.good.image || this.good.show.img
    },
    commonPrice(){
      // 价格也需要进行处理
      return this.good.oldPrice || ("￥" + this.good.price)
    },
    commonGoodId(){
      //商品id也要进行处理
      return this.good.iid || this.good.item_id
    }
  }
};
</script>

<style scoped>
#goods-list-item {
  width: 45%;
  height: 70vw;
}
.img {
  width: 100%;
  height: 80%;
  border-radius: 5px;
}
.title-link {
  /* 内联元素设置宽高不起作用 */
  display: block;
  /* 如果没有有效的宽和高的话，下面的css样式不起作用 */
  width: 100%;
  font-size: 12px;
  padding: 3px 0;
  /* 文本单行显示 */
  white-space: nowrap;
  /* 超出的部分隐藏并且用点显示 */
  text-overflow: ellipsis;
  overflow: hidden;
}
#goods-list-item div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  font-size: 16px;
  color: var(--color-tint);
}
.star {
  width: 16px;
  height: 16px;
}
.star-num {
  vertical-align: top;
}
</style>