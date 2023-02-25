import React from 'react';

export default class InputPlayersMenu extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            players: {},
        }
    }

    handleStartGame(e) {
        e.preventDefault()
        console.log(this.state.players)
        if (!this.state.players['playerWhiteRaven'] || !this.state.players['playerBlackRaven']) {
            console.log('chequealo pibe')
            return;
        }
        this.props.setPlayersState(this.state.players)
        this.props.updateFormState('BUTTON_STARTGAME')
    }

    handleInputChange({target: { name, value}}) {
        this.state.players[name] = value;
    }

    render() {
        return(
            <>
            <h1>InputPlayersMenu</h1>
        
        <form>
                CUERVO BLANCO
                <input name="playerWhiteRaven" type="text" onChange={(e) => this.handleInputChange(e)} required/>
                <br/>
                CUERVO NEGRO
                <input name="playerBlackRaven" type="text" onChange={(e) => this.handleInputChange(e)} required/>
                <br/>
             <button type="submit" onClick={(e) => this.handleStartGame(e)}> START GAME </button>
        </form>
            
            </>
        )

    }
}