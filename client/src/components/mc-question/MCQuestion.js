import React, { Component } from 'react';
import './MCQuestion.css';

class MCQuestion extends Component {
  constructor(props) {
    super(props);
  }

  monsterDamaged = (answer) => {
    this.props.onAnswerSelected(answer)
  }

  render() {
    return (
        <div className='question-container'>
            <div className='question-info'>
              <h3>Question #1</h3>
              <h1>What is 2x2 ?</h1>
            </div>
            <button onClick={() => this.monsterDamaged(8)}>8</button>
            <button onClick={() => this.monsterDamaged(4)}>4</button>
            <button onClick={() => this.monsterDamaged(2)}>2</button>
            <button onClick={() => this.monsterDamaged(10)}>10</button>
        </div>
    );
  }
}

export default MCQuestion;
