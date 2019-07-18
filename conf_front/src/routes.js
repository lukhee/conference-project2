import home from './components/home.vue';
import register from './components/register.vue';
import admin from './components/admin.vue';

const routes = [
    { path: '/', component: home, name: "home" },
    { path: '/register/:id', component: register, name: "register" },
    { path: '/admin', component: admin, name: admin },
];

export default routes;