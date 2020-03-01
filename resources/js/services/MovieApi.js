import axios from 'axios'

const fetchMovie = axios.create({
    baseURL : 'https://www.omdbapi.com/?apikey=61d07e3&page=1&type=movie&'
})

export default {



    async fetchMovieCollection(name) {
        return await fetchMovie.get('&s=' + name)
            .then(response => {
                return response.data
            })
    },

    async fetchSingleMovie(id) {
        return await fetchMovie.get('&i=' + id)
            .then(response => {
                return response.data
            })
    },
}
