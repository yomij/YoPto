import axios from 'axios'
import qs from 'qs'
const CancelToken = axios.CancelToken

const BASE_URL = ''
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 用于存储每个ajax请求的取消函数和ajax标识
let requestCache = []

const removePending = (config) => {
  for (let i in requestCache) {
    if (requestCache[i].request === `${config.url}&${config.method}`) { // 当当前请求在数组中存在时执行函数体
      requestCache[i].cancel() // 执行取消操作
      requestCache.splice(i, 1) // 把这条记录从数组中移除
      return
    }
  }
}

// 添加响应拦截器
instance.interceptors.response.use(res => {
  removePending(res.config)
  // 请求成功
  if (res.status === 200) {
    // 开发环境打印res
    if (process.env.NODE_ENV === 'development') {
      console.log(res)
    }
    return res
  } else {
    return Promise.reject(res.status)
  }
}, e => {
  // TODO 切换为弹出框
  alert(e)
  return Promise.reject(e)
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  removePending(config) // 在一个ajax发送前执行一下取消操作
  config.cancelToken = new CancelToken(cancel => {
    requestCache.push({ request: `${config.url}&${config.method}`, cancel })
  })
  return config
}, e => {
  return Promise.reject(e)
})

/**
 * @Description 请求方法
 * @Param options {
 *   method: get || post 默认get
 *   url: 请求url
 *   params: 请求参数
 *   resType: json || text 默认 json
 * }
 * @return Promise
 **/
const request = options => {
  let {method = 'get', url, resType = 'json', params} = options
  if (!url) {
    console.log('Request Without Url')
    return new Promise()
  }
  if (method === 'get') {
    url = params ? `${url}?${qs.stringify(params)}` : url
    return instance.get(url)
  } else if (method === 'post') {
    return instance.post(url, params)
  }
  console.log(`Request Options Err, URL = ${url}`)
}

export default request
