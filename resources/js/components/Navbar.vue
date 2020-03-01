<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/">KizeFlix</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{ app.user ? app.user.name : 'Account'}}</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div v-if="!app.user">
                <router-link to="/login" class="dropdown-item">Login</router-link>
                <router-link to="/register" class="dropdown-item">Register</router-link>
              </div>
              <a v-else @click="logout" href="javascript:;" class="dropdown-item">Logout</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="input-container">
        <input class="input is-warning" placeholder="Search" v-model="searchString" />
        <button text :disabled="!dataAvailable" @click="searchMovie">
          <span class="search">Search</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: ["app"],
  data() {
    return {
      searchString: ""
    };
  },

  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchString);
      this.searchString = "";
    },
    logout() {
      this.app.req.post("auth/logout").then(() => {
        this.app.user = null;
        this.$router.push("/login");
      });
    }
  },
  computed: {
    dataAvailable() {
      return this.searchString !== null && this.searchString !== "";
    }
  }
};
</script>

<style>
.container {
  margin: 0;
  padding: 0;
  max-width: 100%;
}
.navbar-nav {
  margin-right: 300%;
}
.navbar {
  background: #ba8b02;
  background: -webkit-linear-gradient(to right, #181818, #ba8b02);
  background: linear-gradient(to right, #181818, #ba8b02);
  margin-bottom: 50px;
}
.navbar-brand {
  color: orange !important;
  font-size: 5vw;
  margin-top: 20px;
  margin-left: 40px;
  font-family: "Bebas Neue", cursive;
}
.search {
  font-size: 2vw;
  margin: 10px;
  font-family: "Quicksand", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
.input-container {
  text-align-last: center;
  padding: 20px;
}
</style>