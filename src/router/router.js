import { createRouter, createWebHistory } from 'vue-router'

import mainPage from '@/components/main-page'
import moreInformation from '@/components/more-information'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: mainPage
        },
        {
            path: '/one-worker',
            name: 'moreInformation',
            component: moreInformation,
            props: true
        }
    ]
})

export default router
