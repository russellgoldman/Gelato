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
      prevAnswer: null,
      attack: false,
      correctAnswer: false,
      questions: [
        {
          id: 0,
          question: "2x2",
          answers: [
            1,
            4,
            3,
            5
          ],
          correctAnswer: 4,
        },
        {
          id: 1,
          question: "2x4",
          answers: [
            1,
            2,
            8,
            5
          ],
          correctAnswer: 8,
        }
      ],
      currentQuestionId: 0,
    }
  }
  
  handleAnswer = (answer) => {
    const { questions, currentQuestionId, prevAnswer } = this.state;
    const question = questions[currentQuestionId];
    
    if (answer === prevAnswer) {
      this.setState({ attack: false });
    };

    this.setState({
      prevAnswer: answer,
      correctAnswer: answer === question.correctAnswer,
      attack: true,
    });
  }
  
  stopAttack = () => {
    // set new question vars based on next question
    //stop animation and re render question UI
    console.log("stopped!");
    this.setState({
      prevAnswer: null,
      attack: false,
      correctAnswer: false,
       currentQuestionId: this.state.currentQuestionId+1
    });
 }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className='screen-container'> 
          <StudentSideNav />
          <div className='battle-screen-container'>
            <BattleField onAnimationComplete={this.stopAttack} attack={this.state.attack} hit={this.state.correctAnswer} />
            <MCQuestion {...this.state.questions[this.state.currentQuestionId]} onAnswerSelected={this.handleAnswer}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
