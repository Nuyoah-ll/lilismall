<template>
  <div id="profile-navbar">
    <navbar>
      <template v-slot:center>
        <p>李理的商城</p>
      </template>
    </navbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar"

export default {
  name: "ProfileNavbar",
  components: {
    Navbar
  },
};
</script>

<style scoped>
#profile-navbar{
  background-color: var(--color-tint);
  color:white;
}
</style>