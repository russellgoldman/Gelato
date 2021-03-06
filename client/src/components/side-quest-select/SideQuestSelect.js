import React, { Component } from 'react';
import './SideQuestSelect.css';

class SideQuestSelect extends Component {

  render() {
    return (
      <div className='side-quest-container'>
        <div>
          <h3>Available Side Quests</h3>
        </div>
        <ul className='side-quest-list-container'>
          <li><button className='side-quest-item'>01</button></li>
          <li><button className='side-quest-item'>02</button></li>
          <li><button className='side-quest-item'>03</button></li>
        </ul>
      </div>
    );
  }
}

export default SideQuestSelect;
