export default [
    {                                        // 优惠劵 -> 优惠劵列表
        path: '/Coupon/CouponList',
        name: 'CouponList',
        meta: { title: '优惠劵列表', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Coupon/CouponList.vue')
    },
];