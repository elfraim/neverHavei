import React, { Component } from 'react';
import Card from './components/card';
import {HelpButton} from './components/helpButton';
import {Questions, TrapQuestions} from './data/questions';
import {AddQuestion} from './components/addQuestion';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        questions: Questions,
        roundNumber: 0,
        theQuestion: 'Anyone who at some point in their lives has done the action, must drink, Click HELP for more varations',
        animate: 'bounceIn',
        textColor: 'white'
    }
}


generateTrap = () => {
  const randIndex = Math.floor(Math.random() * 5);
  this.setState({
    theQuestion: TrapQuestions[randIndex],
    textColor: 'orange'
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
        roundNumber: this.state.roundNumber + 1,
        animate: 'bounceIn',
        textColor: 'white'
      })
      Questions.splice(index, 1);
    }
}

addQuestion = (event) => {
  
}

  render() {
    return (
      <div className="App">
        <a href="http://elfraiman.com" id="title">Never have I ever</a>
        <p style={{color: 'white', gridColumn: '1 / 2', gridRow: '1/2', justifySelf: 'center', width: '20%'}}>Round #{this.state.roundNumber}</p>
        <Card question={this.state.theQuestion}
          handleClick={this.generateQuestion}
          animate={this.state.animate}
          color={this.state.textColor} />
        <HelpButton handleClick={this.generateQuestion}
          animate={this.state.animate} />
          <AddQuestion/>
      </div>
    );
  }
}

export default App;
