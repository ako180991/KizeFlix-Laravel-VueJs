import axios from 'axios'

export default {

  async fetchMovieCollection (name) {
    return await axios.get('&s=' + name)
      .then(response => {
        return response.data
      })
  },

  async fetchSingleMovie (id) {
    return await axios.get('&i=' + id)
      .then(response => {
        return response.data
      })
  },
}
