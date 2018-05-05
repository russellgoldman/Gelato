import React, { Component } from 'react';
import './SideQuestSelect.css';

class SideQuestSelect extends Component {

  render() {
    return (
      <div className='side-quest-container'>
        <ul className='side-quest-list-container'>
          <li className='side-quest-item'>Side Quest 1</li>
          <li className='side-quest-item'>Side Quest 2</li>
          <li className='side-quest-item'>Side Quest 3</li>
        </ul>
      </div>
    );
  }
}

export default SideQuestSelect;
