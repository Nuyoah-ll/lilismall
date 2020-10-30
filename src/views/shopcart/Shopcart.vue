<template>
  <div id="shopcart">
    <shopcart-navbar />
    <scroll height="76vh" :probe-type="3" :pull-up-load="true">
      <shopcart-goods />
    </scroll>
    <shopcart-amount />
  </div>
</template>

<script>
import ShopcartNavbar from "./child-components/ShopcartNavbar";
import ShopcartGoods from "./child-components/ShopcartGoods";
import ShopcartAmount from "./child-components/ShopcartAmout";

import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Shopcart",
  components: {
    ShopcartNavbar,
    Scroll,
    ShopcartGoods,
    ShopcartAmount,
  },
};
</script>

<style scoped>
</style>