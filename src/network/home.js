import {request} from "./request"


// 老师的接口取名有点问题，下面这个获取首页多个数据的方法仅仅是请求首页里展示的商品之外的数据
export function getHomeMultidata(){
  return request({
    url:"/home/multidata"
  })
}

// 展示的商品在这个接口里请求
export function getHomeGoods(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}