import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import '@/assets/css/index.css';	//  初始化样式
import '@/assets/css/reset.css';	//  公共样式库
import '@/assets/font/iconfont.css';	//  图标

//  ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 控制路由白名单
import '@/permission';

// 富文本编辑器引用文件
import '../static/UE/ueditor.config.js';
import '../static/UE/ueditor.all.min.js';
import '../static/UE/lang/zh-cn/zh-cn.js';
import '../static/UE/ueditor.parse.min.js';

 //过滤器
import '@/filter';

//	解决在IE es6 编译问题
require('es6-promise').polyfill();
// require('es6-promise/auto');

//	在进入路由之前 每次都会执行此放大		全局钩子
router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next();
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
