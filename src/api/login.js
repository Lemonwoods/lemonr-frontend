import request from '../request'

export function login(account, password) {
    return request({
        url: '/login',
        method: 'post',
        data:{
            account:account,
            password:password
        }
    })
}

export function logout() {
    return request({
        url: '/logout',
        method: 'post'
    })
}

export function register(account, password, nickname) {
    return request({
        url: '/register',
        method: 'post',
        data:{
            account:account,
            password:password,
            nickname:nickname
        }
    })
}