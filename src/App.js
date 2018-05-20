import React, { Component } from 'react';
import Card from './components/card';
import {PlayButton} from './components/playButton';
import {Questions, TrapQuestions} from './data/questions';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        questions: Questions,
        roundNumber: 0,
        theQuestion: 'Each friend clicks on his turn. ' +
                     'If someone has done the following question ' +
                     'he takes a shot (Or sip! Depends how many rounds you want to go) ' +
                     'Beware of Trap missions!' 
    }


}

handleHelpClick = () => {
}

generateTrap = () => {
  const randIndex = Math.floor(Math.random() * 5);
  this.setState({
    theQuestion: TrapQuestions[randIndex]
  })
}

generateQuestion = () => {
    const randomTrap = Math.floor(Math.random() * 100); // Random Trap integer
    const index = Math.floor(Math.random() * Questions.length);
    if(randomTrap <= 35) {
      this.generateTrap()
    } else {
      this.setState({
        theQuestion: 'NEVER HAVE I EVER ' + Questions[index].toUpperCase(),
        roundNumber: this.state.roundNumber + 1
      })
      Questions.splice(index, 1);
    }
    
}

  render() {
    return (
      <div className="App">
        <h3 style={{color: 'white', gridColumn: '2 / 4', textShadow: '3px 2px black', justifySelf: 'center', alignSelf: 'start'}}>Never Have I Ever</h3>
        <p style={{color: 'white', textShadow: '3px 2px black', gridColumn: '1 / 2', gridRow: '1/2', justifySelf: 'center'}}>Round #{this.state.roundNumber}</p>
        <Card question={this.state.theQuestion} handleClick={this.generateQuestion}/>
        <PlayButton handleClick={this.generateQuestion}/>
      </div>
    );
  }
}

export default App;