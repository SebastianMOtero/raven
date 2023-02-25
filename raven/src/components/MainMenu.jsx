import React from 'react';

export default class MainMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <h1>Main menu</h1>
        
             <button onClick={() => this.props.updateFormState('BUTTON_NEWGAME')}> new game </button>
            <button onClick={() => this.props.updateFormState('BUTTON_TOPSCORES')}> top scores </button> 
            
            </>
        )

    }
}