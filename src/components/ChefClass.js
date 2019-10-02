import React, { Component } from 'react';
import "C:/Users/sambc/Documents/ChefUp-REACT.JS/node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton, PlayToggle, ReplayControl,ControlBar, FullscreenToggle } from 'video-react';
import { Button } from 'reactstrap';
import './style.css';

class ChefClass extends Component {
    constructor(props, context) {
        super(props, context);
        this.state  = {
            isFullscreen: false,
        }
        this.triggerSelectClass = this.triggerSelectClass.bind(this)
        // this.play =this.play.bind(this)
    }
    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    triggerSelectClass(e) {
        console.log(e.target)
        console.log(e.target.className)
        if (e.target.className == 'video-react-video') {
            this.props.handleClassSelect(e)
        }
    }
    handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
          player: state
        });
    }
    
    render() {
        return (
            <div className = 'player-container' onClick={this.triggerSelectClass}>
                <Player
                    ref={player => {
                        this.player = player;
                    }}
                    src={this.props.src}
                    fluid={false}
                    muted 
                    width = {this.props.width}
                    height = {this.props.height}
                    aspectRatio = "16:9"
                >
                    <ControlBar
                     autoHide={false}>
                        <ReplayControl seconds={10}/>
                    </ControlBar>
                    <BigPlayButton position="center" onClick={this.triggerSelectClass}/>
                    <PlayToggle/>
                    
                </Player>
            </div>
        )
    }
}

export default ChefClass