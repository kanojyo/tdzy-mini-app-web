export default [
    {                                        // 轮播图 -> 首页轮播图
        path: '/Slideshow/HomeSlideshow',
        name: 'HomeSlideshow',
        meta: { title: '首页轮播图', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Slideshow/HomeSlideshow.vue')
    },
];