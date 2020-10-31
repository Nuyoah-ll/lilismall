<template>
  <div
    id="category-goods-list"
    v-if="this.subCategoryDetail[0].list.length > 0"
  >
    <goods-list
      v-if="currentIndex === 0"
      :goods="this.subCategoryDetail[0].list"
      width="75vw"
    />
    <goods-list
      v-if="currentIndex === 1"
      :goods="this.subCategoryDetail[1].list"
      width="75vw"
    />
    <goods-list
      v-if="currentIndex === 2"
      :goods="this.subCategoryDetail[2].list"
      width="75vw"
    />
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList";
import { mapGetters } from "vuex";

export default {
  name: "CategoryGoodsList",
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  components: {
    GoodsList,
  },
  computed: {
    ...mapGetters(["subCategoryDetail"]),
  }
};
</script>

<style scoped>
</style>