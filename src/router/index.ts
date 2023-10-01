import { createRouter, createWebHistory } from 'vue-router';
import { ROUTE_NAMES } from '@/constants';


const HomePage = () => import('@/views/pages/home.vue');
const SignUpPage = () => import('@/views/pages/SignUpPage.vue');
const SignInPage = () => import('@/views/pages/SignInPage.vue');
const CoachPage = () => import('@/views/pages/CoachPage.vue');
const MenteePage = () => import('@/views/pages/MenteePage.vue');


const routes = [
    {
        path: '/',
        name: ROUTE_NAMES.HOME,
        component: HomePage
    },
    {
        path: '/sign-up',
        name: ROUTE_NAMES.SIGN_UP,
        component: SignUpPage
    },
    {
        path: '/sign-in',
        name: ROUTE_NAMES.SIGN_IN,
        component: SignInPage
    },
    {
        path: '/coach-page',
        name: ROUTE_NAMES.COACH,
        component: CoachPage
    },
    {
        path: '/mentee-page',
        name: ROUTE_NAMES.MENTEE,
        component: MenteePage
    },
    {   
        path: '/:pathMatch(.*)*',
        redirect: { name: ROUTE_NAMES.SIGN_UP },
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0, behavior: 'smooth'}
    }
});
