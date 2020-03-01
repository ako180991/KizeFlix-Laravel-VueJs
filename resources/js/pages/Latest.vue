<template>
  <div class="allMovies" grid-list-xl>
    <div class="columns is-multiline">
      <div xs4 v-for="(item, index) in movies" :key="index" mb-2>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-5by3">
                <img :src="item.Poster" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title">{{item.Title}}</p>
                  <p class="subtitle is-6">{{item.Year}}</p>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <div class="justify-center">
                <div class="text-center">
                  <div class="cards">
                    <button class="mx-2" dark @click="singleMovie(item.imdbID)">
                      <span class="icon has-text-info">
                        <i class="fas fa-info-circle"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movieApi from "../services/MovieApi";


export default {
  data() {
    return {
      movies: [],
    };
  },

  mounted() {
    movieApi.fetchMovieCollection("superman").then(response => {
      this.movies = response.Search;
      console.log(this.movies);
    });
  },

  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    }
  }
};
</script>

<style scoped>
.card {
  background-color: transparent;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card-content {
  color: white;
  text-align: center;
  height: 100%;
}
.columns {
  display: flex;
  justify-content: space-around;
}
.column {
  color: white;
  background-color: transparent;
  width: 300px;
  justify-content: center;
}
.title {
  font-size: 100%;
  color: white;
}
.subtitle {
  margin-top: 10px!important;
}
.media-content {
  overflow: hidden;
}
.cards :hover {
  background-color: orange;
}
.allMovies {
  margin-bottom: 80px;
  justify-content: center;
}
.descriptionCard {
  font-family: "Quicksand";
  font-size: 1vw;
}
.justify-center {
  flex-flow: row-reverse;
}
.image {
  margin: auto;
}
button {
  float: right;
  background-color: transparent;
  border: none;
  size: 1vw;
}
.icon {
  font-size: 20px;
  color: rgb(184, 113, 8) !important;
}
.card-footer {
  justify-content: flex-end;
  border: none;
}
</style>