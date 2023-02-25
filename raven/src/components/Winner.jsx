import React from 'react';

export default class Winner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <h1>Winner menu</h1>
        
             <button onClick={() => this.props.updateFormState('BUTTON_CLOSE')}> CLOSE GAME </button>
            
            </>
        )

    }
}