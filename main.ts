// each player
// 1 raven
// 25 travel cards (5 cards, 5 types)
// 8 loki, (4 types, 2 cards)
// land cards 2 dobles, 3 mezclas por cada tipo
// 14 cartas 40 land cards

// bosque-bosque
// bosque-bosque
// 10-

// bosque-arena 3
// bosque-hielo 3

// 12
// 9
// 6
// 3
import { Game } from './raven/src/auxi/game';

const init = () => {
    const game = new Game('eva', 'sebas');
    
    game.player1.draw();
    game.player1.draw();
    game.player1.draw();

}

init()