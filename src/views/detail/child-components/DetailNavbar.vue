<template>
  <div id="detail-navbar">
    <navbar>
      <template v-slot:left>
        <img
          class="left-img"
          src="~assets/img/common/back.svg"
          alt="后退"
          @click="back"
        />
      </template>
      <template v-slot:center>
        <div class="center-nav">
          <div
            v-for="(title, index) in titles"
            :key="title"
            @click="titleClick(index)"
            :class="{ active: currentIndex === index }"
          >
            {{ title }}
          </div>
        </div>
      </template>
    </navbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";

export default {
  name: "DetailNavbar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      // 一点点击了navbar的内容，则发射一个事件给Detail组件。让它跳转到对应的位置
      this.$emit("scroll-to-corresponding-position", index);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.left-img {
  width: 4vh;
  height: 4vh;
  margin-left: 3vh;
}

.center-nav {
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
}

.active {
  color: var(--color-tint);
}
</style>