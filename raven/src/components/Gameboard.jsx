import React, { useState } from 'react';
import { Game }  from '../auxi/game';

const viewStates = {
    setup: 'setup',
    playerTurn: 'playerTurn',
    winner: 'winner',
    finish: 'finish'
};

const transitions = {
    [viewStates.setup]: {
        'startGame': viewStates.playerTurn,
    },
    [viewStates.playerTurn]: {
        'playerTurn': viewStates.playerTurn,
        'winner': viewStates.winner,
        'finish': viewStates.finish
    },
    [viewStates.winner]: {
        'finish': viewStates.finish
    }
}

const setup = (props) => {
    const g = new Game(props.playersState.playerBlackRaven, props.playersState.playerWhiteRaven);
    console.log(g)
}

export default function Gameboard(props) {
    console.log(props)
    const [currentGameState, setCurrentGameState] = useState(viewStates.setup);
    setup(props)
    return (
        <>
        <h1>Gameboard</h1>

        <button onClick={() => this.props.updateFormState('BUTTON_FINISH')}> FINISH game </button>
        <button onClick={() => this.props.updateFormState('BUTTON_CLOSE')}> CLOSE GAME </button>

    </>
    )
}

// export default class Gameboard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentGameState: {},
//         }
//     }
    
//     render() {
//         const [currentGameState, setCurrentGameState] = useState(viewStates.setup);

//         return (
//             <>
//                 <h1>Gameboard</h1>

//                 <button onClick={() => this.props.updateFormState('BUTTON_FINISH')}> FINISH game </button>
//                 <button onClick={() => this.props.updateFormState('BUTTON_CLOSE')}> CLOSE GAME </button>

//             </>
//         )

//     }
// }