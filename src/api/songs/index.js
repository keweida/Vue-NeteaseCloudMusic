import request from '../axios/http'

export function recommendSongs(limit) {
  return request({
    url: `/personalized?limit=${limit}`,
    method: 'GET'
  })
}

export function newDish(limit, offset = 0) {
  return request({
    url: `/top/album?offset=${offset}&limit=${limit}`,
    method: 'GET'
  })
}

export function newSongs() {
  return request({
    url: '/personalized/newsong',
    method: 'GET'
  })
}

export function rankingList(idx) {
  return request({
    url: `/top/list?idx=${idx}`,
    method: 'GET'
  })
}
