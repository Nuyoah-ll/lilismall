<template>
  <div class="scroll" ref="scroll" :style="{ height, overflow: 'hidden' }">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { debounce, throttle } from "common/utils";

export default {
  name: "Scroll",
  props: {
    height: {
      type: String,
      required: true,
    },
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  created() {
    this.$bus.$on("imgLoaded", debounce(this.refreshScrollerHeight, 100));
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.scroll, {
      probeType: this.probeType,
      // 由于在better-scroll控制的元素里，点击事件会失效，所以这里需要将click设置为true
      click: true,
      pullUpLoad: this.pullUpLoad,
      mouseWheel:true
    });
    // 监听滚动事件，Scroll组件会发射一个scrolling方法，并携带一个position参数出去
    this.scroll.on("scroll", (position) => {
      this.$emit("scrolling", position);
    });
    // 监听上拉加载更多，Scroll组件会发射一个pull-uping方法
    this.scroll.on("pullingUp", () => {
      this.$emit("pull-uping");
      this.scroll.finishPullUp();
    });
  },
  deactivated(){
    // console.log("scroll 组件离开了")
  },
  activated(){
    // console.log("scroll组件进入了")
    this.scroll.refresh();
  },
  methods: {
    // 回到顶部的方法
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    // 刷新可滚动高度的方法
    refreshScrollerHeight() {
      this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>