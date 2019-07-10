import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    商品 -- 商品管理列表
*/
export function goodsIndex(params){ return fetch({url: '/v1/hot_goods/list?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:2    商品 -- 上架 下架 暂停兑换
*/
export function changeStatus(params){ return fetch({url: '/v1/hot_goods/change_status', method: 'POST', data:params}) }

/*
*   NO:3    商品 -- 兑换商品详情
*/
export function goodsDetails(params){ return fetch({url: '/v1/hot_goods/details?id='+params.id, method: 'GET', }) }

/*
*   NO:4    商品 -- 商品修改
*/
export function goodsUpdate(params){ return fetch({url: '/v1/hot_goods/update', method: 'POST', data:params}) }

/*
*   NO:5    商品 -- 商品添加
*/
export function goodsAdd(params){ return fetch({url: '/v1/hot_goods/add', method: 'POST', data:params}) }

/*
*   NO:6    商品 -- 确认兑换
*/
export function goodsConfirm(params){ return fetch({url: '/v1/score_exchange_log/confirm', method: 'POST', data:params}) }

/*
*   NO:7    商品 -- 积分兑换操作日志列表
*/
export function exchangeLogList(params){ return fetch({url: '/v1/score_exchange_log/list?'+ urlEncode(params), method: 'GET'}) }

/*
*   NO:8    商品 -- 积分兑换列表
*/
export function exchangeList(params){ return fetch({url: '/v1/score_exchange/list?'+ urlEncode(params), method: 'GET'}) }

/*
*   NO:9    商品 -- 签到积分记录列表
*/
export function signList(params){ return fetch({url: '/v1/score_sign/list?'+ urlEncode(params), method: 'GET'}) }