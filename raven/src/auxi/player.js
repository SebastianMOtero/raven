import { createTravelDeck } from './decks';
const MAX_HAND = 7;
export class Player {
    // drawLeft reset en cada turno
    constructor(name) {
        this.discardPileTravelCards = [];
        this.hand = [];
        this.drawsLeft = 3;
        this.position = 0;
        this.name = name;
        this.travelDeck = createTravelDeck();
    }
    draw() {
        //typecard loki - comun
        if (this.drawsLeft > 0) {
            if (this.travelDeck.cards.length === 0) {
                this.shuffle();
            }
            const newCardIndex = Math.floor(Math.random() * this.travelDeck.cards.length);
            this.hand.push(this.travelDeck.cards[newCardIndex]);
            this.travelDeck.cards.splice(newCardIndex, 1);
            this.drawsLeft--;
            if (this.hand.length > MAX_HAND) {
                this.discard(0); // TODO modify 0
            }
        }
    }
    discard(cardIndex) {
        // TODO choose one card;
        this.discardPileTravelCards.push(this.hand[cardIndex]);
        this.hand.splice(cardIndex, 1);
    }
    shuffle() {
        this.travelDeck.cards = this.discardPileTravelCards;
        this.discardPileTravelCards = [];
    }
    // move(forward = true) {
    //     forward ? this.position++ : this.position > 0 ? this.position-- : '';
    // }
}
