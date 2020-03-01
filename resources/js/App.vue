<template>
  <div class="app">
    <navbar :app="this" class="mb-2"></navbar>
    <spinner v-if="loading"></spinner>
    <div v-else-if="initiated">
      <router-view :app="this" />
    </div>
    <div class="footer">
      <div>
        <a href="https://github.com/ako180991" target="_blank">
          <img class="github" src="./components/images/github.png" width="50vw" />
        </a>
        <a href="https://www.linkedin.com/in/oaqodad/" target="_blank">
          <img class="linkedin" src="./components/images/linkedin.png" width="50vw" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {
      searchString: "",
      user: null,
      loading: false,
      initiated: false,
      req: axios.create({
        baseUrl: BASE_URL
      })
    };
  },
  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.loading = true;
      this.req.get("auth/init").then(response => {
        this.user = response.data.user;
        this.loading = false;
        this.initiated = true;
      });
    }
  },
  
};
</script>

<style scoped>
.app {
  top: 0;
  left: 0;
  background-size: cover;
  text-align: center;
  min-height: 100%;
  width: 100%;
  z-index: -999;
  background: #000000;
  background: -webkit-linear-gradient(to left, #434343, #000000);
  background: linear-gradient(to left, #434343, #000000);
}
.navContainer {
  height: 100px;
  background: #ba8b02;
  background: -webkit-linear-gradient(to right, #181818, #ba8b02);
  background: linear-gradient(to right, #181818, #ba8b02);
}
.content {
  margin-top: 10%;
}
.navTitle {
  color: orange;
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
.footer {
  background: #ba8b02;
  background: -webkit-linear-gradient(to right, #181818, #ba8b02);
  background: linear-gradient(to right, #181818, #ba8b02);
  text-align: center;
  height: 100%;
  width: 100%;
}
.github {
  margin: 15px;
}
.linkedin {
  margin: 15px;
}
input {
  width: 50%;
  background-color: transparent;
  color: white;
}
.input-container {
  text-align-last: center;
  padding: 20px;
}
.login {
  align-self: center;
  margin-right: 20px;
}
.navbar {
  background: #ba8b02;
  background: -webkit-linear-gradient(to right, #181818, #ba8b02);
  background: linear-gradient(to right, #181818, #ba8b02);
  justify-content: space-between;
}
@media (min-width: 0) {
  .flex.xs12 {
    flex-basis: 100%;
    flex-grow: 0;
    max-width: 20%;
  }
}
</style>