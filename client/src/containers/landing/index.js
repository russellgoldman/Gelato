import React from 'react';
import './landing-styles.css';
import teacherIcon from './teacher-icon.svg';
import studentIcon from './student-icon.png';

export class LandingView extends React.Component {

  render() {
    return (
    <div className='landing-conatiner'>
        <div className='teacher-container'>
            <div className='teacher-content'>
                <h1>Are you a teacher?...</h1>
                <img src={teacherIcon}></img>
                <button className='teacher-btn'>Enter</button>
            </div>
        </div>
        <div className='student-container'>
            <div className='student-content'>
                <h1>...Or are you a student?</h1>
                <img src={studentIcon}></img>
                <button className='student-btn'>Enter</button>
            </div>
        </div>
    </div>
    );
  }
}
