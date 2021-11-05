import {request} from "./request";

// 手机登录
export function getLogin(phone,password) {
  return request({
    url: `/login/cellphone?phone=${phone}&password=${password}`
  })
}

// 用户详情
export function userDetail(uid) {
  return request({
    url: `/user/detail?uid=${uid}`
  })
}

export function userSong(uid) {
  return request({
    url: `/user/playlist?uid=${uid}`
  })
}