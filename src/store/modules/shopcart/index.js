import * as types from "@/store/constant";

export default {
  state: {
    goodsInShopcart: []
  },
  mutations: {
    [types.ADD_SAME_COMPOSE_NUM_TO_CART](state, data) {
      state.goodsInShopcart[data.sameGoodIndex].paramsCompose[data.sameComposeIndex].num += data.num;
    },
    [types.ADD_GOOGS_COMPOSE_TO_CART](state, data) {
      state.goodsInShopcart[data.sameGoodIndex].paramsCompose.push(data.realParamsCompose);
    },
    [types.ADD_NEW_GOODS_TO_CART](state, good) {
      state.goodsInShopcart.push(good)
    },
    [types.SET_SOME_COMPOSE_IS_REALLY_SELECTED](state, data) {
      state.goodsInShopcart[data.goodIndex].paramsCompose[data.index].isReallySelected = !state.goodsInShopcart[data.goodIndex].paramsCompose[data.index].isReallySelected;
    },
    [types.SET_ALL_COMPOSE_IS_REALLY_SELECTED](state, data) {
      for (let item of state.goodsInShopcart[data.goodIndex].paramsCompose) {
        item.isReallySelected = !data.isSelected
      }
    },
    [types.SET_ALL_GOODS_IS_REALLY_SELECTED](state, isAllSelected) {
      for (let item of state.goodsInShopcart) {
        for (let iten of item.paramsCompose) {
          iten.isReallySelected = !isAllSelected;
        }
      }
    }
  },
  // mutations里的行为尽量简单，不单单是异步操作，如果有复杂的逻辑判断，也应该放在actions里进行
  actions: {
    [types.ADD_GOODS_TO_SHOPCART](context, good) {
      // 放在promise里是为了判断添加商品是否成功，如果成功了，则返回一条消息，用于Toast组件进行展示
      return new Promise((resolve, reject) => {
        // sameGoodIndex:当前添加的商品是否已经存在于goodsInShopcart，如果存在，则用这个变量保存它在goodsInShopcart里的索引
        // sameComposeIndex:当前添加的商品参数组合是否已经存在于goodsInShopcart，如果存在，则用这个变量保存它在goodsInShopcart里paramsCompose里的索引
        let sameGoodIndex, sameComposeIndex;
        const sameGood = context.state.goodsInShopcart.filter((item, index) => {
          let matchCondition = (item.iid === good.iid)
          if (matchCondition) sameGoodIndex = index;
          return matchCondition;
        })
        // 如果有相同的商品，则判断继续判断添加的是否是相同的颜色尺寸组合
        if (sameGood.length > 0) {
          // 判断是否有相同的颜色尺寸组合
          const sameCompose = sameGood[0].paramsCompose.filter((item, index) => {
            let matchCondition = (item.size === good.paramsCompose[0].size && item.color === good.paramsCompose[0].color)
            if (matchCondition) sameComposeIndex = index;
            return matchCondition
          })
          // 如有有相同的颜色尺寸组合，则仅仅只是添加数量
          if (sameCompose.length > 0) {
            resolve("商品添加成功~");
            context.commit(types.ADD_SAME_COMPOSE_NUM_TO_CART, {
              num: good.paramsCompose[0].num,
              sameGoodIndex,
              sameComposeIndex
            })
            // 如果没有相同的颜色尺寸组合，则添加一个组合
          } else {
            resolve("商品添加成功~");
            context.commit(types.ADD_GOOGS_COMPOSE_TO_CART, {
              realParamsCompose: good.paramsCompose[0],
              sameGoodIndex
            })
          }
          // 如果没有相同的商品，则直接将这个新的商品添加到购物车中
        } else {
          resolve("商品添加成功~");
          context.commit(types.ADD_NEW_GOODS_TO_CART, good)
        }
      })
    }
  },
  getters: {
    isSelected(state) {
      return goodIndex => {
        for (let item of state.goodsInShopcart[goodIndex].paramsCompose) {
          if (!item.isReallySelected) {
            return false
          }
        }
        return true
      }
    },
    isAllSelected(state) {
      let selected = true;
      for (let item of state.goodsInShopcart) {
        for (let iten of item.paramsCompose) {
          if (!iten.isReallySelected) {
            selected = false;
          }
        }
      }
      return selected;
    },
    totalPrice(state) {
      let price = 0;
      for (let item of state.goodsInShopcart) {
        for (let iten of item.paramsCompose) {
          if (iten.isReallySelected) {
            price += parseFloat(item.realPrice) * iten.num
          }
        }
      }
      return "￥" + price.toFixed(2);
    },
    isNoGoodSelected(state){
      let noGoodSelected = true;
      for (let item of state.goodsInShopcart) {
        for (let iten of item.paramsCompose) {
          if (iten.isReallySelected) {
            noGoodSelected = false
          }
        }
      }
      return noGoodSelected;
    }
  }
} 