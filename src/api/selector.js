import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    科室列表
*/
export function office(){ return fetch({url: '/v1/office', method: 'GET'}) }

/*
*   NO:2    医助列表
*/
export function yzList(){ return fetch({url: '/v1/user/yz-list', method: 'GET'}) }

/*
*   NO:3    部门列表
*/
export function department(){ return fetch({url: '/v1/rule/department-list', method: 'GET'}) }

/*
*   NO:3    文章分类列表
*/
export function category(params){ return fetch({url: 'v1/article/category/list?' + urlEncode(params), method: 'GET'}) }