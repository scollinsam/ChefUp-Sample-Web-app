import React, { Component } from 'react';
import ChefClass from './ChefClass';
import ChefUpNavBar from './ChefUpNavBar.js';
import IngredientList from './IngredientList.js';
import Instructions from './Instructions.js';
import './style.css';
import { strict } from 'assert';

class ChefApp extends Component {f
    constructor(props) {
        super(props);
        this.state = {
            chefclasses: ["src/videos/Fish_1.mp4", "src/videos/Meat_2.mp4", "src/videos/Dessert_1.mp4", "src/videos/Dessert_2.mp4", "src/videos/Veg_1.mp4", "src/videos/Veg_3.mp4"],
            selectedvideo: false,
            ingredients: [],
            instructions: []
        }
        this.ingredientdict = {
            'Fish_1': ['src/images/fish-icon.png', 'src/images/onion-icon.jpg', 'src/images/lettuce-icon.png'],
            'Fish_2': ['src/images/fish-icon.png', 'src/images/onion-icon.jpg', 'src/images/mango-icon.png', 'src/images/tomato-icon.png'],
            'Meat_1': ['src/images/chicken-icon.png', 'src/images/garlic-icon.png', 'src/images/lettuce-icon.png', 'src/images/cheese-icon.png'],
            'Dessert_2': ['src/images/chocolate-icon.png', 'src/images/salt-icon.png'],
            'Meat_2': ['src/images/sausage-icon.png', 'src/images/egg-icon.png', 'src/images/onion-icon.jpg'],
            'Dessert_1': ['src/images/sugar-icon.png', 'src/images/egg-icon.png','src/images/banana-icon.png'],
            'Veg_1': ['src/images/date-icon.png', 'src/images/mushroom-icon.png', 'src/images/cauliflower-icon.png'],
            'Veg_2': ['src/images/chickpea-icon.png', 'src/images/coconut-icon.jpg', 'src/images/turmeric-icon.png'],
            'Veg_3': ['src/images/mushroom-icon.png', 'src/images/carrot-icon.png', 'src/images/pasta-icon.png']
        }
        this.instructionsdict = {
            'Dessert_2': ['Pour boiling water over chocolate','Mix water into chocolate with whisk until chocolate thickens', 'Sprinkle salt on top'],
            'Dessert_1': ['Whisk eggs, corn starch, sugar, and milk into slurry','Mix blended nilla wafers with melted butter to make crust', 'Top with whipped cream and banana slices'],
            'Fish_1': ['Cook the fish for about 10 mins with turmeric and salt', 'Heat a pan with some oil, add 1 tsp of garlic, 1 tsp of ginger, 1 onion chopped and saute it', 'Add fish to sautee', 'Roll up fish balls and fry with bread crumbs'],
            'Fish_2': ['Cut fish into thin slices', 'Mix, sliced mango, tomato, onion, and spices into curry', 'Wrap fish and curry in lettuce and cook'],
            'Meat_1': ['Mix marinade and beat into paste', 'Marinade chicken and grill on high heat'],
            'Meat_2': ['Mix yeast, honey, and water to make dough', 'Bake bread for 1.5 hours', 'Sautee onions, peppers, sausage and broccoli rabe', 'Wrap filling into bread and cook'],
            'Veg_1': ['Sautee cauliflower with olive oil and pepper', 'Cook kelp noodles in boiling waters'],
            'Veg_2': ['Mix sliced garlic, onion, and ginger with olive oil', 'Add chickpeas, turmeric, and coconut milk'],
            'Veg_3': ['Sautee garlic, onions, celery and carrots on medium', 'Mix in tomatoes and bay leaves with vegetables', 'Cook pasta']
        }
        
        this.renderFishvids = this.renderFishvids.bind(this)
        this.renderMeatvids = this.renderMeatvids.bind(this)
        this.renderVegvids = this.renderVegvids.bind(this)
        this.renderDessertvids = this.renderDessertvids.bind(this)
        this.renderSelectedVids = this.renderSelectedVids.bind(this)
        this.renderHomevids = this.renderHomevids.bind(this)
    } 

    renderSelectedVids(e) {
        const selectedclassarray = []
        let selectedvidsrc = e.target.src
        selectedclassarray.push(selectedvidsrc)
        this.setState ({
            chefclasses: selectedclassarray,
            selectedvideo: true,
            ingredients: this.ingredientdict[selectedvidsrc.match(/(?<=\/)[^\/]*(?=\.[^\/]*$)/)],
            instructions: this.instructionsdict[selectedvidsrc.match(/(?<=\/)[^\/]*(?=\.[^\/]*$)/)]
        })
        console.log(this.state.instructions)
    }

    renderFishvids() {
        const fishvidarray = []
        for (let i = 1; i < 3; i++) {
            fishvidarray.push("src/videos/Fish_" + String(i) + ".mp4")
        }
        this.setState ({
            chefclasses: fishvidarray,
            selectedvideo: false
        })
    }
    renderMeatvids() {
        const meatvidarray = []
        for (let i = 1; i < 3; i++) {
            meatvidarray.push("src/videos/Meat_" + String(i) + ".mp4")
        }
        this.setState ({
            chefclasses: meatvidarray,
            selectedvideo: false
        })
    }
    renderVegvids() {
        const vegvidarray = []
        for (let i = 1; i < 4; i++) {
            vegvidarray.push("src/videos/Veg_" + String(i) + ".mp4")
        }
        this.setState ({
            chefclasses: vegvidarray,
            selectedvideo: false
        })
    }
    renderDessertvids() {
        const Dessertvidarray = []
        for (let i = 1; i < 3; i++) {
            Dessertvidarray.push("src/videos/Dessert_" + String(i) + ".mp4")
        }
        this.setState ({
            chefclasses: Dessertvidarray,
            selectedvideo: false
        })
    }
    renderHomevids() {
        let chefclasses = ["src/videos/Fish_1.mp4", "src/videos/Meat_2.mp4", "src/videos/Dessert_1.mp4", "src/videos/Dessert_2.mp4", "src/videos/Travel_Class_California.mp4", "src/videos/Travel_Class_Canada.mp4"]
        this.setState({
            chefclasses: chefclasses,
            selectedvideo: false
        })
    }
     render() { 
        return (
            <div id="app-container">
                <ChefUpNavBar handleFishvidRender={this.renderFishvids} handleMeatvidRender={this.renderMeatvids} handleVegvidRender={this.renderVegvids} handleDessertvidRender={this.renderDessertvids} handleHomevidsRender={this.renderHomevids}/>
                <div id = "chef-class-container">
                    <div>
                        {this.state.chefclasses.length < 2 ? <Instructions instructions = {this.state.instructions}/> : null}
                    </div>
                    {this.state.selectedvideo ? this.state.chefclasses.map(
                        x => <ChefClass key = {x.match(/(?<=\/)[^\/]*(?=\.[^\/]*$)/)} src = {x} handleClassSelect={this.renderSelectedVids} videoclass = 'selected' height = {562} width = {1000} />) : 
                        this.state.chefclasses.map(
                        x => <ChefClass key = {x.match(/(?<=\/)[^\/]*(?=\.[^\/]*$)/)} src = {x} handleClassSelect={this.renderSelectedVids} videoclass = 'player-container' height = {281} width = {500} />
                    )}
                    <div>
                        {this.state.chefclasses.length < 2 ? <IngredientList ingredients = {this.state.ingredients}/> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default ChefApp;
