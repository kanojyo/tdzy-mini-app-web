export default [
    {                                        // 商品 -> 商品管理
        path: '/Goods/goods',
        name: 'goods',
        meta: { title: '商品管理', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Goods/goods.vue')
    },
    {                                        // 商品 -> 签到积分记录
        path: '/Goods/signRecord',
        name: 'signRecord',
        meta: { title: '签到积分记录', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Goods/signRecord.vue')
    },
    {                                        // 商品 -> 兑换记录
        path: '/Goods/exchange',
        name: 'exchange',
        meta: { title: '兑换记录', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Goods/exchange.vue')
    },
];