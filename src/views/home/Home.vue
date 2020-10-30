<template>
  <div id="home">
    <home-navbar />
    <tab-control
      ref="tabControlCopy"
      v-show="tabControlIsShow"
      :titles="['流行', '新款', '精选']"
      @tab-change-event="tabChangeEvent"
      :class="{ tabControlIsShow }"
    />
    <scroll
      height="83vh"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrolling="scrollingEvent"
      @pull-uping="throttledLoadMoreGoods"
    >
      <home-swiper/>
      <home-recommend />
      <home-popular-this-week />
      <!-- 目前暂时使用$emit从子组件向父组件发送一个事件 -->
      <!-- 这样有一个问题,需要再从父组件向home-goods-list传递currentIndex -->
      <!-- 所以我们需要找一个发送全局事件的方法 -->
      <tab-control
        ref="tabControl"
        :titles="['流行', '新款', '精选']"
        @tab-change-event="tabChangeEvent"
      />
      <home-goods-list :currentIndex="currentIndex" />
    </scroll>
    <!-- 返回顶部按钮 -->
    <back-top @click.native="backTopClick" v-show="backTopIsShow" />
  </div>
</template>

<script>
// 导入Home里的子组件
import HomeNavbar from "./child-components/HomeNavbar";
import HomeSwiper from "./child-components/HomeSwiper";
import HomeRecommend from "./child-components/HomeRecommend";
import HomePopularThisWeek from "./child-components/HomePopularThisWeek";
import HomeGoodsList from "./child-components/HomeGoodsList";
// 导入公共组件
import TabControl from "components/content/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

// 导入actions常量，派发actions,请求Home里的数据
import * as types from "@/store/constant.js";

// 引入第三方处理防抖和节流问题的库
// import _ from "lodash";
// 引入自己写的节流函数
import { throttle } from "common/utils";
import {backTopMixin} from "common/mixin"

export default {
  name: "Home",
  components: {
    HomeNavbar,
    HomeSwiper,
    HomeRecommend,
    HomePopularThisWeek,
    TabControl,
    HomeGoodsList,
    Scroll,
    // BackTop,
  },
  data() {
    return {
      currentIndex: 0,
      // backTopIsShow: false,
      tabControlIsShow: false,
      heightBeforeLeave:0
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // console.log("Home组件被创建了")
  },
  // 离开的时候携带当前滚动的位置
  deactivated() {
    this.heightBeforeLeave = this.$refs.scroll.scroll.y
  },
  // 回来的时候再跳到该位置，时间设为0
  activated(){
    this.$refs.scroll.scroll.scrollTo(0,this.heightBeforeLeave,0)
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      this.$store.dispatch(types.GET_HOME_MULTIDATA_ACTION);
    },
    getHomeGoods(type) {
      // 如果这里不加1，那么请求的就是type=xxx&page=0，由于服务器里page=0并没有数据返回，
      // 所以会返回状态码500
      // 500:（服务器内部错误） 服务器遇到错误，无法完成请求。
      const page = this.$store.state.a.goods[type].page + 1;
      this.$store.dispatch(types.GET_HOME_GOODS_ACTION, {
        type,
        page,
      });
    },
    /**
     * 事件监听相关的方法
     */
    tabChangeEvent(index) {
      // 修改home组件的currentIndex，以决定goodsList显示哪一类
      this.currentIndex = index;
      // 注意：上面的tabControlCopy不能使用v-if。因为如果使用v-if。它隐藏的时候，页面根本就没有这个dom元素
      // 所以下面的打印会出现undefined
      // 所以应该使用v-show。使其一直在DOM里
      // display：none；之后，也会影响页面的布局，被影藏的元素不会在原位置进行站位
      // console.log(this.$refs.tabControlCopy)

      // 在tabControl点击的时候，修改tabControl副本的currentIndex
      this.$refs.tabControlCopy.currentIndex = index;
      // 在tabControl副本点击的时候，修改tabControl的currentIndex
      this.$refs.tabControl.currentIndex = index;
    },
    scrollingEvent(position) {
      // 这里根据滚动的高度控制backTop组件是否显示
      this.backTopIsShow = -position.y > 1000;

      // 下面根据滚动的高度控制tabControl副本是否显示
      // 因为我这个是在滚动的时候进行赋值的，所以offsetTop的获取其实是准确的
      // 组件上都有一个$el属性，可以获取内部的html元素
      // console.log(this.$refs.tabControl.$el)
      const tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
      if (-position.y > tabControlOffsetTop) {
        this.tabControlIsShow = true;
      } else {
        this.tabControlIsShow = false;
      }
    },
    // 下面是未使用节流的上拉加载的方法
    loadMoreGoods() {
      switch (this.currentIndex) {
        case 0:
          this.getHomeGoods("pop");
          break;
        case 1:
          this.getHomeGoods("new");
          break;
        case 2:
          this.getHomeGoods("sell");
          break;
        default:
          return;
      }
      // this.$refs.scroll.scroll.finishPullUp()
    },
    throttledLoadMoreGoods: throttle(function () {
      switch (this.currentIndex) {
        case 0:
          this.getHomeGoods("pop");
          break;
        case 1:
          this.getHomeGoods("new");
          break;
        case 2:
          this.getHomeGoods("sell");
          break;
        default:
          return;
      }
      // this.$refs.scroll.scroll.finishPullUp()
    }, 1000),
  },
  mixins:[backTopMixin]
};
</script>

<style scoped>
.tabControlIsShow {
  position: absolute;
  width: 100vw;
  z-index: 50;
}
</style>