import React, { Component } from 'react';
import './StudentClassSelect.css';

class StudentClassSelect extends Component {

  render() {
    return (
      <div className='student-class-container'>
        <h2 className='greeting-msg'>Hi Alice, Welcome to Grade 5 Math!</h2>
        <h2 className='map-title'>Choose your map</h2>
        <ul>
          <li><button className='division-course-item'>Division</button></li>
          <li><button className='multiplication-course-item'>Multiplication</button></li>
          <li><button className='fractions-course-item'>Fractions</button></li>
          <li><button className='decimals-course-item'>Decimals</button></li>
        </ul>
      </div>
    );
  }
}

export default StudentClassSelect;
