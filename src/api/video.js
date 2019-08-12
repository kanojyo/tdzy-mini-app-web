import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    视频 -- 视频列表
*/
export function video(params){ return fetch({url: '/v1/video?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:2    视频 -- 视频上架下架
*/
export function videoStatus(params){ return fetch({url: '/v1/video_status?' + urlEncode(params), method: 'GET',}) }

/*
*   NO:3    视频 -- 视频详情
*/
export function videoDetails(params){ return fetch({url: '/v1/video_details?id='+params.id, method: 'GET', }) }

/*
*   NO:4    视频 -- 视频添加修改
*/
export function videoUpdate(params){ return fetch({url: '/v1/video/update', method: 'POST',data:params}) }