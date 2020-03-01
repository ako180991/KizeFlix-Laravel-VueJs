<template>
  <v-flex xs12 mr-1 ml-1>
    <div class="description">
      <div class="posterContainer">
        <img class="poster" :src="singleMovie.Poster" aspect-ratio="2" />>
      </div>
      <div class="descriptionContainer">
        <div class="cardElement">
          <h2>{{singleMovie.Title}}-{{singleMovie.Year}}</h2>
          <p>{{ singleMovie.Plot}}</p>
          <h3>Actors:</h3>
          <p>{{singleMovie.Actors}}</p>
          <h4>Awards:</h4>
          {{singleMovie.Awards}}
          <p>Genre: {{singleMovie.Genre}}</p>
        </div>
        <div class="backButton">
          <button @click="back">Back</button>
        </div>
      </div>
    </div>
  </v-flex>
</template>

<script>
import movieApi from "../services/MovieApi";
export default {
  props: ["id"],

  data() {
    return {
      singleMovie: ""
    };
  },

  mounted() {
    movieApi

      .fetchSingleMovie(this.id)
      .then(response => {
        this.singleMovie = response;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.container {
  margin-bottom: 40px;
  justify-content: center;
  max-width: 100%;
  font-family: "Quicksand";
}
.cardElement {
  display: block;
  font-family: "Quicksand";
}
.descriptionContainer {
  width: 70%;
  color: white;
}
.description {
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: center
}

.posterContainer {
  margin: 15px;
}
.poster {
  width: 22vw;
  height: 60vh;
  margin-top: 10%;
}
.text-xs-center {
  text-align: center;
  margin-top: 10%;
}
.backButton {
  flex-flow: row-reverse;
  text-align: center;
  margin-top: 15%;
  color: orange;
  font-size: 2rem;
}
.ratingsButton {
  background-color: transparent !important;
  color: orange;
  font-size: large;
  font-family: "Quicksand";
}
.primary--text {
  color: orange !important;
}
@media (max-width: 860px) {
  .description {
    justify-content: center;
    display: inline-block;
    text-align: -webkit-center;
  }
  .poster {
    width: 80%;
    height: 60vh;
    margin-top: 10%;
  }
}
</style>