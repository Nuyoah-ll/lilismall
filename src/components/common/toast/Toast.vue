<template>
  <div id="toast">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  components: {},
};
</script>

<style scoped>
#toast {
  position: fixed;
  left: 50%;
  top: 50%;
  color: white;
  background-color:rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  padding: 3vh;
  text-align: center;
}
</style>