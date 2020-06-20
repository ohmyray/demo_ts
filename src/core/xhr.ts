import { AxiosRequestConfig } from './../types/index';

// xhr 请求函数
export default function xhr (config: AxiosRequestConfig){
  // 解构配置对象
  const { data = null, url, method ='GET'} = config;
  // 拿到请求对象
  const req = new XMLHttpRequest();
  // 开启链接
  req.open(method.toUpperCase(), url, true);
  // 发送数据
  req.send(data);
}