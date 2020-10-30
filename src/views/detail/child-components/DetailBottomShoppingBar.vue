<template>
  <div id="detail-bottom-shopping-bar">
    <div class="services-item">
      <div class="service-staff">
        <div></div>
        <span>客服</span>
      </div>
      <div class="store">
        <div></div>
        <span>店铺</span>
      </div>
      <div class="collection">
        <div></div>
        <span>收藏</span>
      </div>
    </div>

    <div class="shopping">
      <div class="add-to-shopcart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomShoppingBar",
  components: {},
};
</script>

<style scoped>
#detail-bottom-shopping-bar{
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.services-item{
  flex:1;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}

.services-item > div {
  transform: scale(0.7);
}

.service-staff div{
  height:42px;
  width: 44px;
  background: url("~assets/img/detail/detail_bottom.png");
  background-position: 0 -106px;
}

.store div{
  height:42px;
  width: 44px;
  background: url("~assets/img/detail/detail_bottom.png");
  background-position: 0 -196px;
}

.collection div{
  height:42px;
  width: 44px;
  background: url("~assets/img/detail/detail_bottom.png");
}

.shopping{
  display: flex;
  justify-content: space-evenly;
  line-height: 10vh;
  text-align: center;
}
.add-to-shopcart{
  height: 10vh;
  width: 30vw;
  background-color: yellow;
  color:black;
}

.buy{
  height: 10vh;
  width: 20vw;
  background-color: var(--color-tint);
  color:white;
}

</style>