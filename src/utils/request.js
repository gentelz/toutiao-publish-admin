/**
 *  基于 axios 封装的请求模块
 */
import axios from 'axios'

// 创建一个 axios 实例
// 通过实例去发送请求，把需要的实例配置给这里实例进行处理
const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net'
})

// 请求拦截器

// 相应拦截器

// 导出请求方法
export default request

/**
 *  谁要用谁就加载 request模块
 *  import request from 'request.js'
 *  request.xxx
 *  request({
 *   method:'',
 *   path:''
 *   })
 */
