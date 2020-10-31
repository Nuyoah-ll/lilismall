<template>
  <div id="main-category">
    <ul>
      <li
        v-for="(item, index) in category"
        :key="item.acm"
        :class="{ isActive: currentIndex === index }"
        @click="categoryChangeEvent(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import * as types from "@/store/constant";
import { mapActions } from "vuex";

export default {
  name: "MainCategory",
  props: {
    category: {
      type: Array,
      default: [],
      required: true,
    },
    currentIndex: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  components: {},
  methods: {
    ...mapActions([
      types.GET_SUB_CATEGORY_ACTION,
      types.GET_SUB_CATEGORY_DETAIL_ACTION,
    ]),
    categoryChangeEvent(index) {
      this.$emit("category-change-event", index);
      this[types.GET_SUB_CATEGORY_ACTION](this.category[index].maitKey);
      this[types.GET_SUB_CATEGORY_DETAIL_ACTION]({
        miniWallkey: this.category[index].miniWallkey,
        type: "pop",
      });
      this[types.GET_SUB_CATEGORY_DETAIL_ACTION]({
        miniWallkey: this.category[index].miniWallkey,
        type: "new",
      });
      this[types.GET_SUB_CATEGORY_DETAIL_ACTION]({
        miniWallkey: this.category[index].miniWallkey,
        type: "sell",
      });
    },
  },
};
</script>

<style scoped>
li {
  text-align: center;
  height: 7vh;
  line-height: 7vh;
  font-size: 15px;
}

.isActive {
  background-color: white;
  border-left: 3px solid var(--color-tint);
}
</style>