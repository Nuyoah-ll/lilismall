<template>
  <div id="detail-comment-info" v-if="$store.state.b.commentList">
    <div class="comment-title">
      <span>用户评价</span>
      <a href="">更多</a>
    </div>
    {{ $store.getters.user.avator }}
    <comment
      :avatar="$store.getters.user.avatar"
      :uname="$store.getters.user.uname"
      :content="$store.getters.content"
      :extra-info="$store.getters.extraInfo"
      :images="$store.getters.images"
      :cstyle="$store.getters.style"
      :created="$store.getters.created"
    />
  </div>
</template>

<script>
import Comment from "components/common/comment/Comment";

export default {
  name: "DetailCommentInfo",
  components: {
    Comment,
  },
};
</script>

<style scoped>
#detail-comment-info {
  padding: 5vw;
  border-bottom: 1vh solid rgb(236, 236, 236);
}

.comment-title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 2vh;
  border-bottom: 1px solid rgb(236, 236, 236);
}
</style>