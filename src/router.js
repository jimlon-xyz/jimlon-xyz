import ViewUIPlus from 'view-ui-plus'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "question-list" */ '@/views/question/List.vue')
    },
    {
        path: '/question/:id',
        name: 'questionDetail',
        component: () => import(/* webpackChunkName: "question-detail" */ '@/views/question/Detail.vue')
    },
    {
        path: '/user/:id',
        name: 'userHome',
        component: () => import(/* webpackChunkName: "user-home" */ '@/views/user/Home.vue')
    },
    {
        path: '/user/center/sign',
        name: 'userHome',
        component: () => import(/* webpackChunkName: "user-home" */ '@/views/user/Home.vue')
    },
    {
        path: '/user/setting',
        component: () => import(/* webpackChunkName: "user-setting-layout" */ '@/views/user/Setting.vue'),
        children: [
            {
                path: 'profile',
                name: 'userSettingProfile',
                component: () => import(/* webpackChunkName: "user-setting-profile" */ '@/views/user/setting/Profile.vue')
            },
        ]
    },
    
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

router.beforeEach((to, from, next) => {
    ViewUIPlus.LoadingBar.start()
    next()
})

router.afterEach(() => {
    ViewUIPlus.LoadingBar.finish()
})

export default router
