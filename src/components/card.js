import React, {Component} from 'react';





class Card extends Component {
    render() {
        return (
                <div id="Card" onClick={this.props.handleClick}>
                    <p style={{fontSize: '1.8em', color: this.props.color, border: '10px solid ' + this.props.color}}>{this.props.question}</p>
                </div>
        )
    }
}


export default Card;