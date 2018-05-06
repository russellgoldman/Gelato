import React, { Component } from 'react';
import './App.css';
import { TeacherView } from './containers/teacher';
import { StudentView } from './containers/student';
import { LandingView } from './containers/landing';

class App extends Component {
  constructor() {
    super();
    const views = {
      student: 'views/student',
      teacher: 'views/teacher',
      landing: 'views/landing'
    };

    this.views = views;
    this.state = {
      currentView: views.student
    };
  }

  toggleView() {
    const setView = (currentView) => this.setState({ currentView });

    const { currentView } = this.state;
    switch (currentView) {

      case this.views.student:
        return setView(this.views.teacher);

      case this.views.teacher:
        return setView(this.views.student);

      case this.views.landing:
        return setView(this.views.landing);

      default: return;

    }
  }

  render() {
    const { currentView } = this.state;
    const show = (view, component) => currentView === view && component;

    return (
      <div>
        {/* the button below is temporary ... will remove :)*/}
        <button onClick={() => this.toggleView()}>toggle</button>
        {show(this.views.teacher, <LandingView />)}
        {show(this.views.student, <StudentView />)}
        {/* {show(this.views.teacher, <TeacherView />)} */}
      </div>
    );
  }
}

export default App;
