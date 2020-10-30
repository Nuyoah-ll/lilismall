import axios from "axios";
export function request(config) {
  const instance = axios.create({
    baseURL: "http://106.54.54.237:8000/api/mn",
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log("请求发送失败", err)
  })

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log("响应异常", err)
  })

  return instance(config)
}