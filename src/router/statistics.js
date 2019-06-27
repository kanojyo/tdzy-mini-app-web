export default [
    {                                        // 统计 -> 聊天统计
        path: '/Statistics/StatisticsChat',
        name: 'StatisticsChat',
        meta: { title: '聊天统计', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Statistics/StatisticsChat.vue')
    },
    {                                        // 统计 -> 进粉统计
        path: '/Statistics/StatisticsPowder',
        name: 'StatisticsPowder',
        meta: { title: '进粉统计', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Statistics/StatisticsPowder.vue')
    },
];