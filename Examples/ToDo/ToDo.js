console.log("Do it To it!");
const app = Vue.createApp({
  data() {
    return {
      todoList: [
        {
          description: "stuff",
          important: false,
          complete: false,
        },
        {
          description: "new stuff",
          important: true,
          complete: true,
        },
      ],
      newItem: "",
      todoItem: {
        description: "",
        important: false,
        complete: false,
      },
    };
  },
  methods: {
    AddTodo() {
      console.log("add todo!");
      console.info(this.todoItem);
      this.todoList.push({
        description: this.newItem,
        important: false,
        complete: false,
      });
      this.newItem = "";
    },
  },
});
app.mount("#app");
