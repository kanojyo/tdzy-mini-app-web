import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    科室管理 -- 科室列表
*/
export function office(params){ return fetch({url: '/v1/office?'+ urlEncode(params), method: 'GET'}) }

/*
*   NO:2    科室管理 -- 科室添加修改
*/
export function officeUpdate(params){ return fetch({url: '/v1/office/update', method: 'POST',data:params})}

/*
*   NO:3    科室管理 -- 科室上架下架
*/
export function officeState(params){ return fetch({url: '/v1/office_state?'+urlEncode(params), method: 'GET',})}

/*
*   NO:4    科室管理 -- 科室详情
*/
export function officeDetail(params){ return fetch({url: '/v1/office_details?id='+params.id, method: 'GET',})}

/*
*   NO:5    科室管理 -- 部门
*/
export function departmentList(params){ return fetch({url: '/v1/rule/department-list?d_id='+params.d_id, method: 'GET',})}

