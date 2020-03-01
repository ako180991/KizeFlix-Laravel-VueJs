<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
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

  methods: {
      
  }
};
</script>

<style>
</style>