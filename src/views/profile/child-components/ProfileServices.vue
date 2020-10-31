<template>
  <div id="profile-services">
    <div class="basic-services">
      <div>
        <img src="~assets/img/profile/消息.png" />
        <span>我的消息</span>
      </div>
      <div class="middle-div">
        <img src="~assets/img/profile/积分.png" />
        <span>积分商城</span>
      </div>
      <div>
        <img src="~assets/img/profile/皇冠.png" />
        <span>会员卡</span>
      </div>
    </div>
    <div class="app-services">
      <div class="middle-div">
        <img src="~assets/img/profile/购物车.png" />
        <span>我的购物车</span>
      </div>
      <div>
        <img src="~assets/img/profile/app.png" />
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileServices",
  components: {},
};
</script>

<style scoped>
#profile-services {
  font-size: 15px;
}

.basic-services {
  border-top: 3vw solid rgb(235, 235, 235);
  border-bottom: 3vw solid rgb(235, 235, 235);
}

.basic-services div,
.app-services div {
  border-bottom: 1px solid rgb(235, 235, 235);
}
#profile-services img {
  width: 7vw;
  height: 7vw;
  margin-right: 4vw;
  vertical-align: middle;
}

#profile-services div {
  padding: 2vw;
  line-height: 11vw;
}
</style>