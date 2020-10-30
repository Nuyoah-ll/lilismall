<template>
  <div id="params-choice" :class="{ isShow: paramsChoiceIsShow }">
    <div class="good-info">
      <img class="good-image" :src="$store.state.b.detailImages[0]" alt="" />
      <div class="detail">
        <p class="price">{{ "￥" + $store.getters.realPrice }}</p>
        <p class="stock">库存100件</p>
        <span v-if="currentChoice.color === '' || currentChoice.size === ''">
          请选择：
          <span v-if="!currentChoice.color">颜色 </span>
          <span v-if="!currentChoice.size">尺码</span>
        </span>
        <span v-else>
          当前选择：
          <span>{{ currentChoice.color }} </span>
          <span>{{ currentChoice.size }}</span>
        </span>
      </div>
      <img
        src="~assets/img/common/叉号.png"
        class="back"
        @click="hidChoice(currentChoice)"
      />
    </div>

    <scroll height="55vh" :probe-type="3" :pull-up-load="true">
      <div class="good-color" v-if="$store.getters.color">
        <p class="color-title">颜色：</p>
        <div class="all-color">
          <span
            v-for="item in $store.getters.color"
            :key="item"
            @click="chooseColor(item)"
            :style="{
              color:
                currentChoice.color === item ? 'var(--color-tint)' : 'gray',
            }"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <div class="good-size" v-if="$store.getters.size">
        <p class="size-title">尺码：</p>
        <div class="all-size">
          <span
            v-for="item in $store.getters.size"
            :key="item"
            @click="chooseSize(item)"
            :style="{
              color: currentChoice.size === item ? 'var(--color-tint)' : 'gray',
            }"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <div class="good-num">
        <p class="num-title">数量：</p>
        <table>
          <tr>
            <td
              @click="sub"
              :class="{ isAbled: currentChoice.num === 1 }"
              class="btn"
            >
              -
            </td>
            <td>{{ currentChoice.num }}</td>
            <td @click="add" class="btn">+</td>
          </tr>
        </table>
      </div>
    </scroll>
    <div class="buy-operations">
      <div class="addToCart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
    
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import * as types from "@/store/constant"
import { mapActions } from 'vuex';

export default {
  name: "ParamsChoice",
  data() {
    return {
      currentChoice: {
        color: "",
        size: "",
        num: 1,
        isReallySelected:false
      }
    };
  },
  props: {
    paramsChoiceIsShow: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Scroll
  },
  methods: {
    hidChoice(currentChoice) {
      this.$emit("hid-choice", currentChoice);
    },
    chooseColor(item) {
      if (this.currentChoice.color === item) {
        this.currentChoice.color = "";
      } else {
        this.currentChoice.color = item;
      }
    },
    chooseSize(item) {
      if (this.currentChoice.size === item) {
        this.currentChoice.size = "";
      } else {
        this.currentChoice.size = item;
      }
    },
    sub() {
      if (this.currentChoice.num !== 1) {
        this.currentChoice.num--;
      }
    },
    add() {
      this.currentChoice.num++;
    },
    addToCart() {
      const goodWillBeAddToCart = {};
      // 这里保存的是不同颜色尺寸数量的组合
      goodWillBeAddToCart.paramsCompose = [];
      // 需要传递给购物车里的数据有：
      // realPrice image title desc color size num iid shopInfo
      goodWillBeAddToCart.realPrice = this.$store.getters.realPrice;
      goodWillBeAddToCart.image = this.$store.state.b.detailImages[0];
      goodWillBeAddToCart.title = this.$store.getters.title;
      goodWillBeAddToCart.desc = this.$store.getters.goodDesc;
      goodWillBeAddToCart.paramsCompose = [{ ...this.currentChoice }];
      goodWillBeAddToCart.iid = this.$route.query.iid;
      goodWillBeAddToCart.shopInfo = this.$store.state.b.shopInfo

      // this.$store.dispatch(types.ADD_GOODS_TO_SHOPCART, goodWillBeAddToCart);
      this.[types.ADD_GOODS_TO_SHOPCART](goodWillBeAddToCart).then(res=>{
        // 由于toast组件是detail组件的子组件，所以我们需要将这个要显示的文字发给detail
        // 再由detail传入toast组件
        this.$emit("toast-is-show",res)
      })

      // 点击加入购物车之后隐藏商品选择栏
      this.hidChoice(this.currentChoice);
    },
    ...mapActions([types.ADD_GOODS_TO_SHOPCART])
  },
};
</script>

<style scoped>
#params-choice {
  padding: 3vh;
  background-color: white;
  height: 80vh;
  transition: transform 200ms;
  position: relative;
  font-size: 12px;
}

.isShow {
  transform: translateY(-100%);
}

.good-info {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4vh;
}

.good-info .good-image {
  width: 10vh;
  height: 10vh;
}

.good-info .back {
  width: 3vh;
  height: 3vh;
  position: absolute;
  top: 3vh;
  right: 3vh;
}

.detail {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.detail .price {
  font-size: 25px;
}

.good-color,
.good-size {
  margin: 3vh 0;
}

.all-color,
.all-size {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.all-color span,
.all-size span {
  border: 1px solid gray;
  margin: 5px;
  padding: 5px;
}

.num-title {
  margin-bottom: 5px;
}

.good-num table {
  border-collapse: collapse;
}

.good-num td {
  border: 1px solid gray;
  padding: 5px 10px;
  background-color: white;
}

.good-num .btn {
  color: var(--color-tint);
}

.isAbled {
  color: gray !important;
}

table {
  margin-left: 5px;
}

.buy-operations {
  height: 5vh;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  left: 0;
  bottom: 0;
}

.buy-operations * {
  flex: 1;
  line-height: 5vh;
}

.addToCart {
  background-color: yellow;
}

.buy {
  background-color: var(--color-tint);
}
</style>