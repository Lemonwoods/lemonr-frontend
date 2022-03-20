import request from "../request";
import {getToken} from "../request/token";

export function getUserInfoById(id) {
    return request({
        url: `/users/info/${id}`,
        method: 'get',
        headers:{
            'Authorization':getToken()
        },
    })
}

export function getCurrentUserInfo() {
    return request({
        url: '/users/info/current',
        method: 'get',
        headers:{
            'Authorization':getToken()
        }
    })
}

export function changeUserInfo(param) {
    return request({
        url: '/users/info/change',
        method: 'post',
        data:param
    })
}

export function followUser(id) {
    return request({
        url: `/users/follow/${id}`,
        method: 'post'
    })
}

export function cancelFollowUser(id) {
    return request({
        url: `/users/cancelFollow/${id}`,
        method: 'delete'
    })
}

export function getFollowList(id, pageParam) {
    return request({
        url: `/users/${id}/followList`,
        method: 'post',
        data:{
            page:pageParam.page,
            pageSize:pageParam.pageSize
        }
    })
}

export function getFanList(id, pageParam) {
    return request({
        url: `/users/${id}/fanList`,
        method: 'post',
        data:{
            page:pageParam.page,
            pageSize:pageParam.pageSize
        }
    })
}