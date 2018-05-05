import React, { Component } from 'react';
import { Titlebar } from './components/titlebar';
import teacher from './images/teacher.png';

class App extends Component {
  render() {
    return (
      <div>
        <Titlebar imgSrc={teacher} imgAlt="Teacher avatar" name="Russell Goldman"></Titlebar>
      </div>
    );
  }
}

export default App;
