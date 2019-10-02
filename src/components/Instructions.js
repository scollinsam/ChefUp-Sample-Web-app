import React, { Component } from 'react';


class Instructions extends Component {
    render() {
        return (
            <div id="instruction-sidebar">
                <h4 id="instruction-header">Sample Instructions</h4>
                <ul id="instructions">
                    <li>Step 1</li>
                    <li>Step 2</li>
                    <li>Step 3</li>
                    <li>Step 4</li>
                </ul>
            </div>
        )
    }
}

export default Instructions