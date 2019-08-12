export default [
    {                                        // 科室 -> 科室管理
        path: '/Office/office',
        name: 'office',
        meta: { title: '科室管理', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Office/office.vue')
    }
];