import logo from './logo.svg';
import { useState } from 'react';
import  MainMenu  from './components/MainMenu';
import  InputPlayersMenu  from './components/InputPlayersMenu';
import  Gameboard  from './components/Gameboard';
import  Winner  from './components/Winner';

import './App.css';

const viewStates = {
  menu: 'menu',
  inputPlayersMenu: 'inputPlayersMenu',
  gameboard: 'gameboard',
  winner: 'winner'
};

const transitions = {
  [viewStates.menu]: {
    'BUTTON_NEWGAME': viewStates.inputPlayersMenu,
    'BUTTON_TOPSCORES': viewStates.winner
  },
  [viewStates.inputPlayersMenu]: {
    'BUTTON_STARTGAME': viewStates.gameboard
  },
  [viewStates.gameboard]: {
    'BUTTON_FINISH': viewStates.winner,
    'BUTTON_CLOSE': viewStates.menu
  },
  [viewStates.winner]: {
    'BUTTON_CLOSE': viewStates.menu
  }
}





function App() {
  const [currentState, setCurrentState] = useState(viewStates.menu);
  const [playersState, setPlayersState] = useState();
  
  function updateFormState(action) {
    setCurrentState(currentState => transition(currentState, action));
  }

  const menu = {
    [viewStates.menu]: <MainMenu updateFormState={updateFormState} />,
    [viewStates.inputPlayersMenu]: <InputPlayersMenu updateFormState={updateFormState} setPlayersState={setPlayersState}/>,
    [viewStates.gameboard]: <Gameboard updateFormState={updateFormState} playersState={playersState}/>,
    [viewStates.winner]: <Winner updateFormState={updateFormState}/>,
  }
  
  function transition(currentState, action) {
    const nextState = transitions[currentState][action];
    return nextState || currentState;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{currentState}</p>
        <p>
          {menu[currentState]}
        </p>
      </header>
    </div>
  );
}

export default App;
