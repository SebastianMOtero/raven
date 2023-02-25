import { ILandsDeck, ILandsCard } from './ICard';
import { Player} from './player';
import { createLandDeck } from './decks';

const MAX_PATH = 16;

export class Game {
    player1: Player;
    player2: Player;
    landDeck: ILandsDeck;
    path: ILandsCard[] = [];

    constructor(player1: string, player2: string) {
        this.player1 = new Player(player1);
        this.player2 = new Player(player2);

        this.landDeck = createLandDeck();
        this.generatePath();
    }

    getNewCard = () => {
        const newCardIndex = Math.floor(Math.random() * this.landDeck.cards.length);
        this.path.push(this.landDeck.cards[newCardIndex]);
        this.landDeck.cards.splice(newCardIndex, 1)
    }

    checkLand = () => {
        const newCard = this.path[this.path.length - 1];
        const lastCard = this.path[this.path.length - 2];

        if (newCard.landOne === lastCard.landOne || newCard.landTwo === lastCard.landTwo) {
            if (newCard.landOne === lastCard.landTwo || newCard.landTwo === lastCard.landOne) {
                this.landDeck.cards.unshift(newCard)
                this.path.pop();
            } else {
                const aux = newCard.landOne
                newCard.landOne = newCard.landTwo;
                newCard.landTwo = aux;
            }
        }
    }
    
    generatePath() {
        this.getNewCard();

        while(this.path.length !== MAX_PATH) {
            this.getNewCard();
            this.checkLand();
        }
    }
}

//turno
// bajar carta hasta quedarme sin
// agarrar hasta 3 cartas

/*
menu 1
menu 2
menu 3
menu 4

menu 1 > menu 2 o menu 3
menu 2 > menu 3

loop
variable > menu

*/