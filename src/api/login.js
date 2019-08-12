import fetch from '@/utils/fetch'

/*
*   NO:1    用户登录 -- 获得设备号
*/
export function device(){ return fetch({url: '/v1/device', method: 'GET'}) }

/*
*   NO:2    用户登录 -- 获得图形验证码
*/
export function captcha(){ return fetch({url: '/v1/captcha', method: 'GET'}) }

/*
*   NO:3    用户登录 -- 登录（密码登录）
*/
export function authenticate(params){ return fetch({url: '/v1/authenticate', method: 'POST', data: params}) }

/*
*   NO:4    用户登录 -- 用户信息（me接口）
*/
export function myInfo(){ return fetch({url: '/v1/myInfo', method: 'GET'}) }

/*
*   NO:5    用户登录 -- 退出登录
*/
export function signOut(){ return fetch({url: '/v1/signOut', method: 'POST'}) }

/*
*   NO:6    用户登录 -- 修改密码
*/
export function editPassword(){ return fetch({url: '/v1/edit_password', method: 'POST'}) }