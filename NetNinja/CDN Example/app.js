console.log("app!");

const app = Vue.createApp({
  //   template: `<h1>{{stuff}}</h1>`,
  data() {
    return {
      showBooks: true,
      stuff: "things2",
      title: "one",
      author: "person",
      age: 34,
    };
  },
  methods: {
    changeTitle(title) {
      console.log("click it");
      this.title = "other stuff";
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});
app.mount("#app");
