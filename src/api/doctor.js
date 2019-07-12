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

/*
*   NO:6    医生 -- 预约列表
*/
export function appointmentList(params){ return fetch({url: '/v1/appointment/list?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:7    医生 -- 确认就诊
*/
export function appointmentConfirm(params){ return fetch({url: '/v1/appointment/confirm' , method: 'POST', data: params}) }

/*
*   NO:8    医生 -- 取消预约
*/
export function appointmentCancel(params){ return fetch({url: '/v1/appointment/cancel' , method: 'POST', data: params}) }

/*
*   NO:9    医生 -- 预约详情
*/
export function appointmentInfo(params){ return fetch({url: '/v1/appointment/info?id=' +params.id , method: 'GET'}) }

/*
*   NO:10    医生 -- 预约操作日志列表
*/
export function appointmentLog(params){ return fetch({url: '/v1/appointment_log/index?' + urlEncode(params) , method: 'GET'}) }

/*
*   NO:11    医生 -- 医生开启关闭预约
*/
export function schedulingStatus(params){ return fetch({url: '/v1/doctor/scheduling_status' , method: 'POST', data: params}) }

/*
*   NO:12    医生 -- 排班列表
*/
export function schedulingList(params){ return fetch({url: '/v1/scheduling/list?' + urlEncode(params) , method: 'GET'}) }

/*
*   NO:13    医生 -- 添加排班
*/
export function schedulingSave(params){ return fetch({url: '/v1/scheduling/save' , method: 'POST', data: params}) }

/*
*   NO:14    医生 -- 修改排班
*/
export function schedulingUpdate(params){ return fetch({url: '/v1/scheduling/update' , method: 'POST', data: params}) }

/*
*   NO:15    医生 -- 排班详情
*/
export function schedulingDetail(params){ return fetch({url: '/v1/scheduling/info?id=' + params.id , method: 'GET'}) }

