import React from 'react';
import './landing-styles.css';
import teacherIcon from './teacher-icon.svg';

export class LandingView extends React.Component {

  render() {
    return (
    <div className='landing-conatiner'>
        <div className='teacher-container'>
            <div className='teacher-content'>
                <h1>Are you a teacher?...</h1>
                <img src={teacherIcon}></img>
            </div>
        </div>
        <div className='student-container'>
            <div className='teacher-content'>
                <h1>...Or are you a student?</h1>
                <img src={teacherIcon}></img>
            </div>
        </div>
    </div>
    );
  }
}
