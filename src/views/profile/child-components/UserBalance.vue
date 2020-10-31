<template>
  <div id="user-balance">
    <div v-for="item in blance" :key="item.title" class="item">
      <div>
        <span class="blance-num">{{ item.num }}</span>
        <span>{{ item.unit }}</span>
      </div>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserBlance",
  data() {
    return {
      blance: [
        {
          title: "我的余额",
          num: 0,
          unit: "元",
        },
        {
          title: "我的优惠",
          num: 0,
          unit: "个",
        },
        {
          title: "我的积分",
          num: 0,
          unit: "分",
        },
      ],
    };
  },
  components: {},
};
</script>

<style scoped>
#user-balance {
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  font-size: 15px;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  height: 20vw;
  border: 1px solid rgb(243, 243, 243);
}

.blance-num {
  font-size: 25px;
  color: red;
}
</style>