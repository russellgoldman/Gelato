import React, { Component } from 'react';
import './QuestSelect.css';

class QuestSelect extends Component {

  render() {
    return (
      <div className='class-container'>
        <ul className='class-list-container'>
          <li className='class-item'>Quest 1</li>
          <li className='class-item'>Quest 2</li>
          <li className='class-item'>Quest 3</li>
          <li className='class-item'>Quest 4</li>
          <li className='class-item'>Quest 5</li>
          <li className='class-item'>Quest 6</li>
        </ul>
      </div>
    );
  }
}

export default QuestSelect;
