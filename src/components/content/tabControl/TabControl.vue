<template>
  <div id="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      :class="{ active: index === currentIndex }"
      @click="tabControlItemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      required: true,
      default(){
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  created(){

  },
  methods: {
    tabControlItemClick(index) {
      this.currentIndex = index;
      this.$emit("tab-change-event",index)
    },
  },
};
</script>

<style scoped>
#tab-control {
  height: 5vh;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  /* 使用better-scroll之后，下面这俩属性不生效了 */
  /* 不建议使用这属性，因为这是比较新的属性，如果要适配较低版本浏览器的时候很麻烦 */
  /* position: sticky; */
  /* top: 7vh; */
}

.active {
  color: var(--color-tint);
  border-bottom: 2px solid var(--color-tint);
}
</style>