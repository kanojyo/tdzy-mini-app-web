import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    轮播图 -- 轮播图列表
*/
export function slideIndex(params){ return fetch({url: '/v1/slide?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:2    轮播图 -- 更新轮播图
*/
export function slideUpdate(params){ return fetch({url: '/v1/slide/update/' + params.id, method: 'POST', data: params}) }

/*
*   NO:3    轮播图 -- 新增轮播图
*/
export function slideStore(params){ return fetch({url: '/v1/slide/store', method: 'POST', data: params}) }

/*
*   NO:4    轮播图 -- 轮播图详情
*/
export function slideShow(params){ return fetch({url: '/v1/slide/show/' + params.id, method: 'GET'}) }