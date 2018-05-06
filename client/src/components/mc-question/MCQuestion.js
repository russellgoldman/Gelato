import React, { Component } from 'react';
import './MCQuestion.css';

class MCQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question_info: props.question,
      answers: props.answers
    }
  }

  monsterDamaged = (answer) => {
    this.props.onAnswerSelected(answer)
  }


  render() {
    return (
        <div className='question-container'>
            <div className='question-info'>
              <h2>Question {this.props.id + 1}</h2>
              <h1>{this.props.question}</h1>
            </div>
            {this.props.answers.map((answer, id) => 
            <button className='battle-option' key={id} onClick={() => this.monsterDamaged(answer)}>{answer}</button>)}
        </div>
    );
  }
}

export default MCQuestion;
