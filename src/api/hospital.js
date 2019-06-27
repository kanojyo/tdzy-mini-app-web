import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    医院 -- 医院介绍详情
*/
export function hospitalShow(params){ return fetch({url: '/v1/hospital/show/' + params.id, method: 'GET'}) }

/*
*   NO:2    医院 -- 更新医院介绍
*/
export function hospitalUpdate(params){ return fetch({url: '/v1/hospital/update/' + params.id, method: 'POST', data: params}) }