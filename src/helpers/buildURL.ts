import { isData, isObject } from './../util/StringUtil'
import encode from '../util/Encode'

// 使用 Params 传递
export function buildURL(url: string, params?: any) {
  // 不是是 Params 传参，不对 url 做任何处理
  if (!params) {
    return url
  }

  const parts: string[] = []

  // 遍历所传递的参数
  Object.keys(params).forEach(key => {
    let val = params[key]
    // 若对象只传了 key 没有 value 则舍弃
    if (val === null || typeof val === 'undefined') return

    let values: string[]
    if (Array.isArray(val)) {
      // 若是数组对象，则设置标识
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    // 数据处理
    values.forEach(val => {
      if (isData(val)) {
        val = val.toISOString() // 转时间的传输格式
      } else if (isObject(val)) {
        val = JSON.stringify(val) // 深拷贝数据
      }
      // 处理编码格式
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  // & 序列化
  let serializedParams = parts.join('&')

  // 切割 url
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    // 判断拼接 ？ OR &
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
