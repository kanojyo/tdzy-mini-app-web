import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    设置 -- 系统菜单列表
*/
export function menuIndex(){ return fetch({url: '/v1/sysSet/menu/index', method: 'GET'}) }

/*
*   NO:2    设置 -- 系统菜单新增
*/
export function menuPost(params){ return fetch({url: '/v1/sysSet/menu/post', method: 'POST', data: params}) }

/*
*   NO:3    设置 -- 系统菜单修改
*/
export function menuUpdate(params){ return fetch({url: '/v1/sysSet/menu/update/' + params.id, method: 'PUT', data: params}) }

/*
*   NO:4    设置 -- 系统菜单删除
*/
export function menuDelete(params){ return fetch({url: '/v1/sysSet/menu/delete/' + params.id, method: 'DELETE'}) }

/*
*   NO:5    设置 -- 系统菜单同级菜单列表
*/
export function menuLevel(params){ return fetch({url: '/v1/sysSet/menu/level/' + params.id, method: 'GET'}) }

/*
*   NO:6    设置 -- 系统用户列表
*/
export function userIndex(params){ return fetch({url: '/v1/sysSet/user/index?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:7    设置 -- 系统用户编辑
*/
export function userUpdate(params){ return fetch({url: '/v1/sysSet/user/update/' + params.id, method: 'PUT', data: params}) }

/*
*   NO:8    设置 -- 系统角色列表下拉框
*/
export function roleSelect(params){ return fetch({url: '/v1/sysSet/role/select', method: 'GET'}) }

/*
*   NO:9    设置 -- 系统角色列表
*/
export function roleIndex(params){ return fetch({url: '/v1/sysSet/role/index?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:10    设置 -- 系统角色增加
*/
export function rolePost(params){ return fetch({url: '/v1/sysSet/role/post', method: 'POST', data: params}) }

/*
*   NO:11    设置 -- 系统角色修改
*/
export function roleUpdate(params){ return fetch({url: '/v1/sysSet/role/update/' + params.id, method: 'PUT', data: params}) }

/*
*   NO:12    设置 -- 系统角色删除
*/
export function roleDelete(params){ return fetch({url: '/v1/sysSet/role/delete/' + params.id, method: 'DELETE'}) }

/*
*   NO:12    设置 -- 系统角色权限
*/
export function rolePermission(params){ return fetch({url: '/v1/sysSet/rolePermission/' + params.id, method: 'GET'}) }

