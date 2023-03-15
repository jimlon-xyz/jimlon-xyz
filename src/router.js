import ViewUIPlus from 'view-ui-plus'

import { storeToRefs } from 'pinia'
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
