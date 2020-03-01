require('./bootstrap');
window.Vue = require('vue');
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.defaults.headers.common = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',

};

Vue.config.productionTip = false
// axios.defaults.baseURL = 'https://www.omdbapi.com/?apikey=61d07e3&page=1&type=movie&'

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    // window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes';
const router = new VueRouter({
    routes
});

Vue.component('spinner', require('vue-simple-spinner'));

import App from './App.vue';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
