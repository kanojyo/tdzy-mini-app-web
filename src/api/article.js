import fetch from '@/utils/fetch';
import {urlEncode} from '@/utils/index';

/*
*   NO:1    文章分类 -- 文章分类列表
*/
export function articleCategory(params){ return fetch({url: '/v1/article/category?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:2    文章分类 -- 新增文章分类
*/
export function categoryStore(params){ return fetch({url: '/v1/article/category/store', method: 'POST', data: params}) }

/*
*   NO:3    文章分类 -- 更新文章分类
*/
export function categoryUpdate(params){ return fetch({url: '/v1/article/category/update/' + params.id, method: 'POST', data: params}) }

/*
*   NO:4    文章管理 -- 文章列表
*/
export function article(params){ return fetch({url: '/v1/article?' + urlEncode(params), method: 'GET'}) }

/*
*   NO:5    文章管理 -- 新增文章
*/
export function articleStore(params){ return fetch({url: '/v1/article/store', method: 'POST', data: params}) }

/*
*   NO:6    文章分类 -- 更新文章
*/
export function articleUpdate(params){ return fetch({url: '/v1/article/update/' + params.id, method: 'POST', data: params}) }

/*
*   NO:7    文章分类 -- 文章详情
*/
export function articleShow(params){ return fetch({url: '/v1/article/show/' + params.id, method: 'GET'}) }

/*
*   NO:7    文章分类 -- 文章标签
*/
export function articleTag(params){ return fetch({url: '/v1/article/tag', method: 'GET'}) }