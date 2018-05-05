import React, { Component } from 'react';
import coin from './coin.png';
import robot from './robot.svg';
import scroll from './scroll.png';
import './student-side-nav.css';

class  StudentSideNav extends Component {

  render() {
    return (
      <div className='container'>
        <h2>In Game Stats</h2>
        <div className='stat-item'>
          <div>Profile Info</div>
          <img src={robot} alt='robot'></img>
        </div>
        <div className='stat-item'>
          <div>Amount of Coins</div>
          <img src={coin} alt='robot'></img>
        </div>
        <div className='stat-item'>
          <div>Amount of Coins</div>
          <img src={scroll} alt='robot'></img>
        </div>
      </div>
    );
  }
}

export default StudentSideNav;
