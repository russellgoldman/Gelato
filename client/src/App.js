import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentSideNav from './components/student-side-nav/StudentSideNav';
import BattleField from './components/battle-field/BattleField';
import MCQuestion from './components/mc-question/MCQuestion';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentAnswer: null,
      prevAnswer: null,
      attack: false,
      correctAnswer: 4,
    }
  }
  
  handleAnswer = (answer) => {
    const { prevAnswer, currentAnswer } = this.state;
    if (answer === prevAnswer) {
      this.setState({ attack: false });
    };

    this.setState({
      prevAnswer: currentAnswer,
      currentAnswer: answer,
      attack: true,
    });
  }
  
  // stopAttack = () => {
  //   console.log("stopped!");
  //   this.setState({hit: false});
  // }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className='screen-container'> 
          <StudentSideNav />
          <div className='battle-screen-container'>
            <BattleField onAnimationComplete={this.stopAttack} attack={this.state.attack} hit={this.state.currentAnswer === this.state.correctAnswer} />
            <MCQuestion onAnswerSelected={this.handleAnswer}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
