import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
class XTRequest {
  constructor(baseURL, timeout = 5000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get(config) {
    return this.request({
      ...config,
      method: 'get'
    })
  }
  post(config) {
    return this.request({
      ...config,
      method: 'post'
    })
  }
}

export default new XTRequest(BASE_URL, TIMEOUT)
