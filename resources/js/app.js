require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from ';/routes';
const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).mount('#app');
