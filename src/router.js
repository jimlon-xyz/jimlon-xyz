import { storeToRefs } from 'pinia'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "question-list" */ '@/views/question/List.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach(async (to, from, next) => {
    next()
})

export default router
