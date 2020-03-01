<template>
  <div class="movieSelect" grid-list-xl>
    <div class="columns is-multiline">
      <v-flex xs4 v-for="(item, index) in movieResponse" :key="index" mb-2>
        <div class="allCards">
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
      </v-flex>
    </div>
  </div>
</template>

<script>
import movieApi from "../services/MovieApi";

export default {
  props: ["name"],
  data() {
    return {
      movieResponse: []
    };
  },
  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    },

    fetchResult(value) {
      movieApi
        .fetchMovieCollection(value)
        .then(response => {
          this.movieResponse = response.Search;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.fetchResult(this.name);
  },
  watch: {
    name(value) {
      this.fetchResult(value);
    }
  }
};
</script>

<style scoped>
.allCards {
  color: white;
  background-color: transparent;
  width: 20;
}
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
.descriptionCard {
  font-family: "Quicksand";
  font-size: 1vw;
}

.justify-center {
  flex-flow: row-reverse;
}
.cards :hover {
  background-color: orange;
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
  size: 2rem;
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