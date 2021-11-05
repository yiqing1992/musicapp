import {request} from "./request";

// 最新MV
export function getMV(limit=20) {
  return request({
    url: `/mv/first?limit=${limit}`
  })
}