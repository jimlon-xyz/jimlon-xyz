import ViewUIPlus from 'view-ui-plus'

import { storeToRefs } from 'pinia'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/question/List.vue')
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
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    ViewUIPlus.LoadingBar.start()
    next()
})

router.afterEach(() => {
    ViewUIPlus.LoadingBar.finish()
})

export default router
