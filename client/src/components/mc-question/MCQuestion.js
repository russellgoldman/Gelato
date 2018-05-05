import React, { Component } from 'react';
import './MCQuestion.css';

class MCQuestion extends Component {
  render() {
    return (
        <div className='question-container'>
            <h3>Question #1</h3>
            <h3>What is 2x2?</h3>
            <button>Option 1</button>
            <button>Option 2</button>
            <button>Option 3</button>
            <button>Option 4</button>
            <div>
              <button className='answer-btn'>NEXT</button>
            </div>
        </div>
    );
  }
}

export default MCQuestion;
