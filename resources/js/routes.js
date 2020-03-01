import Register from './pages/Register';
import Login from './pages/Login';
import Latest from './pages/Latest';
import Movie from './pages/Movie';
import Search from './pages/Search';



export default [

   
    {

        path: '/register',
        component: Register,
        name: 'register'
    },

    {

        path: '/login',
        component: Login,
        name: 'login'
    },

    {
        path: '/',
        name: 'Latest',
        component: Latest
    },

    {
        path: '/movie/:id',
        name: 'Movie',
        props: true,
        component: Movie
    },
    {
        path: '/search/:name',
        name: 'Search',
        props: true,
        component: Search
    },

];
