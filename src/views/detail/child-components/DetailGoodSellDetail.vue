<template>
  <div id="detail-good-sell-detail">
    <p class="title">{{ $store.getters.title }}</p>
    <div class="price-info">
      <span class="new-price">{{ $store.getters.newPrice }}</span>
      <span class="old-price">{{ $store.getters.oldPrice }}</span>
      <span class="discount-info" v-if="$store.getters.discountDesc">{{
        $store.getters.discountDesc
      }}</span>
    </div>
    <div class="other-info">
      <span>{{ $store.getters.saleAmounts }}</span>
      <span>{{ $store.getters.collect }}</span>
      <span>{{ $store.getters.deliverMethod }}</span>
    </div>
    <div class="services">
      <div
        v-for="item in $store.getters.services"
        :key="item.name"
        class="services-item"
      >
        <img :src="item.icon" v-if="item.icon" @load="imageLoaded"/>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodSellDetail",
  components: {},
  methods:{
    imageLoaded(){
      this.$bus.$emit("imgLoaded")
    }
  }
};
</script>

<style scoped>
#detail-good-sell-detail {
  padding: 5vw;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.price-info {
  margin: 2vh 0;
}
.new-price {
  font-size: 24px;
  color: var(--color-tint);
}
.old-price {
  font-size: 14px;
  color: gray;
  text-decoration: line-through;
  display: inline-block;
  margin-left: 10px;
}
.discount-info {
  font-size: 14px;
  color: white;
  background-color: var(--color-tint);
  vertical-align: top;
  margin-left: 10px;
  padding: 0 3px;
  border-radius: 5px;
}
.other-info {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: gray;
  padding-bottom: 2vh;
  border-bottom: 1px solid rgb(236, 236, 236);
}

.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 2vh 0;
}

.services-item {
  display: flex;
  align-items: center;
  margin-right: 5vw;
}

.services .services-item img {
  width: 14px;
  height: 14px;
}

.services .services-item span {
  font-size: 14px;
}
</style>