import React, { Component } from 'react';
import './QuestSelect.css';

class QuestSelect extends Component {

  render() {
    return (
      <div className='class-container'>
        <ul className='class-list-container'>
          <li><button className='class-item'>Quest 1</button></li>
          <li><button className='class-item'>Quest 2</button></li>
          <li><button className='class-item'>Quest 3</button></li>
          <li><button className='class-item'>Quest 4</button></li>
        </ul>
      </div>
    );
  }
}

export default QuestSelect;
