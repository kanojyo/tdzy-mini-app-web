import axios from 'axios';
import router from '@/router';

import ElementUI from 'element-ui';

// 创建axios实例
const instance = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // Do something before request is sent
    config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token');
    config.headers.device = localStorage.getItem('device');
    ElementUI.Loading.service({text: '玩命加载中...', background: 'rgba(0, 0, 0, .5)'});    //  全局加载层
    return config;
}, error => {
  // Do something with request error
    console.log(error);      // for debug
    Promise.reject(error);
})

// 添加响应拦截器s
instance.interceptors.response.use(
    response => {
        const res = response.data;
        if(res.code === 401){   //  token过期后跳转到登录页面
            router.push('/out');
            sessionStorage.clear();
            // ElementUI.Message.error(res.message);
        }else if(res.code === 200){
            if(sessionStorage.getItem('token')){
                if(response.headers.authorization !== undefined){
                    let authorization = response.headers.authorization.replace(/Bearer /, '');   //  存储token
                    sessionStorage.setItem('token',  authorization);
                }
            }
        }else{
            ElementUI.Message.error(res.message);
        }
        // console.log(res);
        ElementUI.Loading.service().close();
        return res;
}, error => {
    console.log(error);
    ElementUI.Message.error('404:网络链接错误');
    ElementUI.Loading.service().close();
    return Promise.reject(error);
})

export default instance;
