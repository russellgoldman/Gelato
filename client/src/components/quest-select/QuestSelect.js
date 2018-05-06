import React, { Component } from 'react';
import './QuestSelect.css';

class QuestSelect extends Component {

  render() {
    return (
      <div className='class-container'>
        <h2>Choose your dungeon</h2>
        <ul className='class-list-container'>
          <li><button className='class-item'>01</button></li>
          <li><button className='class-item'>02</button></li>
          <li><button className='class-item'>03</button></li>
          <li><button className='class-item'>04</button></li>
        </ul>
      </div>
    );
  }
}

export default QuestSelect;
