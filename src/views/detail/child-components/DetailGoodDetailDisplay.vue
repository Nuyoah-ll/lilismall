<template>
  <div id="detail-good-detail-display">
    <div class="desc-container">
      <div class="desc-before"></div>
      <div class="desc">{{ $store.getters.goodDesc }}</div>
      <div class="desc-after"></div>
    </div>
    <div v-if="$store.getters.detailImage">
      <div v-for="item in $store.getters.detailImage" :key="item.key">
        <p class="key">{{ "【" + item.key + "】" }}</p>
        <img
          class="good-imgs"
          v-for="imgUrl in item.list"
          :src="imgUrl"
          :key="imgUrl"
          @load="imageLoaded"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodDetailDisplay",
  components: {},
  methods: {
    imageLoaded() {
      this.$bus.$emit("imgLoaded");
    },
  },
};
</script>

<style scoped>
#detail-good-detail-display {
  padding: 5vw;
}

.desc-container {
  margin: 3vh;
  position: relative;
}

.desc-before {
  width: 30vw;
  height: 5px;
  border-top: 1px solid black;
  border-left: 5px solid black;
}

.desc-after {
  width: 30vw;
  height: 5px;
  border-bottom: 1px solid black;
  border-right: 5px solid black;
  position: absolute;
  right: 0;
}

.desc {
  margin: 2vh 0;
}

.key {
  margin-bottom: 10px;
}

.good-imgs {
  width: 90vw;
}
</style>