import Vue from "vue";
import Router from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";


Vue.use(Router);

const routes = [
    { path: "/", component: Home },
];

const router = new Router({
    mode: "history",
    routes,
});

// Navigation guard pour vérifier l'authentification
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const adminOnly = to.matched.some((record) => record.meta.adminOnly);

    if (requiresAuth && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else if (
        adminOnly &&
        (!store.getters["auth/isAuthenticated"] ||
            !store.getters["auth/user"].is_admin)
    ) {
        next("/home"); // Rediriger les non-admins vers une autre page, par exemple
    } else {
        next();
    }
});

export default router;

