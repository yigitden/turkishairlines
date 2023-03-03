import { createRouter, createWebHistory } from "vue-router";
import FinalResult from '../pages/FinalResult.vue'
import SearchResult from '../pages/SearchResults.vue'
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search-results',
        name: 'SearchResults',
        component: SearchResult
    },
    {
        path: '/final-result',
        name: 'FinalResult',
        component: FinalResult
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router