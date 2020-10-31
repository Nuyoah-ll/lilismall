<template>
  <div id="user-info">
    <div class="basic-info">
      <a href="">
        <img src="~assets/img/profile/头像.png" class="user-avatar"/>
      </a>
      <div class="login">
        <p>登录/注册</p>
        <div class="phone">
          <img src="~assets/img/profile/手机-白色.png" class="phone-icon">
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </div>
    <img src="~assets/img/profile/大于号-白色.png" class="more">
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  components: {},
};
</script>

<style scoped>
#user-info{
  display: flex;
  justify-content: space-between;
  padding: 5vw;
  background-color: var(--color-tint);
}

.basic-info{
  display: flex;
  justify-content: space-evenly;
}

.user-avatar{
  width: 17vw;
  height: 17vw;
  margin-right: 3vw;
}

.login{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
}

.phone{
  display: flex;
  align-items: center;
}

.phone-icon{
  width: 5vw;
  height: 5vw;
}

.more{
  width: 4vw;
  height: 4vw;
  margin-top:7vw;
}
</style>