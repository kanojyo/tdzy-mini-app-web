import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    版本 -- 版本管理列表
*/
export function version(params){ return fetch({url: '/v1/app_version?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:2    版本 -- 新增APP版本管理
*/
export function versionStore(params){ return fetch({url: '/v1/app_version/store', method: 'POST', data: params}) }

/*
*   NO:3    版本 -- 更新APP版本管理
*/
export function versionUpdate(params){ return fetch({url: '/v1/app_version/update/' + params.id, method: 'POST', data: params}) }

/*
*   NO:4    版本 -- APP版本详情
*/
export function versionShow(params){ return fetch({url: '/v1/app_version/show/' + params.id, method: 'GET'}) }