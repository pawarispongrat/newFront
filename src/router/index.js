import { createRouter,createWebHistory } from "vue-router";
import Main from "../views/Main.vue"
import Details from "../views/Details.vue"
import PageNotFound from "../views/PageNotFound.vue"
const router = createRouter({
    history:createWebHistory(),
    routes:[{
        path: '/',
        name: 'Announcement',
        component: Main,
    },
    {
        path: '/:notfoundpath(.*)',
        name: 'PageNotFound',
        component: PageNotFound        
    },
    {
        path: '/:id',
        name: 'AnnouncementDetails',
        component: Details,
    }
]
})
export default router