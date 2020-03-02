<template>
  <div class="container">
    <h2 class="login-title">Login</h2>
    <div class="card-body">
      <div class="col-md-6 offset-md-3">
        <form v-on:submit.prevent="onSubmit">
          <div class="alert alert-danger" v-if="errors.length">
            <ul class="mb-0">
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" placeholder="Username..." v-model="username" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password..."
              v-model="password"
            />
          </div>
          <button class="btn">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: ["app"],
  data() {
    return {
      username: "",
      password: "",
      errors: []
    };
  },

  methods: {
    onSubmit() {
      this.errors = [];

      if (!this.username) {
        this.errors.push("Username is required.");
      }

      if (!this.password) {
        this.errors.push("Password is required.");
      }

      if (!this.errors.length) {
        const data = {
          username: this.username,
          password: this.password
        };

        this.app.req
          .post("auth/login", data)
          .then(response => {
            this.app.user = response.data;
            this.$router.push("/");
          })
          .catch(error => {
            this.errors.push(error.response.data.error);
          });
      }
    }
  }
};
</script>

<style scoped>
label {
  color: white;
  font-family: "Quicksand", Tahoma, Geneva, Verdana, sans-serif;
}
button {
  background-color: transparent;
  border-color: orange;
  color: white;
}
.btn:hover {
  color: orange !important;
}
.login-title {
  color: orange !important;
  font-size: 3vw;
  margin-top: 20px;
  font-family: "Bebas Neue", cursive;
}
</style>