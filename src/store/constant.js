// 获取首页轮播图和推荐的actions
export const GET_HOME_MULTIDATA_ACTION = "home/GET_HOME_HOME_MULTIDATA_ACTION"
// 获取首页轮播图和推荐数据中后，commit如下mutataions，将数据分别存放在对应的变量中
export const GET_HOME_BANNER = "home/GET_HOME_BANNER"
export const GET_HOME_RECOMMEND = "home/GET_HOME_RECOMMEND";

// 获取首页商品列表的actions
export const GET_HOME_GOODS_ACTION = "home/GET_HOME_HOME_GOODS_ACTION"
// 获取首页商品列表之后，commit如下mutations分别存入对应商品类型的变量中
export const GET_POP_GOODS = "home/GET_POP_GOODS"
export const GET_NEW_GOODS = "home/GET_NEW_GOODS"
export const GET_SELL_GOODS = "home/GET_SELL_GOODS"


// 获取详情页数据的actions
export const GET_DETAIL_MULTIDATA_ACTION = "detail/GET_DETAIL_MULTIDATA_ACTION"
// commit如下mutations将详情页数据中的详细图片存入对应的变量中
export const GET_DETAIL_IMAGES = "detail/GET_DETAIL_IMAGES"
// 结合network中detail.js中的类，将服务器数据进行分离然后整合在在一个对象中
export const GET_DETAIL_GOOD_SELL_DETAIL = "detail/GET_DETAIL_GOOD_SELL_DETAIL"
export const GET_DETAIL_SHOP_INFO = "detail/GET_DETAIL_SHOP_INFO"
export const GET_DETAIL_GOOD_INFO = "detail/GET_DETAIL_GOOD_INFO"
export const GET_DETAIL_GOOD_PARAMS = "detail/GET_DETAIL_GOOD_PARAMS"
export const GET_DETAIL_COMMENT_INFO = "detail/GET_DETAIL_COMMENT_INFO"
// 所以我们不需要这样划分多个mutations
// export const GET_DETAIL_TITLE = "detail/GET_DETAIL_TITLE"
// export const GET_DETAIL_OLDPRICE = "detail/GET_DETAIL_OLDPRICE"
// export const GET_DETAIL_PRICE = "detail/GET_DETAIL_PRICE"
// export const GET_DETAIL_DISCOUNT_DESC = "detail/GET_DETAIL_DISCOUNT_DESC"
// export const GET_DETAIL_DISCOUNT_BGCOLOR = "detail/GET_DETAIL_DISCOUNT_BGCOLOR"


export const GET_DETAIL_RECOMMEND_ACTION = "detail/GET_DETAIL_RECOMMEND_ACTION"
export const GET_DETAIL_RECOMMEND = "detail/GET_DETAIL_RECOMMEND"


export const ADD_GOODS_TO_SHOPCART = "detail/ADD_GOODS_TO_SHOPCART"
export const ADD_SAME_COMPOSE_NUM_TO_CART = "detail/ADD_SAME_COMPOSE_NUM_TO_CART"
export const ADD_GOOGS_COMPOSE_TO_CART = "detail/ADD_GOOGS_COMPOSE_TO_CART"
export const ADD_NEW_GOODS_TO_CART = "detail/ADD_NEW_GOODS_TO_CART"

export const SET_SOME_COMPOSE_IS_REALLY_SELECTED = "shopcart/SET_SOME_COMPOSE_IS_REALLY_SELECTED"
export const SET_ALL_COMPOSE_IS_REALLY_SELECTED = "shopcart/SET_ALL_COMPOSE_IS_REALLY_SELECTED"
export const SET_ALL_GOODS_IS_REALLY_SELECTED = "shopcart/SET_ALL_GOODS_IS_REALLY_SELECTED"