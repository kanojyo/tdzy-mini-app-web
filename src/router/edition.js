export default [
    {                                        // 版本 -> 版本列表
        path: '/Edition/EditionList',
        name: 'EditionList',
        meta: { title: '版本列表', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Edition/EditionList.vue')
    },
];