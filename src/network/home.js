import {request} from './request'

export function getHomeMultidate() {
  return request({
    url: '/home/multidata'
  })
}
//请求复杂数据
export function getHomeGoods(type, page) {
  return request ({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}