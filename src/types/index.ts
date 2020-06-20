// 请求方法类型
import { Method } from './defined/method.type'
// Axios 请求类
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
