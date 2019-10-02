import React, { Component } from 'react';
import './style.css';


class IngredientList extends Component {
    render() {
        var ingredients = this.props.ingredients.map(
            x => <img key = {x} src = {x}/>
        )
        return (
            <div id="ingredient-sidebar">
                <span id="ingredient-sidebar-header">Key Ingredients</span>
                {ingredients}
            </div>
        )
    }
}

export default IngredientList