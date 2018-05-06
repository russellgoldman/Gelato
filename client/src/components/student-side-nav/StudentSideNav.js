import React, { Component } from 'react';
import './student-side-nav.css';
import coins from './coin.png';
import scroll from './scroll.png';

class  StudentSideNav extends Component {

  render() {
    return (
      <div className='container'>
        <div className='stat-item'>
          <div className='profile-box'></div>
          <div className='profile-name'><h5>Alice Liddel</h5></div>
        </div>
        <div className='brief-stats'>
          <div className='single-stat'>
            <div className='circle'>
              <img className='coin-circle' src={coins}></img>
            </div>
            <div className='rectangle'><h3>5000c</h3></div>
          </div>
          <div className='single-stat'>
            <div className='circle'>
              <img className='scroll-circle' src={scroll}></img>
            </div>
            <div className='rectangle'><h5>5 Quests Complete</h5></div>
          </div>
          <div className='extra-info'>
            <h3 className='level-stat'>Curent Level: 1</h3>
            <h3 className='map-stat'>Map: Division</h3>
            <h3 className='dungeon-stat'>Dungeon 1</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentSideNav;
