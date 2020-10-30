<template>
  <div id="home-recommend">
    <home-recommend-item
      v-for="item in $store.state.a.recommend"
      :key="item.acm"
    >
      <template v-slot:img>
        <a :href="item.link">
          <img :src="item.image" alt="item.title" />
        </a>
      </template>
      <template v-slot:text>
        <p>{{ item.title }}</p>
      </template>
    </home-recommend-item>
  </div>
</template>

<script>
import HomeRecommendItem from "components/content/homeRecommendItem/HomeRecommendItem"

export default {
  name: "HomeRecommend",
  components: {
    HomeRecommendItem,
  },
};
</script>

<style scoped>
#home-recommend {
  width: 100vw;
  border-bottom: 2vh rgb(228, 228, 228) solid;
  margin: 3vh 0;
  display: flex;
  justify-content: space-evenly;
}

img{
  width:100%;
}

</style>