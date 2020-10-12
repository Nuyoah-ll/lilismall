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

<style>
  #tabbar {
    height:10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgb(238, 238, 238);
    box-shadow: 0 -2px 5px rgb(204, 204, 204);
  }
</style>