export default [
    {                                        // 运营 -> 分配规则管理
        path: '/Operate/AllocationRule',
        name: 'AllocationRule',
        meta: { title: '分配规则管理', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Operate/AllocationRule.vue')
    },
    {                                        // 运营 -> 投诉管理
        path: '/Operate/Complaint',
        name: 'Complaint',
        meta: { title: '投诉管理', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Operate/Complaint.vue')
    },
    {                                        // 运营 -> 公告管理
        path: '/Operate/AnnouncementManagement',
        name: 'AnnouncementManagement',
        meta: { title: '公告管理', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Operate/AnnouncementManagement.vue')
    },
];