<template>
  <div id="detail-good-params">
    <div class="rule" v-if="$store.getters.rule">
      <p class="rule-title">{{ "【" + $store.getters.rule.key + "】" }}</p>
      <table class="size-table">
        <tr
          v-for="item in handleArr($store.getters.rule.tables)"
          :key="item[0]"
        >
          <td v-for="(iten, index) in item" :key="index">{{ iten }}</td>
        </tr>
      </table>
      <p class="disclaimer">{{ $store.getters.rule.disclaimer }}</p>
    </div>
    <div class="info" v-if="$store.getters.info">
      <p class="info-title">{{ "【" + $store.getters.info.key + "】" }}</p>
      <div
        v-for="item in $store.getters.info.set"
        :key="item.key"
        class="info-item"
      >
        <p class="info-key">{{ item.key }}</p>
        <p class="info-value">{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { handleArr } from "common/utils";

export default {
  name: "DetailGoodParams",
  components: {},
  methods: {
    handleArr,
  },
};
</script>

<style scoped>
#detail-good-params {
  border-top: 8px solid rgb(236, 236, 236);
  border-bottom: 8px solid rgb(236, 236, 236);
  padding: 5vw;
}

.size-table {
  font-size: 12px;
  width: 90vw;
  text-align: center;
  border-collapse: collapse;
  margin-top: 2vh;
}

.size-table tr {
  border-bottom: 1px solid rgb(236, 236, 236);
  height: 5vh;
}

.disclaimer {
  font-size: 12px;
  padding: 2vh 0;
  border-bottom: 1px solid rgb(236, 236, 236);
}

.info {
  margin: 2vh 0;
}

.info-title{
  margin-bottom: 2vh;
}

.info-item {
  display: flex;
  justify-content: flex-start;
  padding: 2vh 0;
  border-bottom: 1px solid rgb(236, 236, 236);
}

.info-key {
  width: 30vw;
}

.info-value {
  width: 60vw;
  color: var(--color-tint);
}
</style>