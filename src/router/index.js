import { createRouter, createWebHistory } from 'vue-router'
import ViewView from '../layouts/ViewView.vue'
import HomeView from '../layouts/HomeView.vue'
import ContactView from '../layouts/ContactView.vue'

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/view',
        component: ViewView
    },
    {
        path: '/contact',
        component: ContactView
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})