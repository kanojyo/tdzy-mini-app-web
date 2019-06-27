export default [
    {                                        // 设置 -> 菜单管理
        path: '/Set/MenuManagement',
        name: 'MenuManagement',
        meta: { title: '菜单管理', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Set/MenuManagement.vue')
    },
    {                                        // 设置 -> 帐号列表
        path: '/Set/AccountManagement',
        name: 'AccountManagement',
        meta: { title: '帐号列表', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Set/AccountManagement.vue')
    },
    {                                        // 设置 -> 角色列表
        path: '/Set/RoleManagement',
        name: 'RoleManagement',
        meta: { title: '角色列表', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Set/RoleManagement.vue')
    },
];