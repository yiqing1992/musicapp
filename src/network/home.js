import {request} from "./request";


// 轮播图
export function getbanner(type=2) {
  return request({
    url: `/banner?type=${type}`
  })
}

// 圆形icon
export function getball() {
  return request({
    url: `/homepage/dragon/ball`
  })
}

// 歌单
export function getMusicList(limit=6) {
  return request({
    url: `/personalized?limit=${limit}`
  })
}

// 首页-发现
export function getHomePage() {
  return request({
    url: `/homepage/block/page`
  })
}

// 新歌
export function getNewSong(limit=12) {
  return request({
    url: `/personalized/newsong?limit=${limit}`
  })
}

//新歌速递
//全部:0、华语:7、欧美:96、日本:8、韩国:16
export function getTopSong(type=0) {
  return request({
    url: `/top/song?type=${type}`
  })
}

export function getPlayList(limit=6,order='hot') {
  return request({
    url: `/top/playlist?limit=${limit}&order=${order}`
  })
}
