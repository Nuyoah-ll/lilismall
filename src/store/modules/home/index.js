import * as types from "@/store/constant.js";
// 导入获取首页数据的请求模块
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  state: {
    bannerList: [],
    recommend: [],
    goods: {
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] }
    }
  },
  mutations: {
    // 获取首页轮播图数据的mutations
    [types.GET_HOME_BANNER](state, payload) {
      state.bannerList = payload.data.banner.list
    },
    // 获取首页推荐数据的mutations
    [types.GET_HOME_RECOMMEND](state, payload) {
      state.recommend = payload.data.recommend.list
    },
    // 获取首页“流行”商品的mutations
    [types.GET_POP_GOODS](state, payload) {
      state.goods.pop.page = payload.page;
      state.goods.pop.list = [...state.goods.pop.list,...payload.list]
    },
    // 获取首页“新款”商品的mutations
    [types.GET_NEW_GOODS](state, payload) {
      state.goods.new.page = payload.page;
      state.goods.new.list = [...state.goods.new.list,...payload.list]
    },
    // 获取首页“精选”商品的mutations
    [types.GET_SELL_GOODS](state, payload) {
      state.goods.sell.page = payload.page;
      state.goods.sell.list = [...state.goods.sell.list,...payload.list]
    }
  },
  actions: {
    // 获取首页轮播图和推荐数据的acitons
    [types.GET_HOME_MULTIDATA_ACTION](context) {
      // 在actions里进行异步请求
      getHomeMultidata().then(res => {
        //请求banner的数据
        context.commit(types.GET_HOME_BANNER, res)
        //请求recommend的数据
        context.commit(types.GET_HOME_RECOMMEND, res)
      })
    },
    // 获取首页商品信息的actions
    [types.GET_HOME_GOODS_ACTION](context, payload) {
      getHomeGoods(payload.type, payload.page).then(res => {
        switch (payload.type) {
          case "pop":
            //请求“流行”相关的商品
            context.commit(types.GET_POP_GOODS, { list: res.data.list, page: payload.page })
            break
          case "new":
            //请求“新款”相关的商品
            context.commit(types.GET_NEW_GOODS, { list: res.data.list, page: payload.page })
            break
          case "sell":
            //请求“精选”相关的商品
            context.commit(types.GET_SELL_GOODS, { list: res.data.list, page: payload.page })
          default:
            return
        }
      })
    }
  },
  getters: {}
}