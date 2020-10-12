<template>
  <div id="tabbar-item" @click="btnclick">
    <div v-if="currentUrl === $route.path">
      <slot name="icon-active"><img src="../../../assets/img/tabbar/unknown-icon.png" alt="未知图片"></slot>
      <p :style="{color:textColor}"><slot name="text">未知文字</slot></p>
    </div>
    <div v-else>
      <slot name="icon"><img src="../../../assets/img/tabbar/unknown-icon.png" alt="未知图片"></slot>
      <p><slot name="text">未知文字</slot></p>
    </div>


  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props: {
      url: {
        type: String,
        default: "/",
        required: true
      },
      textColor: {
        type: String,
        default: "black",
        required: true
      }
    },
    data() {
      return {
        currentUrl: this.url
      }
    },
    methods: {
      btnclick() {
        this.$router.push(this.url)
      }
    }
  }
</script>

<style>
  #tabbar-item div {
    font-size: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  #tabbar-item img {
    width: 5vh;
    height: 5vh;
  }
</style>