import React, {Component} from 'react';


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