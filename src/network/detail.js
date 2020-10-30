import { request } from "./request"

export function getDetailMutidata(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}

export function getDetailRecommendData(iid){
  return request({
    url:"/recommend",
    params:{
      iid
    }
  })
}

// 用于
export class GoodSellDetail {
  constructor({ itemInfo, columns, services }) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.realPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services;
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}