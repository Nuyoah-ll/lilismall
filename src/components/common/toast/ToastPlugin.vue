<template>
  <div id="toast-plugin" v-if="isShow">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "ToastPlugin",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  components: {},
  methods: {
    show(message = "显示的文字", duration = 2000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.message = "显示的文字";
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style scoped>
#toast-plugin {
  position: fixed;
  left: 50%;
  top: 50%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  padding: 3vh;
  text-align: center;
}
</style>