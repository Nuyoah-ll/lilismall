<template>
  <div id="detail-shop-info">
    <div class="shop-name">
      <img v-if="$store.getters.shopLogo" :src="$store.getters.shopLogo" />
      <span>{{ $store.getters.shopName }}</span>
    </div>

    <div class="shop-detail">
      <div class="shop-sale-info">
        <div class="total-sales">
          <p>{{ $store.getters.totalSales | showedTotalSales }}</p>
          <span>总销量</span>
        </div>
        <div class="goods-count">
          <p>{{ $store.getters.goodsCount }}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shop-score" v-if="$store.getters.shopScore">
        <div v-for="item in $store.getters.shopScore" :key="item.name">
          <span class="comment-desc">{{ item.name }}</span>
          <span
            class="score"
            :class="{ high: item.isBetter, low: !item.isBetter }"
            >{{ item.score }}</span
          >
          <span v-if="item.isBetter" class="high">高</span>
          <span v-else class="low" :class="{ red: item.isBetter }">低</span>
        </div>
      </div>
    </div>
    <button>进店逛逛</button>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  components: {},
  filters: {
    showedTotalSales(totalSales) {
      if (totalSales < 1000) {
        return totalSales;
      } else {
        return Math.floor(totalSales / 1000) / 10 + "万";
      }
    },
  },
};
</script>

<style scoped>
#detail-shop-info {
  padding: 5vw;
  font-size: 14px;
  border-top: 8px solid rgb(236, 236, 236);
  border-bottom: 8px solid rgb(236, 236, 236);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.shop-name {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.shop-name img {
  width: 8vh;
  height: 8vh;
  border-radius: 50%;
  margin-right: 10px;
}

.shop-detail {
  display: flex;
  justify-content: space-between;
  margin: 5vh 0;
}

.shop-sale-info {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 45vw;
  border-right: 1px solid rgb(236, 236, 236);
}

.total-sales,
.goods-count {
  text-align: center;
}

.total-sales > p,
.goods-count > p {
  font-size: 20px;
  font-weight: bold;
}

.shop-score div {
  width: 45vw;
  display: flex;
  justify-content: flex-start;
  padding: 0 7vw;
}

.comment-desc {
  width: 18vw;
}

.score {
  width: 10vw;
}

.high {
  color: red;
}

.low {
  color: green;
}

button{
  display: block;
  height: 5vh;
  width: 30vw;
  border-radius: 10px;
  margin: 0 auto;
  border: 1px solid rgb(216, 216, 216);
  background-color: rgb(245, 245, 245);
}
</style>