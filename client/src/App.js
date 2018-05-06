import React, { Component } from 'react';
import './App.css';
import { TeacherView } from './containers/teacher';
import { Titlebar } from './components/titlebar.js';
import teacher from './images/teacher.png';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: data.classes,
      activeClassId: data.classes.findIndex(c => c.active)
    };
    this.removeSubjectFromActiveCourse = this.removeSubjectFromActiveCourse.bind(this);
    this.addSubjectToActiveCourse = this.addSubjectToActiveCourse.bind(this);
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

  render() {
    const { currentView } = this.state;
    const show = (view, component) => currentView === view && component;

    return (
      <div className="vh-100">
        <Titlebar className="vh-10" imgSrc={teacher} imgAlt="Teacher avatar"></Titlebar>
        <TeacherView 
          currentClass={this.state.classes[this.state.activeClassId]}
          classes={this.state.classes}
          className="vh-90" 
          fns={{
            addSubject: this.addSubjectToActiveCourse,
            removeSubject: this.removeSubjectFromActiveCourse,
          }}
        />
      </div>
    );
  }
}

export default App;
