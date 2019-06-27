export default [
    {                                        // 文章 -> 文章管理
        path: '/Article/ArticleAdministration',
        name: 'ArticleAdministration',
        meta: { title: '文章管理', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Article/ArticleAdministration.vue')
    },
    {                                        // 文章 -> 文章分类
        path: '/Article/ArticleClassification',
        name: 'ArticleClassification',
        meta: { title: '文章分类管理', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Article/ArticleClassification.vue')
    },
];