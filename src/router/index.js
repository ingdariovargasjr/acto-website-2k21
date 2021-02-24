import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Seguros from "../views/Seguros.vue";
import Membresias from "../views/Membresias.vue";
import QuienesSomos from "../views/QuienesSomos.vue";
import Soluciones from "../views/Soluciones.vue";
import Fianzas from "../views/Fianzas.vue";
import Blog from "../views/Blog.vue";
import Login from "../views/Login.vue";
import Contacto from "../views/Contacto.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/seguros",
        name: "Seguros",
        component: Seguros
    },
    {
        path: "/membresias",
        name: "Membresias",
        component: Membresias
    },
    {
        path: "/quienes-somos",
        name: "QuienesSomos",
        component: QuienesSomos
    },
    {
        path: "/soluciones",
        name: "Soluciones",
        component: Soluciones
    },
    {
        path: "/fianzas",
        name: "Fianzas",
        component: Fianzas
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/contacto",
        name: "Contacto",
        component: Contacto
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;