import React, { Component } from 'react';
import './StudentClassSelect.css';

class StudentClassSelect extends Component {

  render() {
    return (
      <div className='class-container'>
        <ul>
          <li>Class 1</li>
          <li>Class 2</li>
          <li>Class 3</li>
          <li>Class 4</li>
          <li>Class 5</li>
        </ul>
      </div>
    );
  }
}

export default StudentClassSelect;
