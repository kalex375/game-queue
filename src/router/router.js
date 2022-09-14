import {createRouter, createWebHistory} from "vue-router"
import LoginPage from '@/pages/LoginPage'
import ForgotPasswordPage from '@/pages/ForgotPasswordPage'

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/forgot-password',
        component: ForgotPasswordPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;