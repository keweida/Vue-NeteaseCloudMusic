import request from '../axios/http'

export function banner(num) {
  return request({
    url: '/banner',
    method: 'GET',
    params: {
      type: num
    }
  })
}
