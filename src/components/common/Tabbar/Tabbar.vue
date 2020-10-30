<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  #tabbar {
    height:10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* 使用better-scroll之后就不需要下面这些样式了，记得在app里修改一下router-view的位置 */
    /* position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50; */
    background-color:rgb(238, 238, 238);
    box-shadow: 0 -2px 5px rgb(204, 204, 204);
  }
</style>