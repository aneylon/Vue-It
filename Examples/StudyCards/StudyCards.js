const app = Vue.createApp({
  setup() {
    // this happens first, Data is not available.
  },
  beforeMount() {
    // this happens next, Data is available.
    this.knownCards = this.cards.slice();
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
        {
          question: "Fifth",
          answer: "Fifth",
          explain: "Fifth",
        },
        {
          question: "Sixth",
          answer: "Sixth",
          explain: "Sixth",
        },
      ],
      shuffledCards: [],
      knownCards: [],
      notSureCards: [],
      dontKnowCards: [],
      currentCard: 0,
      showAnswer: false,
      newQuestion: "",
      newAnswer: "",
      newExplain: "",
    };
  },
  methods: {
    AddCard() {
      this.shuffledCards.push({
        question: this.newQuestion,
        answer: this.newAnswer,
        explain: this.newExplain,
      });
      this.newQuestion = "";
      this.newAnswer = "";
      this.newExplain = "";
    },
    Know() {
      this.knownCards.push(this.shuffledCards[this.currentCard]);
      this.NextCard();
    },
    DontKnow() {
      this.dontKnowCards.push(this.shuffledCards[this.currentCard]);
      this.NextCard();
    },
    NotSure() {
      this.notSureCards.push(this.shuffledCards[this.currentCard]);
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
      // Shuffle each answer deck
      let shuffledKnownCards = this.randomize(this.knownCards);
      let shuffledNotSureCards = this.randomize(this.notSureCards);
      let shuffledDontKnowCards = this.randomize(this.dontKnowCards);
      // recombine in least known order and set as shuffledCards
      this.shuffledCards = [
        ...shuffledDontKnowCards,
        ...shuffledNotSureCards,
        ...shuffledKnownCards,
      ];
      // this.shuffledCards = this.shuffledCards.concat(shuffledDontKnowCards);
      // this.shuffledCards = this.shuffledCards.concat(shuffledNotSureCards);
      // this.shuffledCards = this.shuffledCards.concat(shuffledKnownCards);
      // reset answer decks
      this.knownCards = [];
      this.notSureCards = [];
      this.dontKnowCards = [];
    },
    toggleShowAnswer() {
      this.showAnswer = !this.showAnswer;
    },
    random(number) {
      return Math.floor(Math.random() * number);
    },
    randomize(cards) {
      let copiedCards = cards.slice();
      let deckLength = copiedCards.length;
      for (var i = 0; i < deckLength; i++) {
        let currentCard = copiedCards[i];
        let randomNumber = this.random(length);
        let shuffleCard = copiedCards[randomNumber];
        copiedCards[i] = shuffleCard;
        copiedCards[randomNumber] = currentCard;
      }
      return copiedCards;
    },
  },
});
app.mount("#app");
