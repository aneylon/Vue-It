console.log("let's study it!");
const app = Vue.createApp({
  setup() {
    // this happens first, Data is not available.
    // console.log("yo?");
  },
  beforeMount() {
    // this happens next, Data is available.
    // console.log("first things first");
    this.shuffledCards = this.cards.slice();
    this.Shuffle();
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
      knownCards: [],
      notSureCards: [],
      dontKnowCards: [],
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
      this.NextCard();
    },
    DontKnow() {
      console.log("Don't Know");
      this.NextCard();
    },
    NotSure() {
      console.log("Not Sure");
      this.NextCard();
    },
    NextCard() {
      if (this.currentCard === this.shuffledCards.length - 1) {
        this.Shuffle();
        this.currentCard = 0;
      } else {
        this.currentCard++;
      }
    },
    Shuffle() {
      console.log("shuffle");
      let length = this.shuffledCards.length;
      for (var i = 0; i < this.shuffledCards.length; i++) {
        let currentCard = this.shuffledCards[i];
        let randomNumber = this.random(length);
        let shuffleCard = this.shuffledCards[randomNumber];
        this.shuffledCards[i] = shuffleCard;
        this.shuffledCards[randomNumber] = currentCard;
      }
      // shuffle know
      // shuffle not sure
      // shuffle don't know
      // recombine in reverse order
    },
    toggleShowAnswer() {
      this.showAnswer = !this.showAnswer;
    },
    random(number) {
      return Math.floor(Math.random() * number);
    },
  },
});
app.mount("#app");
