<template>
  <div id="sub-category" v-if="subCategory.length > 0">
    <div v-for="item in subCategory" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoaded" />
      </a>
      <a :href="item.link"
        ><span>{{ item.title }}</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SubCategory",
  props: {
    subCategory: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
  },
  components: {},
  methods: {
    imageLoaded() {
      this.$bus.$emit("imgLoaded");
    },
  },
};
</script>

<style scoped>
#sub-category {
  display: flex;
  justify-content: space-start;
  flex-wrap: wrap;
  font-size: 12px;
}

#sub-category div {
  padding: 2vw;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

div img {
  width: 21vw;
  height: 21vw;
  border-radius: 50%;
}
</style>