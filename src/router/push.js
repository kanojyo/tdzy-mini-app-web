export default [
    {                                        // 推送 -> 推送列表
        path: '/Push/PushList',
        name: 'PushList',
        meta: { title: '推送列表', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Push/PushList.vue')
    },
];