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
            chefclasses: ["src/videos/Fish_1.mp4", "src/videos/Meat_2.mp4", "src/videos/Desert_1.mp4", "src/videos/Desert_2.mp4", "src/videos/Veg_1.mp4", "src/videos/Veg_3.mp4"],
            selectedvideo: false,
            ingredients: []
        }
        this.ingredientdict = {
            'Fish_1': ['src/images/fish-icon.png', 'src/images/onion-icon.jpg', 'src/images/lettuce-icon.png'],
            'Fish_2': ['src/images/fish-icon.png', 'src/images/onion-icon.jpg', 'src/images/mango-icon.png', 'src/images/tomato-icon.png'],
            'Meat_1': ['src/images/chicken-icon.png', 'src/images/garlic-icon.png', 'src/images/lettuce-icon.png', 'src/images/cheese-icon.png'],
            'Desert_2': ['src/images/chocolate-icon.png', 'src/images/salt-icon.png'],
            'Meat_2': ['src/images/sausage-icon.png', 'src/images/egg-icon.png', 'src/images/onion-icon.jpg'],
            'Desert_1': ['src/images/sugar-icon.png', 'src/images/egg-icon.png','src/images/banana-icon.png'],
            'Veg_1': ['src/images/date-icon.png', 'src/images/mushroom-icon.png', 'src/images/cauliflower-icon.png'],
            'Veg_2': ['src/images/chickpea-icon.png', 'src/images/coconut-icon.png', 'src/images/turmeric-icon.png'],
            'Veg_3': ['src/images/mushroom-icon.png', 'src/images/carrot-icon.png', 'src/images/pasta-icon.png']
        }
        this.renderFishvids = this.renderFishvids.bind(this)
        this.renderMeatvids = this.renderMeatvids.bind(this)
        this.renderVegvids = this.renderVegvids.bind(this)
        this.renderDesertvids = this.renderDesertvids.bind(this)
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
            ingredients: this.ingredientdict[selectedvidsrc.match(/(?<=\/)[^\/]*(?=\.[^\/]*$)/)]
        })
        console.log(this.state.ingredients)
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
    renderDesertvids() {
        const desertvidarray = []
        for (let i = 1; i < 3; i++) {
            desertvidarray.push("src/videos/Desert_" + String(i) + ".mp4")
        }
        this.setState ({
            chefclasses: desertvidarray,
            selectedvideo: false
        })
    }
    renderHomevids() {
        let chefclasses = ["src/videos/Fish_1.mp4", "src/videos/Meat_2.mp4", "src/videos/Desert_1.mp4", "src/videos/Desert_2.mp4", "src/videos/Travel_Class_California.mp4", "src/videos/Travel_Class_Canada.mp4"]
        this.setState({
            chefclasses: chefclasses,
            selectedvideo: false
        })
    }
     render() { 
        return (
            <div id="app-container">
                <ChefUpNavBar handleFishvidRender={this.renderFishvids} handleMeatvidRender={this.renderMeatvids} handleVegvidRender={this.renderVegvids} handleDesertvidRender={this.renderDesertvids} handleHomevidsRender={this.renderHomevids}/>
                <div id = "chef-class-container">
                    <div>
                        {this.state.chefclasses.length < 2 ? <Instructions/> : null}
                    </div>
                    {this.state.selectedvideo ? this.state.chefclasses.map(
                        x => <ChefClass key = {x.match(/(?<=\/)[^\/]*(?=\.[^\/]*$)/)} src = {x} handleClassSelect={this.renderSelectedVids} height = {562} width = {1000} />) : 
                        this.state.chefclasses.map(
                        x => <ChefClass key = {x.match(/(?<=\/)[^\/]*(?=\.[^\/]*$)/)} src = {x} handleClassSelect={this.renderSelectedVids} height = {281} width = {500} />
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
