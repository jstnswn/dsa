class Deck {
    constructor() {
        this.count = 52
        this.cards = [];
        this.initCards();
    }

    initCards() {
        const numbers = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
        const suites = ['diamon', 'hearts', 'spades', 'clubs'];
        suites.forEach(suit => {
            numbers.forEach(number => {
                this.cards.push([number, suit]);
            })
        })
    }

    dealCards(num) {
        const cards = [];
        for (let i = 0; i < num; i++) {
            const randIdx = Math.floor(Math.random() * (this.count));
            const card = this.cards.splice(randIdx, 1)[0];
            cards.push(card);
            this.count--;
        }
        return cards;
    }
}

class BlackJack extends Deck {
    constructor() {
        super();
        this.playerHand = this.dealCards(2);
        this.playerScore = this.getScore()
        // this.dealerHand = this.dealCards(2);
        // this.dealerScore = BlackJack.getScore(this.dealerHand)
    }

    getScore() {
        const faceCards = {
            'jack': 10,
            'queen': 10,
            'king': 10,
            'ace': 11,
            'aceLow': 1,
            'aceHigh': 11
        }
        let aces = 0;
        let total = 0;
        this.playerHand.forEach(card => {
            if (card[0] === 'ace') {
                aces++;
                total += 11;
            }
            else if (typeof card[0] === 'string') total += faceCards[card[0]];
            else total += card[0];
        })

        if (aces) {
            for (let i = 0; i < aces; i++) {
                if (total > 21) {
                    total -= 10;
                }
            }
        }

        return BlackJack.checkBust(total);
    }

    static checkBust(score) {
        if (score > 21) return 'bust';
        else return score;
    }

    hit() {
        // console.log(this.playerHand)
        this.playerHand = [...this.playerHand, ...this.dealCards(1)];
        this.playerScore = this.getScore();
        // console.log(this.playerHand)
    }
}




const deck = new Deck();
// console.log(deck.cards);
// const hand = deck.dealCards(7);
// console.log('hand', hand);
// console.log('deck', deck)

const bj = new BlackJack();
// const playerHand = bj.playerHand;
// const dealerHand = bj.dealerHand;
console.log('hands', bj.playerHand)
console.log('score', bj.playerScore);
bj.hit();
console.log('hands', bj.playerHand)
console.log('score', bj.playerScore);
bj.hit();
console.log('hands', bj.playerHand)
console.log('score', bj.playerScore);

// const hand = bj.dealCards(2);
// console.log('hand', hand)
// console.log('score', BlackJack.getScore(hand));


class Card {
    constructor(suit, number) {
        this.suit = suit;
        this.number = number;
    }
}
