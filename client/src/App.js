import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentClassSelect from './components/student-class-select/StudentClassSelect';
import StudentSideNav from './components/student-side-nav/StudentSideNav';
import QuestSelect from './components/quest-select/QuestSelect';
import SideQuestSelect from './components/side-quest-select/SideQuestSelect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Project Gelato</h1>
        </header>
          <div className='main-screen'>
            <StudentSideNav />
            <StudentClassSelect />
            <QuestSelect />
            <div className='sub-screen'>
              <SideQuestSelect />
            </div>
          </div>
          <div><button className='play-btn'>PLAY</button></div>
      </div>
    );
  }
}

export default App;
