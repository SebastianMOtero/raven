const viewStates = {
    menu: 'menu',
    inputPlayersMenu: 'inputPlayersMenu',
    gameboard: 'gameboard',
    winner: 'winner'
};

const transitions = {
  [viewStates.menu]: {
    BUTTON_NEWGAME: viewStates.inputPlayersMenu,
    BUTTON_TOPSCORES: viewStates.winner
  },
  [viewStates.inputPlayersMenu]: {
    BUTTON_STARTGAME: viewStates.gameboard
  },
  [viewStates.gameboard]: {
    BUTTON_FINISH: viewStates.winner,
    BUTTON_CLOSE: viewStates.menu
  },
  [viewStates.winner]: {
    BUTTON_CLOSE: viewStates.menu
  }
}

function transition(currentState, action){
  const nextState = transitions[currentState][action];
  return nextState || currentState;
}

const initialStep = Step.MainMenu

const [currentStep, setCurrentStep] = useState<number>(initialStep);

const handleNextStep = () => {
    
}
<>
  <div className="stepsContainer">
    <Steps current={currentStep} labelPlacement="vertical" size="small">
      {Object.keys(Step).map(s => (
        <Steps.Step title={s} />
      ))}
    </Steps>
  </div>

  <FormPart
    onPrevious={() => {
      setCurrentStep(prev => prev - 1);
    }}
    onNext={() => {
      setCurrentStep(prev => prev + 1);
    }}
      >
    {Views[currentStep]}
  </FormPart>
</>