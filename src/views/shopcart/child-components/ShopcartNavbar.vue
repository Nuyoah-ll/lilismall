<template>
  <div id="shopcart-navbar">
    <navbar>
      <template v-slot:center>
        <span>购物车（{{ $store.state.c.goodsInShopcart.length }}）</span>
      </template>
    </navbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar"

export default {
  name: "ShopcartNavbar",
  components: {
    Navbar
  },
};
</script>

<style scoped>
#shopcart-navbar{
  background-color: var(--color-tint);
  color: white;
}
</style>