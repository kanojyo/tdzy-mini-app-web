export default [
    {                                        // 视频 -> 视频列表
        path: '/Video/video',
        name: 'video',
        meta: { title: '视频管理', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Video/video.vue')
    },
];