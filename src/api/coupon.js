import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    优惠券 -- 优惠券列表
*/
export function coupon(params){ return fetch({url: '/v1/coupon?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:2    优惠券 -- 添加优惠券
*/
export function couponStore(params){ return fetch({url: '/v1/coupon/store', method: 'POST', data: params}) }

/*
*   NO:3    优惠券 -- 更新优惠券
*/
export function couponUpdate(params){ return fetch({url: '/v1/coupon/update/' + params.id, method: 'POST', data: params}) }

/*
*   NO:4    优惠券 -- 优惠券领取详情
*/
export function couponReceiveLog(params){ return fetch({url: '/v1/coupon/receive_log/' + params.id + '?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:5    优惠券 -- 优惠券详情
*/
export function couponShow(params){ return fetch({url: '/v1/coupon/show/' + params.id, method: 'GET'}) }
