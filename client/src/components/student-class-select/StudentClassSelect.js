import React, { Component } from 'react';
import './StudentClassSelect.css';

class StudentClassSelect extends Component {

  render() {
    return (
      <div className='student-class-container'>
        <h2>Hi Alice, Welcome to Grade 5 Math!</h2>
        <h2 className='map-title'>Choose your map</h2>
        <ul>
          <li>Class 1</li>
          <li>Class 2</li>
          <li>Class 3</li>
          <li>Class 4</li>
        </ul>
      </div>
    );
  }
}

export default StudentClassSelect;
