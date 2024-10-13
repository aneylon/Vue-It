console.log("let's study it!");
const app = Vue.createApp({
  setup() {
    console.log("yo?");
  },
  beforeMount() {
    console.log("first things first");
    this.shuffledCards = this.cards.slice();
  },
  data() {
    return {
      cards: [
        {
          question: "First",
          answer: "First",
          explain: "First",
        },
        {
          question: "Second",
          answer: "Second",
          explain: "Second",
        },
        {
          question: "Third",
          answer: "Third",
          explain: "Third",
        },
        {
          question: "Fourth",
          answer: "Fourth",
          explain: "Fourth",
        },
      ],
      shuffledCards: [],
      currentCard: 0,
      showAnswer: false,
    };
  },
  methods: {
    AddCard() {
      console.log("Add card");
    },
    Know() {
      console.log("Know it!");
      this.Shuffle();
    },
    DontKnow() {
      console.log("Don't Know");
      this.Shuffle();
    },
    NotSure() {
      console.log("Not Sure");
      this.Shuffle();
    },
    Shuffle() {
      console.log(this.random(this.shuffledCards.length));
    },
    toggleShowAnswer() {
      this.showAnswer = !this.showAnswer;
    },
    random(number) {
      return Math.floor(Math.random() * number) + 1;
    },
  },
});
app.mount("#app");
