import React, { Component } from 'react';
import { TeacherView } from './containers/teacher';
import { Titlebar } from './components/titlebar.js';
import teacher from './images/teacher.png';

class App extends Component {
  render() {
    return (
      <div className="vh-100">
        <Titlebar className="vh-10" imgSrc={teacher} imgAlt="Teacher avatar"></Titlebar>
        <TeacherView className="vh-90" />
      </div>
    );
  }
}

export default App;
