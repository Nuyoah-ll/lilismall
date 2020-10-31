<template>
  <div id="category-navbar">
    <navbar>
      <template v-slot:center>
        <p>商品分类</p>
      </template>
    </navbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar"
export default {
  name: "CategoryNavbar",
  components: {
    Navbar
  },
};
</script>

<style scoped>
#category-navbar{
  background-color: var(--color-tint);
  color: white;
}
</style>