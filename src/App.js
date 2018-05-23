import React, { Component } from 'react';
import Card from './components/card';
import {HelpButton} from './components/helpButton';
import {Questions, TrapQuestions} from './data/questions';
import './App.css';

const titleStyle = {
  color:      'white',
  gridColumn: '2/4',
  justifySelf: 'center',
  alignSelf: 'center',
  fontSize: '25px',
  textDecoration: 'none'
}
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        questions: Questions,
        roundNumber: 0,
        theQuestion: 'Each friend clicks on his turn. ' +
                     'If someone has done the following question ' +
                     'he takes a shot (Or sip! Depends how many rounds you want to go) ' +
                     'Beware of Trap missions!' ,
        animate: 'bounceIn'
    }
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
        roundNumber: this.state.roundNumber + 1,
        animate: 'bounceIn'
      })
      Questions.splice(index, 1);
    }
}

  render() {
    return (
      <div className="App">
        <a style={titleStyle} href="http://elfraiman.com">Never Have I Ever</a>
        <p style={{color: 'white', gridColumn: '1 / 2', gridRow: '1/2', justifySelf: 'center'}}>Round #{this.state.roundNumber}</p>
        <Card question={this.state.theQuestion} handleClick={this.generateQuestion} animate={this.state.animate}/>
        <HelpButton handleClick={this.generateQuestion} animate={this.state.animate}/>
      </div>
    );
  }
}

export default App;
