import React, { Component } from 'react';
import './App.css';
import { TeacherView } from './containers/teacher';
import { StudentView } from './containers/student';
import { LandingView } from './containers/landing';

import { Titlebar } from './components/titlebar.js';
import teacher from './images/teacher.png';
import { ENGINE_METHOD_DIGESTS } from 'constants';

const data = {
  classes: [
    {
      name: 'Grade 4 Math 2',
      active: false,
      subjects: []
    },
    {
      name: 'Grade 4 Math 1',
      active: true,
      subjects: [
        {
          name: 'Division',
          quizzes: ['quiz1', 'quiz2']  
        },
        {
          name: 'Multiplication',
          quizzes: ['quiz1'] 
        },
        {
          name: 'Addition',
          quizzes: [] 
        },
      ],
    },
    {
      name: 'Grade 5 English',
      active: false,
      subjects: []
    },
    {
      name: 'Grade 5 Social Studies',
      active: false,
      subjects: []
    },
  ]
};
const views = {
  LANDING: 'landing',
  APP: {
    STUDENT: 'student',
    TEACHER: 'teacher',
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: views.LANDING,
      classes: data.classes,
      activeClassId: data.classes.findIndex(c => c.active)
    };
    this.removeSubjectFromActiveCourse = this.removeSubjectFromActiveCourse.bind(this);
    this.addSubjectToActiveCourse = this.addSubjectToActiveCourse.bind(this);
  }

  updateView = (view) => {
    this.setState({
      currentView: view,
    })
  }

  addSubjectToActiveCourse(subjectName) {
    const { classes, activeClassId } = this.state;
    const activeClass = classes[activeClassId];
    const subjectExists = activeClass.subjects.find(subject => subject.name === subjectName);
    if (subjectExists) return;
    const newSubject = { name: subjectName, quizzes: [] };
    activeClass.subjects = [newSubject, ...activeClass.subjects];
    classes[activeClassId] = activeClass;
    this.setState({
      classes: classes
    });
  }

  removeSubjectFromActiveCourse(subjectName) {
    const { classes, activeClassId } = this.state;
    const activeClass = classes[activeClassId];
    const { subjects } = activeClass;
    const cleanSubjects = subjects.filter(subject => subject.name !== subjectName);
    activeClass.subjects = cleanSubjects;
    classes[activeClassId] = activeClass;
    this.setState({
      classes,
    });
  }

  renderApp() {
    if (this.state.currentView === views.LANDING) return;
    const studentOrTeacher = () => {
      switch (this.state.currentView) {
        case views.APP.STUDENT: return <StudentView />
        case views.APP.TEACHER: return (
        <TeacherView
          currentClass={this.state.classes[this.state.activeClassId]}
          classes={this.state.classes}
          className="vh-90"
          fns={{
            addSubject: this.addSubjectToActiveCourse,
            removeSubject: this.removeSubjectFromActiveCourse,
          }}
        />)
      }
    }
    return (
      <div>
      <Titlebar className="vh-10" imgSrc={teacher} imgAlt="Teacher avatar"></Titlebar>
      {studentOrTeacher()}
      </div>
    )
  }

  renderLanding() {
    if (this.state.currentView !== views.LANDING) return;
    return (
       <LandingPage />
    )
  }
  render() {
    const { currentView } = this.state;
    const show = (view, component) => currentView === view && component;

    return (
      <div className="vh-100">
        {this.renderLanding()}
        {this.renderApp()}
      </div>
    );
  }
}

export default App;
