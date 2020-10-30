import BackTop from "../components/content/backTop/BackTop.vue";

// 下面的实例属性将与使用混入的那个组件的实例里对应的属性进行合并
// 例如：如果在Detail组件中使用了下面这个混入，那么detail组件的data和这里的data将会合并
// components与components、methods与methods将会合并
export const backTopMixin = {
  data() {
    return {
      backTopIsShow: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    }
  }
}