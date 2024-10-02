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
      x: 0,
      y: 0,
      books: [
        { author: "one", title: "ONE", isFav: true },
        { author: "two", title: "TWO", isFav: false },
        { author: "three", title: "THREE", isFav: true },
      ],
      url: "http://www.thenetninja.co.uk",
    };
  },
  methods: {
    toggleFav(book, id) {
      // this.books[id].isFav = !this.books[id].isFav;
      book.isFav = !book.isFav;
    },
    changeTitle(title) {
      console.log("click it");
      this.title = "other stuff";
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(event, data) {
      console.log(event.type);
      if (data) console.log({ data });
    },
    handleMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});
app.mount("#app");
