import Vue from 'vue';
import Router from 'vue-router';
import article from './article';
import coupon from './coupon';
import edition from './edition';
import operate from './operate';
import push from './push';
import riskManagement from './riskManagement';
import statistics from './statistics';
import user from './user';
import doctor from './doctor';
import set from './set';
import slideshow from './slideshow';
import hospital from './hospital';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            name: '',
            meta: { title: '泰斗中医院后台业务管理系统-登录', keepAlive: true },
            component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
        },
        {
            path: '/',
            name: 'login',
            meta: { title: '泰斗中医院后台业务管理系统-登录', keepAlive: true },
            component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
        },
        {
            path: '/main',
            name: 'main',
            meta: { title: '泰斗中医院后台业务管理系统', keepAlive: true },
            component: () => import(/* webpackChunkName: "about" */ '@/views/Main.vue'),
            children: [ 
                ...article,    //  文章  
                ...coupon,   //  优惠劵
                // ...edition,  //  版本
                ...operate,  //  运营
                ...push,    //  推送  
                ...riskManagement,   //  风控
                ...statistics,  //  统计
                ...user,  //  用户
                ...doctor,  //  医生
                ...set, //  设置
                ...slideshow,   //  轮播图
                ...hospital,    //  医院
            ],
        }
    ]
})
