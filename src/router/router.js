import {createRouter, createWebHistory} from "vue-router"
import LoginPage from '@/pages/LoginPage'

const routes = [
    {
        path: '/',
        name: 'sign-in',
        component: LoginPage,
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('@/pages/ForgotPasswordPage.vue'),
    },
    {
        path: '/registration',
        name: 'sign-up',
        component: () => import('@/pages/RegistrationPage.vue'),
    },
    {
        path: '/forgot-password/verification',
        name: 'verification',
        component: () => import('@/pages/VerificationPage.vue'),
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('@/pages/CreateNewPasswordPage.vue'),
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;