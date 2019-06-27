export default [
    {                                        // 风控 -> 敏感词管理
        path: '/RiskManagement/SensitiveWordsAdministration',
        name: 'SensitiveWordsAdministration',
        meta: { title: '敏感词管理', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/RiskManagement/SensitiveWordsAdministration.vue')
    },
    {                                        // 风控 -> 敏感词记录管理
        path: '/RiskManagement/SensitiveWordsRecord',
        name: 'SensitiveWordsRecord',
        meta: { title: '敏感词记录管理', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/RiskManagement/SensitiveWordsRecord.vue')
    },
];