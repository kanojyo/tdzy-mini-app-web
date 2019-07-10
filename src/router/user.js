export default [
    {                                        // 用户 -> 用户列表
        path: '/User/UserList',
        name: 'UserList',
        meta: { title: '用户列表', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/User/UserList.vue')
    },
    {                                        // 用户 -> 用户档案列表
        path: '/User/FileList',
        name: 'FileList',
        meta: { title: ' 用户档案列表', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/User/FileList.vue')
    },
    {                                        // 用户 -> 档案关联日志
        path: '/User/FileAssociationLog',
        name: 'FileAssociationLog',
        meta: { title: '档案关联日志', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/User/FileAssociationLog.vue')
    },
];