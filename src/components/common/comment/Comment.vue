<template>
  <div id="comment">
    <div class="buyer-info">
      <a href="" class="avatar">
        <img :src="avatar" alt="" />
      </a>
      <p class="nickname">{{ uname }}</p>
    </div>

    <div class="content">
      <p class="text-comment">{{ content }}</p>
      <div class="extra-info">
        <p v-for="item in extraInfo" :key="item">{{ item }}</p>
      </div>
      <div class="img-comment">
        <img v-for="item in images" :src="item" :key="item" />
      </div>
    </div>

    <div class="good-info">
      <span class="buy-time">{{ created | formatCreatedTime }}</span>
      <span>{{ cstyle }}</span>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";

export default {
  name: "Comment",
  components: {},
  props: {
    avatar: {
      type: String,
      required: true,
    },
    uname: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    extraInfo: {
      type: Array,
      default() {
        return [];
      },
    },
    images: {
      type: Array,
      default() {
        return [];
      },
    },
    cstyle: {
      type: String,
      required: true,
    },
    created: {
      type: Number,
      required: true,
    },
  },
  filters: {
    formatCreatedTime(created) {
      let time = new Date(created * 1000);
      return formatDate(time, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>

<style scoped>
#comment {
  padding: 2vh 0;
}

.buyer-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.avatar img {
  width: 7vh;
  height: 7vh;
  border-radius: 50%;
  margin-right: 3vw;
}

.img-comment img {
  width: 10vh;
  height: 10vh;
}

.content {
  font-size: 14px;
}

.extra-info {
  padding: 1vh 0;
  color: rgb(200, 187, 194);
}

.good-info {
  font-size: 12px;
  color: gray;
  margin-top: 2vh;
}

.buy-time{
  display: inline-block;
  padding-right: 15px;
}
</style>