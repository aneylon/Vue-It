console.log("log it in");
const app = Vue.createApp({
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login it in.", this.username, this.password);
    },
  },
});
app.mount("#app");
