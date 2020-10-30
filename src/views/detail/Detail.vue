<template>
  <div id="detail">
    <detail-navbar
      ref="navbar"
      @scroll-to-corresponding-position="scrollToCorrespondingPosition"
    />
    <scroll
      height="83vh"
      class="scroll"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrolling="changeNavBarCurrentIndex"
    >
      <detail-swiper />
      <detail-good-sell-detail />
      <detail-good-choice
        @show-params-choice="showParamsChoice"
        :current-choice="currentChoice"
      />
      <detail-shop-info />
      <detail-good-detail-display />
      <detail-good-params ref="params" />
      <detail-comment-info ref="comment" />
      <detail-recommend-goods ref="recommend" />
    </scroll>
    <detail-bottom-shopping-bar />
    <params-choice
      :params-choice-is-show="paramsChoiceIsShow"
      @hid-choice="hidParamsChoice"
      @toast-is-show="showToastEvent"
    />
    <toast v-if="toastIsShow" :message="toastMessage" />
    <back-top @click.native="backTopClick" v-show="backTopIsShow" />
    <div :class="{ isShow: paramsChoiceIsShow, frontFilter: true }"></div>
  </div>
</template>

<script>
import DetailNavbar from "./child-components/DetailNavbar";
import DetailSwiper from "./child-components/DetailSwiper";
import DetailGoodSellDetail from "./child-components/DetailGoodSellDetail";
import DetailShopInfo from "./child-components/DetailShopInfo";
import DetailGoodDetailDisplay from "./child-components/DetailGoodDetailDisplay";
import DetailGoodParams from "./child-components/DetailGoodPramas";
import DetailCommentInfo from "./child-components/DetailCommentInfo";
import DetailRecommendGoods from "./child-components/DetailRecommendGoods";
import DetailBottomShoppingBar from "./child-components/DetailBottomShoppingBar";
import DetailGoodChoice from "./child-components/DetailGoodChoice";

import { backTopMixin } from "common/mixin";

import Scroll from "components/common/scroll/Scroll";
import ParamsChoice from "components/content/bottomFlexInfo/paramsChoice";
import Toast from "components/common/toast/Toast";

import * as types from "@/store/constant";

export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      paramsChoiceIsShow: false,
      currentChoice: null,
      toastIsShow: false,
      toastMessage: "",
    };
  },
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailGoodSellDetail,
    DetailShopInfo,
    Scroll,
    DetailGoodDetailDisplay,
    DetailGoodParams,
    DetailCommentInfo,
    DetailRecommendGoods,
    DetailBottomShoppingBar,
    DetailGoodChoice,
    ParamsChoice,
    Toast,
  },
  methods: {
    // 监听navbar的点击事件发射的scroll-to-corresponding-position事件，从而该跳转到对应的位置
    scrollToCorrespondingPosition(index) {
      const scrollTo = this.$refs.scroll.scroll.scrollTo;
      switch (index) {
        case 0:
          scrollTo(0, 0, 300);
          break;
        case 1:
          scrollTo(0, -this.$refs.params.$el.offsetTop, 300);
          break;
        case 2:
          scrollTo(0, -this.$refs.comment.$el.offsetTop, 300);
          break;
        default:
          scrollTo(0, -this.$refs.recommend.$el.offsetTop, 300);
      }
    },
    // 根据滚动时传过来的position，设置navbar的currentIndex从而控制上方navbar显示的逻辑
    changeNavBarCurrentIndex(position) {
      if (-position.y < this.$refs.params.$el.offsetTop) {
        this.$refs.navbar.currentIndex = 0;
      } else if (-position.y < this.$refs.comment.$el.offsetTop) {
        this.$refs.navbar.currentIndex = 1;
      } else if (-position.y < this.$refs.recommend.$el.offsetTop) {
        this.$refs.navbar.currentIndex = 2;
      } else {
        this.$refs.navbar.currentIndex = 3;
      }
      // 下面是监听滚动的时候，控制BackTop组件是否显示，这里设置的是一旦往下滑了1000px，就显示
      this.backTopIsShow = -position.y > 1000;
    },
    showParamsChoice() {
      this.paramsChoiceIsShow = true;
    },
    hidParamsChoice(currentChoice) {
      this.paramsChoiceIsShow = false;
      this.currentChoice = currentChoice;
    },
    showToastEvent(res) {
      this.toastIsShow = true;
      this.toastMessage = res;
      setTimeout(() => {
        this.toastIsShow = false;
      }, 2000);
    },
  },
  created() {
    // 将iid存入data中进行保存
    // console.log("Detail组件被创建了")
    // 创建的时候获取iid对应的数据
    this.iid = this.$route.query.iid;
    this.$store.dispatch(types.GET_DETAIL_MULTIDATA_ACTION, this.iid);
    this.$store.dispatch(types.GET_DETAIL_RECOMMEND_ACTION, this.iid);
  },
  destroyed() {
    // console.log("Detial组件被销毁了")
    // 清空当前detail模块中的state数据
    this.$store.commit("deleteOriData");
  },

  // 由于在不同组件中使用BackTop，都需要添加一样的data、methods、components等
  // 所以这里使用混入，简化了代码的编写
  mixins: [backTopMixin],
};
</script>

<style scoped>
.frontFilter {
  position: fixed;
  top: 7vh;
  left: 0;
  width: 100vw;
  height: 13vh;
  background-color: rgba(73, 72, 72, 0.13);
  display: none;
}

.isShow {
  display: block;
}
</style>