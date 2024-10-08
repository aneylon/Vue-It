const app = Vue.createApp({
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    signup() {
      console.log("sign it up!", this.username, this.password);
    },
  },
});
app.mount("#app");
