export default [
    {                                        // 医生 -> 医生介绍
        path: '/Doctor/DoctorIntroduce',
        name: 'DoctorIntroduce',
        meta: { title: '医生介绍', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Doctor/DoctorIntroduce.vue')
    },
];