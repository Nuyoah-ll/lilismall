<template>
  <div id="category">
    <category-navbar />
    <div class="category">
      <scroll height="83vh" :pull-up-load="true">
        <main-category
          :category="this.category"
          :currentIndex="currentCategoryIndex"
          @category-change-event="categoryChangeEvent"
        />
      </scroll>
      <scroll height="83vh" :pull-up-load="true" ref="scroll">
        <SubCategory :sub-category="subCategory"/>
        <tab-control :titles="['综合','新品','销量']" @tab-change-event="tabChangeEvent"/>
        <category-goods-list :current-index="currentGoodsListIndex"/>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl"

import CategoryNavbar from "./child-components/categoryNavbar";
import MainCategory from "./child-components/mainCategory";
import SubCategory from "./child-components/subCategory";
import CategoryGoodsList from "./child-components/categoryGoodsList"

import * as types from "@/store/constant";
import { mapActions, mapGetters } from "vuex";
import {debounce} from "common/utils"

export default {
  name: "Category",
  data() {
    return {
      currentCategoryIndex: 0,
      currentGoodsListIndex:0
    };
  },
  components: {
    Scroll,
    CategoryNavbar,
    MainCategory,
    SubCategory,
    TabControl,
    CategoryGoodsList
  },
  created() {
    this[types.GET_CATEGORY_ACTION]().then((res) => {
      this[types.GET_SUB_CATEGORY_ACTION](res.maitKey);
      this[types.GET_SUB_CATEGORY_DETAIL_ACTION]({
        miniWallkey: res.miniWallkey,
        type: "pop",
      });
      this[types.GET_SUB_CATEGORY_DETAIL_ACTION]({
        miniWallkey: res.miniWallkey,
        type: "new",
      });
      this[types.GET_SUB_CATEGORY_DETAIL_ACTION]({
        miniWallkey: res.miniWallkey,
        type: "sell",
      });
    });
  },
  methods: {
    categoryChangeEvent(index) {
      this.currentCategoryIndex = index;
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
    tabChangeEvent(index){
      this.currentGoodsListIndex = index;
    },
    ...mapActions([
      types.GET_CATEGORY_ACTION,
      types.GET_SUB_CATEGORY_ACTION,
      types.GET_SUB_CATEGORY_DETAIL_ACTION,
    ]),
  },
  computed: {
    ...mapGetters(["category", "subCategory"]),
  },
};
</script>

<style scoped>
#category {
  height: 90vh;
}

.category {
  display: flex;
  justify-content: space-between;
}

.category .scroll:first-child {
  width: 25vw;
  background-color: rgb(240, 240, 240);
}

.category .scroll:last-child {
  flex: 1;
}
</style>