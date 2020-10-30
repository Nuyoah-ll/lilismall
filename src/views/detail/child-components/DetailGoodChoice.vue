<template>
  <div id="detail-good-choice">
    <div
      @click="showParamsChoice"
      v-if="
        !currentChoice ||
        currentChoice.color === '' ||
        currentChoice.size === ''
      "
    >
      请选择：
      <span v-if="!currentChoice || currentChoice.color === ''">颜色 </span>
      <span v-if="!currentChoice || currentChoice.size === ''">尺码</span>
    </div>
    <div @click="showParamsChoice" v-else class="current-choice">
      <div>当前选择：{{ currentChoice.color }} {{ currentChoice.size }}</div>
      <div>×{{ currentChoice.num }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodChoice",
  props: {
    currentChoice: {
      required: true,
    },
  },
  components: {},
  methods: {
    showParamsChoice() {
      this.$emit("show-params-choice");
    },
  },
};
</script>

<style scoped>
#detail-good-choice {
  font-size: 14px;
  border-top: 8px solid rgb(236, 236, 236);
  padding: 5vw;
}

.current-choice {
  display: flex;
  justify-content: space-between;
}
</style>