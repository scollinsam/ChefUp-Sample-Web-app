import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import './style.css';



class ChefUpNavBar extends Component {
    constructor(props) {
        super (props);
        this.triggerFishvidRender = this.triggerFishvidRender.bind(this)
        this.triggerMeatvidRender = this.triggerMeatvidRender.bind(this)
        this.triggerVegvidRender = this.triggerVegvidRender.bind(this)
        this.triggerDesertvidRender = this.triggerDesertvidRender.bind(this)
        this.triggerHomevidsRender = this.triggerHomevidsRender.bind(this)
    }
    triggerHomevidsRender() {
        this.props.handleHomevidsRender()
    }
    triggerFishvidRender() {
        this.props.handleFishvidRender()
    }
    triggerMeatvidRender() {
        this.props.handleMeatvidRender()
    }
    triggerVegvidRender() {
        this.props.handleVegvidRender()
    }
    triggerDesertvidRender() {
        this.props.handleDesertvidRender()
    }

    render () {
        return (
                    <Navbar bg="light" expand="lg">
             <Navbar.Brand>ChefUp!</Navbar.Brand>
             <img src="src/images/ChefUp-logo.png" id="logo"></img>
            <Navbar.Collapse id="basic-navbar-nav">
            <   img src="src/images/home-icon.png" id="home-btn" onClick={this.triggerHomevidsRender}></img>
                <button onClick={this.triggerFishvidRender}>Fish</button>
                <button onClick={this.triggerMeatvidRender}>Meat</button>
                <button onClick={this.triggerVegvidRender}>Vegetarian</button>
                <button onClick={this.triggerDesertvidRender}>Desert</button>
             </Navbar.Collapse>
            </Navbar>           
        )
    }
}

export default ChefUpNavBar