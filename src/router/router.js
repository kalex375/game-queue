import {createRouter, createWebHistory} from "vue-router"
import LoginPage from '@/pages/LoginPage'
import ForgotPasswordPage from '@/pages/ForgotPasswordPage'
import RegistrationPage from '@/pages/RegistrationPage'

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/forgot-password',
        component: ForgotPasswordPage
    },
    {
        path: '/registration',
        component: RegistrationPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;