import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    公告管理 -- 公告管理列表
*/
export function announcementIndex(params){ return fetch({url: '/v1/announcement/index?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:2    公告管理 -- 公告详情
*/
export function announcementInfo(params){ return fetch({url: '/v1/announcement/info?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:3    公告管理 -- 修改公告
*/
export function authenticateUpdate(params){ return fetch({url: '/v1/announcement/update', method: 'POST', data: params}) }

/*
*   NO:4    公告管理 -- 添加公告
*/
export function authenticateAdd(params){ return fetch({url: '/v1/announcement/add', method: 'POST', data: params}) }

/*
*   NO:5    公告管理 -- 添加公告
*/
export function authenticateWithdraw(params){ return fetch({url: '/v1/announcement/withdraw', method: 'POST', data: params}) }

/*
*   NO:6    分配规则管理 -- 管理列表
*/
export function ruleIndex(){ return fetch({url: '/v1/rule/index', method: 'GET'}) }

/*
*   NO:7    分配规则管理 -- 科室详情
*/
export function officeInfo(params){ return fetch({url: '/v1/rule/office-info?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:8    公告管理 -- 科室部门编辑
*/
export function officeSaveSepartment(params){ return fetch({url: '/v1/rule/office-save-department', method: 'POST', data: params}) }

/*
*   NO:9    投诉管理 -- 投诉管理列表
*/
export function complaintIndex(params){ return fetch({url: '/v1/complaint/index?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:10    投诉管理 -- 投诉处理
*/
export function complaintProcess(params){ return fetch({url: '/v1/complaint/process', method: 'POST', data: params}) }

/*
*   NO:11    投诉管理 -- 投诉记录
*/
export function complaintInfo(params){ return fetch({url: '/v1/complaint/info?id=' + params.id, method: 'GET'}) }

/*
*   NO:12    投诉管理 -- 管理员关闭投诉记录
*/
export function complaintClose(params){ return fetch({url: '/v1/complaint/close', method: 'POST', data: params}) }