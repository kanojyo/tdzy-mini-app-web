export default [
    {                                        // 医生 -> 预约订单
        path: '/Doctor/BookingOrder',
        name: 'BookingOrder',
        meta: { title: '医生介绍', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Doctor/BookingOrder.vue')
    },
    {                                        // 医生 -> 排班介绍
        path: '/Doctor/Schedule',
        name: 'Schedule',
        meta: { title: '医生介绍', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Doctor/Schedule.vue')
    },
    {                                        // 医生 -> 医生介绍
        path: '/Doctor/DoctorIntroduce',
        name: 'DoctorIntroduce',
        meta: { title: '医生介绍', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Doctor/DoctorIntroduce.vue')
    },
];