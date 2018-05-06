import React, { Component } from 'react';
import './student-side-nav.css';

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
            <div className='circle'></div>
            <div className='rectangle'></div>
          </div>
          <div className='single-stat'>
            <div className='circle'></div>
            <div className='rectangle'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentSideNav;
