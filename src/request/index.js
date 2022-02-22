import axios from 'axios'
import {Message} from 'element-ui'
import store from '@/store'
import {getToken, } from '@/request/token'

axios.defaults.baseURL = 'http://localhost:8888'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10000
})

//request拦截器
service.interceptors.request.use(config => {
    if (store.state.token) {
    config.headers['Oauth-Token'] = getToken()
    config.headers['Authorization'] = getToken()
    }
    return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {

    //全局统一处理 Session超时
    if (response.headers['session_time_out'] == 'timeout') {
      store.dispatch('fedLogOut')
    }

    const res = response.data;

    //0 为成功状态
    if (res.code !== 200) {
      //1001 参数错误
      //1002 格式错误
      //1003 会话超时
      //1004 上传失败
      //2001 用户名或密码不正确
      //2002 账户已存在
      //2003 未登录
        if(res.code!== 2003){
            console.log('no log')
            // removeToken()
            // store.dispatch('fedLogOut')
        }
      //2004 token不合法
      //2005 账户不存在
      //3001 无访问权限
      //70001 权限认证错误
      Message({
        type: 'warning',
        showClose: true,
        message: res.msg
      })
      return Promise.reject(res);
    } else {
      return response.data;
    }
  },
  error => {
    Message({
      type: 'warning',
      showClose: true,
      message: '连接超时'
    })
    return Promise.reject(error)
  })

export default service
