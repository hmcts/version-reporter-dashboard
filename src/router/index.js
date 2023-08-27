import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/views/HomePage.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/reports/:reportName",
            name: "reports",
            component: () => import("../views/ReportsPage.vue")
        },
        {
            path: "/:catchAll(.*)",
            component: NotFound,
        }
    ]
});

export default router