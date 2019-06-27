export default [
    {                                        // 医院 -> 医院介绍设置
        path: '/Hospital/HospitalIntroduce',
        name: 'HospitalIntroduce',
        meta: { title: '医院介绍设置', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Hospital/HospitalIntroduce.vue')
    },
];