import React, { Component } from 'react';
import './MCQuestion.css';

class MCQuestion extends Component {
  render() {
    return (
        <div className='question-container'>
            <div className='question-info'>
              <h3>Question #1</h3>
              <h1>What is 2x2 ?</h1>
            </div>
            <button>8</button>
            <button>4</button>
            <button>2</button>
            <button>10</button>
            <div>
              <button className='answer-btn'>NEXT</button>
            </div>
        </div>
    );
  }
}

export default MCQuestion;
