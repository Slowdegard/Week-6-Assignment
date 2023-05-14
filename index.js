console.log('The war began!');

// I began with making Card a class and using suit and rank as the parameters.
class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}

// then I added the deck and pushed all the cards into the deck.
class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }

  createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = [
      'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'
    ];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  // This part took me a while. But thankfully i figured out a solution thanks to the help of google!
  shuffle() {
    const cards = this.cards;
    let currentIndex = cards.length;

    while (currentIndex > 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      const temp = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temp;
    }
  }

  dealCard() {
    return this.cards.pop();
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
  }

  playCard() {
    return this.hand.pop();
  }
}


// Now to the fun stuff! 
class Game {
  constructor() {
    this.deck = new Deck();
    this.player1 = new Player('Player 1');
    this.player2 = new Player('Player 2');
  }
  //shuffle and deal the cards the the players
  dealCards() {
    this.deck.shuffle();

    while (this.deck.cards.length > 0) {
      this.player1.hand.push(this.deck.dealCard());
      this.player2.hand.push(this.deck.dealCard());
    }
  }

  //Creating Confrontation
  playTurn() {
    const card1 = this.player1.playCard();
    const card2 = this.player2.playCard();

    if (card1.rank > card2.rank) {
      this.player1.score++;
    } else if (card1.rank < card2.rank) {
      this.player2.score++;
    }
  }
  // this part just orders all of my code to output the scores of both the players and the winner.
  playGame() {
    this.dealCards();

    while (this.player1.hand.length > 0) {
      this.playTurn();
    }

    this.displayScore();
    this.displayWinner();
  }

  displayScore() {
    console.log(`Player 1 score: ${this.player1.score}`);
    console.log(`Player 2 score: ${this.player2.score}`);
  }

  displayWinner() {
    if (this.player1.score > this.player2.score) {
      console.log('Player 1 wins!');
    } else if (this.player1.score < this.player2.score) {
      console.log('Player 2 wins!');
    } else {
      console.log('It\'s a tie!');
    }
  }
}


const game = new Game();
game.playGame();
console.log('The war has been fought! Please let this be the last.');