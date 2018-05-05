import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentSideNav from './components/student-side-nav/StudentSideNav';
import BattleField from './components/battle-field/BattleField';
import MCQuestion from './components/mc-question/MCQuestion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className='screen-container'> 
          <StudentSideNav />
          <div className='battle-screen-container'>
            <BattleField />
            <MCQuestion />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
