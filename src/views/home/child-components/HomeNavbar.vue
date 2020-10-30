<template>
  <div id="home-navbar" name="home-navbar">
    <navbar class="home-navbar">
      <template v-slot:center>
        <div class="navbar-title">购物街</div>
      </template>
    </navbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";

export default {
  name: "HomeNavbar",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.home-navbar {
  color: white;
  background-color: var(--color-tint);
  box-shadow: 0 1px 5px var(--color-tint);
  /* 使用better-scroll之后，不需要下面这个属性 */
  /* position: fixed; */
  /* top: 0; */
  /* z-index: 10; */
  width: 100vw;
}
</style>