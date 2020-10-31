<template>
  <div id="profile">
    <profile-navbar />
    <scroll height="83vh" :pull-up-load="true">
      <user-info />
      <user-blance/>
      <profile-services/>
    </scroll>
  </div>
</template>

<script>
  import ProfileNavbar from "./child-components/ProfileNavbar";
  import UserInfo from "./child-components/UserInfo";
  import UserBlance from "./child-components/UserBalance";
  import ProfileServices from "./child-components/ProfileServices"
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "Profile",
    components: {
      ProfileNavbar,
      UserInfo,
      UserBlance,
      ProfileServices,
      Scroll
    }
  }
</script>

<style scoped>
</style>