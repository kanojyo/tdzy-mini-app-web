import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    用户 -- APP用户列表
*/
export function userIndex(params){ return fetch({url: '/v1/user/index?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:2    用户 -- 分配医助
*/
export function userAssign(params){ return fetch({url: '/v1/user/yz-assign', method: 'POST', data: params}) }

/*
*   NO:3    用户 -- 用户详情
*/
export function userInfo(params){ return fetch({url: '/v1/user/userinfo?id=' + params.id, method: 'GET'}) }

/*
*   NO:4    用户 -- 用户订单记录
*/
export function orderIndex(params){ return fetch({url: '/v1/order/index?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:5    用户 -- 订单详情
*/
export function orderInfo(params){ return fetch({url: '/v1/order/info?order_id=' + params.id, method: 'GET'}) }

/*
*   NO:6    用户 -- 订单审核信息
*/
export function orderCheck(params){ return fetch({url: '/v1/order/check?order_id=' + params.id, method: 'GET'}) }

/*
*   NO:7    用户 -- 病症信息
*/
export function diseaseCheck(params){ return fetch({url: '/v1/disease/info?order_id=' + params.id, method: 'GET'}) }

/*
*   NO:8    用户 -- 档案编号搜索
*/
export function archiveSearch(params){ return fetch({url: '/v1/archive/search', method: 'POST', data: params}) }

/*
*   NO:9    用户 -- 绑定档案编号
*/
export function archiveBind(params){ return fetch({url: '/v1/archive/bind', method: 'POST', data: params}) }

/*
*   NO:10    用户 -- 用户聊天记录
*/
export function chatList(params){ return fetch({url: '/v1/user/chat-list?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:11    用户 -- 用户病症记录
*/
export function diseaseList(params){ return fetch({url: '/v1/disease/list?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:12    用户 -- 获取聊天记录标识
*/
export function chatSign(params){ return fetch({url: '/v1/chat/sign', method: 'POST', data: params}) }

/*
*   NO:13    用户 -- 档案信息
*/
export function userCustomer(params){ return fetch({url: '/v1/user/customer?user_id=' + params.user_id, method: 'GET'}) }

/*
*   NO:14    用户 -- 病症详情(同步医助端)
*/
export function newInfo(params){ return fetch({url: '/v1/disease/new-info?disease_id=' + params.id, method: 'GET'}) }

/*
*   NO:15    用户 -- 档案关联日志
*/
export function archiveLog(params){ return fetch({url: '/v1/archive/log?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:16    用户 -- 部门选择列表（下拉选择）
*/
export function departmentList(params){ return fetch({url: '/v1/rule/department-list', method: 'GET'}) }

/*
*   NO:17    用户 -- 用户列表
*/
export function getIndex(params){ return fetch({url: '/v1/user/index?' + urlEncode(params), method: 'GET'}) }