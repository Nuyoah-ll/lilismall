<template>
  <div id="shopcart-amount">
    <div class="all-select" @click="selectAllGoodInAllStore">
      <img src="~assets/img/common/对号.png" alt="" v-if="$store.getters.isAllSelected" />
      <img src="~assets/img/common/对号-灰色.png" alt="" v-else />
      <span>全选</span>
    </div>

    <div class="amount">
      <span>合计：</span>
      <span class="price">{{totalPrice}}</span>
    </div>

    <div class="sum-up" @click="sumUp">结算</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "@/store/constant"

export default {
  name: "ShopcartAmount",
  components: {},
  computed: {
    ...mapGetters(["isAllSelected","totalPrice","isNoGoodSelected"]),
  },
  methods: {
    selectAllGoodInAllStore() {
      this.$store.commit(types.SET_ALL_GOODS_IS_REALLY_SELECTED,this.isAllSelected)
    },
    sumUp(){
      // ...其他逻辑
      // 若没有选中任何商品，则弹出toast告知
      if(this.isNoGoodSelected){
        this.$toast.show("请先选择需要购买的商品")
      }
    }
  },
};
</script>

<style scoped>
#shopcart-amount {
  font-size: 15px;
  box-sizing: border-box;
  height: 7vh;
  padding: 5vw;
  /* background-color: white; */
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.all-select img {
  width: 4vw;
  height: 4vw;
}

.all-select span{
  vertical-align: top;
}

.amount .price {
  color: var(--color-tint);
}

.sum-up {
  color: white;
  padding: 1vw;
  border-radius: 10px;
  background-color: var(--color-tint);
}
</style>