import * as types from "@/store/constant";
import { getDetailMutidata, GoodSellDetail, ShopInfo, getDetailRecommendData } from "network/detail";

export default {
  state: {
    detailImages: [],
    goodSellDetail: null,
    shopInfo: null,
    goodInfo: null,
    goodParams: {
      info: null,
      rule: null
    },
    commentList: null,
    detailRecommendList: []
  },
  mutations: {
    [types.GET_DETAIL_IMAGES](state, topImages) {
      state.detailImages = topImages;
    },
    [types.GET_DETAIL_GOOD_SELL_DETAIL](state, goodSellDetail) {
      state.goodSellDetail = new GoodSellDetail(goodSellDetail);
    },
    [types.GET_DETAIL_SHOP_INFO](state, shopInfo) {
      state.shopInfo = new ShopInfo(shopInfo);
    },
    [types.GET_DETAIL_GOOD_INFO](state, goodInfo) {
      state.goodInfo = goodInfo;
    },
    [types.GET_DETAIL_GOOD_PARAMS](state, goodParams) {
      state.goodParams = goodParams
    },
    [types.GET_DETAIL_COMMENT_INFO](state, rate) {
      if (rate.cRate > 0) {
        state.commentList = rate.list
      }
    },
    [types.GET_DETAIL_RECOMMEND](state, list) {
      state.detailRecommendList = list;
    },
    deleteOriData(state) {
      state.detailImages = []
    }
  },
  actions: {
    [types.GET_DETAIL_MULTIDATA_ACTION](context, iid) {
      getDetailMutidata(iid).then(res => {
        const data = res.result;
        context.commit(types.GET_DETAIL_IMAGES, data.itemInfo.topImages)
        context.commit(types.GET_DETAIL_GOOD_SELL_DETAIL, {
          itemInfo: data.itemInfo,
          columns: data.columns,
          services: data.shopInfo.services
        });
        context.commit(types.GET_DETAIL_SHOP_INFO, data.shopInfo)
        context.commit(types.GET_DETAIL_GOOD_INFO, data.detailInfo)
        context.commit(types.GET_DETAIL_GOOD_PARAMS, data.itemParams)
        context.commit(types.GET_DETAIL_COMMENT_INFO, data.rate)
      })
    },
    [types.GET_DETAIL_RECOMMEND_ACTION](context, iid) {
      getDetailRecommendData(iid).then(res => {
        context.commit(types.GET_DETAIL_RECOMMEND, res.data.list)
      })
    }
  },
  getters: {
    //获取goodSellDetail里的一些数据
    title(state) {
      return state.goodSellDetail && state.goodSellDetail.title;
    },
    oldPrice(state) {
      return state.goodSellDetail && state.goodSellDetail.oldPrice;
    },
    newPrice(state) {
      return state.goodSellDetail && state.goodSellDetail.newPrice;
    },
    realPrice(state) {
      return state.goodSellDetail && state.goodSellDetail.realPrice;
    },
    discountDesc(state) {
      return state.goodSellDetail && state.goodSellDetail.discountDesc;
    },
    saleAmounts(state) {
      return state.goodSellDetail && state.goodSellDetail.columns && state.goodSellDetail.columns[0];
    },
    collect(state) {
      return state.goodSellDetail && state.goodSellDetail.columns && state.goodSellDetail.columns[1];
    },
    deliverMethod(state) {
      return state.goodSellDetail && state.goodSellDetail.columns && state.goodSellDetail.columns[2];
    },
    services(state) {
      const services = [];
      // 在网络请求成功之前，返回一个默认的服务
      if (!state.goodSellDetail) {
        return [
          { icon: "", name: "服务1" },
          { icon: "", name: "服务2" },
          { icon: "", name: "服务3" }
        ];
      } else {
        services.push(...state.goodSellDetail.services);
        return services;
      }
    },

    //获取shopInfo里的一些数据
    shopLogo(state) {
      return state.shopInfo && state.shopInfo.logo
    },
    shopName(state) {
      return state.shopInfo && state.shopInfo.name
    },
    totalSales(state) {
      return state.shopInfo && state.shopInfo.sells
    },
    goodsCount(state) {
      return state.shopInfo && state.shopInfo.goodsCount
    },
    shopScore(state) {
      const score = [];
      if (!state.shopInfo) {
        return null;
      } else {
        score.push(...state.shopInfo.score)
        return score;
      }
    },

    //获取goodInfo里的一些数据
    goodDesc(state) {
      return state.goodInfo && state.goodInfo.desc;
    },
    detailImage(state) {
      return state.goodInfo && state.goodInfo.detailImage;
    },

    // 获取goodParams里的一些数据
    rule(state) {
      return state.goodParams.rule
    },
    info(state) {
      return state.goodParams.info
    },

    // 获取commentList里的一些数据
    user(state) {
      return state.commentList && state.commentList[0].user
    },
    content(state) {
      return state.commentList && state.commentList[0].content
    },
    extraInfo(state) {
      return state.commentList && state.commentList[0].extraInfo
    },
    images(state) {
      return state.commentList && state.commentList[0].images
    },
    style(state) {
      return state.commentList && state.commentList[0].style
    },
    created(state) {
      return state.commentList && state.commentList[0].created
    },
    // 参数选择里的颜色和尺寸
    color(state, getters) {
      if (getters.info === null) {
        return null;
      } else {
        const arr = getters.info.set.filter(item => {
          return item.key === "颜色"
        })[0]
        if(arr === undefined) return null;
        const color = arr.value.split(",");
        return color
      }
    },
    size(state, getters) {
      if (getters.info === null) {
        return null;
      } else {
        const arr = getters.info.set.filter(item => {
          return item.key === "尺码"
        })[0];
        if(arr ===  undefined) return null;
        const size = arr.value.split(",");
        return size;
      }
    }
  }

  // 其他
}