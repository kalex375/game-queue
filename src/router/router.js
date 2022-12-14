import {createRouter, createWebHistory} from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import useLoginUser from '@/hooks/useLoginUser'

const {checkUser} = useLoginUser()

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
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {requiresAuth: true},
        component: () => import('@/pages/DashboardPage.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/pages/NotFound.vue'),
    },
    {
        path: '/add-game',
        name: 'add-game',
        meta: {requiresAuth: true},
        component: () => import('@/pages/AddGamePage.vue'),
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (checkUser()) {
            next()
        } else {
            next({name: 'sign-in'})
        }
    } else {
        next()
    }
})

export default router
