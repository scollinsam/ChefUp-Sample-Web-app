import React, { Component } from 'react';


class Instructions extends Component {
    render() {
        var instructions = this.props.instructions.map(
            x => <li key = {x} className="instruction-step">{x}</li>
        )
        return (
            <div id="instruction-sidebar">
                <h4 id="instruction-header">Sample Instructions</h4>
                <ul id="instructions">
                    {instructions}
                </ul>
            </div>
        )
    }
}

export default Instructions