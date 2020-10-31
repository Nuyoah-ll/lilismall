<template>
  <div id="shopcart-item">
    <div class="shopcart-shop-info">
      <div class="select-icon" @click="selectAllGood(goodIndex)">
        <img src="~assets/img/common/对号.png" v-if="isSelected(this.goodIndex)" />
        <img src="~assets/img/common/对号-灰色.png" v-else />
      </div>
      <img class="shop-image" src="~assets/img/common/商店.png" />
      <div class="shop-name">{{ good.shopInfo.name }}</div>
      <img class="bt" src="~assets/img/common/大于号.png" />
    </div>

    <div
      class="good-info"
      v-for="(item, index) in good.paramsCompose"
      :key="item.color + item.size"
    >
      <div class="select-icon" @click="selectThisGood(index, goodIndex)">
        <img src="~assets/img/common/对号.png" v-if="item.isReallySelected" />
        <img src="~assets/img/common/对号-灰色.png" v-else />
      </div>
      <img :src="good.image" alt="" class="good-image" />
      <div class="detail-info">
        <p class="good-title">{{ good.title }}</p>
        <div class="good-params">
          <span>{{ item.color }}{{ item.size }}</span>
        </div>
        <div class="price-and-num">
          <span class="price">{{ "￥" + good.realPrice }}</span>
          <span class="good-num">{{ "×" + item.num }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import * as types from "@/store/constant"

export default {
  name: "ShopcartItem",
  props: {
    good: {
      type: Object,
      required: true,
    },
    // 用于接收当前商品的店铺索引值
    goodIndex:{
      type:Number,
      required:true
    }
  },
  components: {},
  methods:{
    // 设置是否选择某单个商品型号组合，需要传递商品索引值和尺码组合的索引值
    selectThisGood(index,goodIndex){
      this.$store.commit(types.SET_SOME_COMPOSE_IS_REALLY_SELECTED,{
        index,
        goodIndex
      })
    },
    // 设置是否全选某个店铺的所有商品
    selectAllGood(goodIndex){
      this.$store.commit(types.SET_ALL_COMPOSE_IS_REALLY_SELECTED,{
        goodIndex,
        isSelected:this.isSelected(this.goodIndex)
      })
    }
  },
  computed:{
    // 在getters不传参的情况下，可以直接使用mapGetters
    ...mapGetters(["isSelected"])
    // 当然如果要传递参数给getters的话，也可以，直接map，然后在使用的地方传入参数即可
    // 67行:isSelected:this.isSelected(this.goodIndex)  5行：v-if="isSelected(this.goodIndex)
    // isSelected(){
    //   return this.$store.getters.isSelected(this.goodIndex)
    // }
  }
}
</script>

<style scoped>
#shopcart-item {
  padding: 5vw;
  background-color: white;
  margin: 5vw 5vw 0 5vw;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 10px;
}

.shopcart-shop-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.shopcart-shop-info img {
  vertical-align: middle;
}

.select-icon img {
  margin-right: 5vw;
  width: 4vw;
  height: 4vw;
}

.shop-image {
  width: 5vw;
  height: 5vw;
  margin-right: 2vw;
}

.bt {
  width: 3vw;
  height: 3vw;
  margin-left: 2vw;
}

.shop-name {
  color: black;
  font-family: "黑体";
  font-weight: bolder;
}

.good-info {
  margin-top: 5vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
}

.good-image {
  width: 20vw;
  height: 30vw;
  border-radius: 5px;
}

.detail-info {
  height: 30vw;
  width: 45vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.good-title {
  color: black;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.good-params span {
  padding: 5px;
}

.price-and-num {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}

.price {
  color: var(--color-tint);
}

.good-num {
  border: 1px solid rgb(138, 138, 138);
  border-radius: 5px;
  padding: 1px;
}
</style>