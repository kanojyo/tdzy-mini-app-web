import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    医生 -- 首页医生介绍管理列表
*/
export function doctorIndex(params){ return fetch({url: '/v1/doctor/list?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:2    医生 -- 添加医生
*/
export function doctorSave(params){ return fetch({url: '/v1/doctor/save', method: 'POST', data: params}) }

/*
*   NO:3    医生 -- 编辑医生
*/
export function doctorUpdate(params){ return fetch({url: '/v1/doctor/update', method: 'POST', data: params}) }

/*
*   NO:4    医生 -- 医生信息详情
*/
export function doctorInfo(params){ return fetch({url: '/v1/doctor/info?id=' + params.id, method: 'GET'}) }

/*
*   NO:5    医生 -- 医生上架下架
*/
export function doctorStatus(params){ return fetch({url: '/v1/doctor/status', method: 'POST', data: params}) }