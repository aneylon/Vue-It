console.log("App!");
const app = Vue.createApp({
  //   template: "<h2>Things!</h2>",
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
  data() {
    return {
      url: "http://netninja.dev",
      books: [
        {
          id: 1,
          title: "one",
          author: "First",
          img: "assets/1.jpg",
          isFav: false,
        },
        {
          id: 2,
          title: "two",
          author: "Second",
          img: "assets/2.jpg",
          isFav: true,
        },
        {
          id: 3,
          title: "three",
          author: "Third",
          img: "assets/3.jpg",
          isFav: false,
        },
      ],
      showBooks: true,
      title: "stuff",
      author: "name",
      age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleFav(book) {
      //   this.books[bookId].isFav = !this.books[bookId].isFav;
      book.isFav = !book.isFav;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    addItUp() {
      this.age++;
    },
    countItDown() {
      this.age--;
    },
    handleEvent(event) {
      console.log({ event });
    },
    handleMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});
app.mount("#app");
