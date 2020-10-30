<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  height: 7vh;
  line-height: 7vh;
  text-align: center;
}

.left,
.right {
  display: flex;
  align-items: center;
  width: 70px;
}

.center {
  flex: 1;
}
</style>