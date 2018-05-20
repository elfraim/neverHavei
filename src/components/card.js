import React, {Component} from 'react';
import {Animated} from "react-animated-css";

class Card extends Component {
    render() {
        return (   
                <div id="Card" onClick={this.props.handleClick}>
                    <p style={{fontSize: '1.8em'}}>{this.props.question}</p>
                </div>
        )
    }
}


export default Card;