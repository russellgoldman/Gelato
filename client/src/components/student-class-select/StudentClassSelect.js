import React, { Component } from 'react';
import './StudentClassSelect.css';

class StudentClassSelect extends Component {

  render() {
    return (
      <div className='student-class-container'>
        <h2 className='greeting-msg'>Hi Alice, Welcome to Grade 5 Math!</h2>
        <h2 className='map-title'>Choose your map</h2>
        <ul>
          <li><button className='course-item'>Class 1</button></li>
          <li><button className='course-item'>Class 2</button></li>
          <li><button className='course-item'>Class 3</button></li>
          <li><button className='course-item'>Class 4</button></li>
        </ul>
      </div>
    );
  }
}

export default StudentClassSelect;
