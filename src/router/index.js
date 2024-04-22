import {createRouter, createWebHistory} from "vue-router";
import QuizesVIew from "../views/QuizesVIew.vue";
import QuizViews from "../views/QuizViews.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'quizes',
            component: QuizesVIew
        },
        {
            path: "/quiz/:id",
            name: 'quiz',
            component: QuizViews
        }
    ]
})

export default router