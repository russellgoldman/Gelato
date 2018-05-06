import React, { Component } from 'react';
import { TeacherView } from './containers/teacher';
import { defaults } from 'react-chartjs-2'

class App extends Component {
  render() {
    return (
      <div>
        <TeacherView />
      </div>
    );
  }
}

export default App;
