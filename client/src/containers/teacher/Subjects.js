import React from 'react';
import PropTypes from 'prop-types';

import './subjects.css';
import { QuizCreate } from './quizzes/QuizCreate.js';

export class Subjects extends React.Component {
  constructor(props) {
    super(props);

    const views = {
      quizForm: 'views/quiz-form',
      newSubjectButton: 'views/new-quiz-button',
    };

    const subjects = [
      { name: 'division', quizzes: ['quiz1', 'quiz2']  },
      { name: 'multiplication', quizzes: ['quiz1'] },
      { name: 'addition', quizzes: [] },
    ];

    this.views = views;
    this.state = {
      // global state, will connect later
      subjects,

      // local state
      currentSubject: subjects[0],
      newSubjectView: views.newSubjectButton,
      newSubjectText: '',

    };

    this.handleSwitchSubject = this.handleSwitchSubject.bind(this);
    this.handleCreateSubject = this.handleCreateSubject.bind(this);
    this.handleShowNewSubjectButton = this.handleShowNewSubjectButton.bind(this);
    this.handleCreateSubject = this.handleCreateSubject.bind(this);
    this.handleSubjectFormChange = this.handleSubjectFormChange.bind(this);
    this.handleSubjectFormSubmit = this.handleSubjectFormSubmit.bind(this);
    this.handleSubjectDelete = this.handleSubjectDelete.bind(this);
  }

  addSubject(name) {
    const { subjects } = this.state;

    const subjectExists = subjects.find(subject => subject.name === name);
    if (subjectExists) return;
    const newSubject = { name, quizzes: [] };
    this.setState({
      subjects: [...subjects, newSubject]
    });
  }

  removeSubject(name) {
    const { subjects, currentSubject } = this.state;
    const cleanSubjects = subjects.filter(subject => subject.name !== name);
    if (currentSubject.name === name) {
      this.setState({
        subjects: cleanSubjects,
        currentSubject: null,
      });
    } else {
      this.setState({
        subjects: cleanSubjects
      });
    }


  }

  handleSwitchSubject(quiz) {
    this.setState({
      currentSubject: quiz,
    });
  }

  handleCreateSubject() {
    this.setState({
      newSubjectView: this.views.quizForm,
    });
  }

  handleShowNewSubjectButton() {
    this.setState({
      newSubjectView: this.views.newSubjectButton,
    });
  }


  handleSubjectFormChange(e) {
    this.setState({
      newSubjectText: e.target.value,
    });
  }

  handleSubjectFormSubmit() {
    const { newSubjectText } = this.state;
    this.setState({
      newSubjectView: this.views.newSubjectButton,
    }, () => this.addSubject(newSubjectText));
  }

  handleSubjectDelete({name}) {
    this.removeSubject(name);
  }

  renderSubjectForm(show) {
    if (show !== this.views.quizForm) return;
    return (
      <div className="pa2 br2 flex flex-column center">
        <input className="pa2" onChange={this.handleSubjectFormChange} />
        <div className="pv2 flex justify-around w-100">
          <button
            onClick={() => this.handleShowNewSubjectButton()}
            className="bn pointer f6 link br2 ph3 pv2 mb2 dib white bg-red">cancel</button>
          <button
            onClick={this.handleSubjectFormSubmit}
            className="content-end bn pointer f6 link grow br2 ph3 pv2 mb2 dib white bg-green">create</button>
        </div>
      </div>
    );
  }

  renderNewSubjectButton(show) {
    if (show !== this.views.newSubjectButton) return;
    return (
      <div
        onClick={() => this.handleCreateSubject()}
        className="btn-circle bg-green br-100 pa3  mb3"><div>+</div></div>
    );
  }

  render() {
    const { subjects, currentSubject } = this.state;
    return (
      <div className="outline flex vh-75">
        <div className="fl w-25 ">
          <h1 className="f3 pl2">subjects</h1>
          <div className="flex flex-column items-center h-100 overflow-y-scroll">
            {subjects.map((quiz, id) =>
              <Subject
                key={id}
                onClick={() => this.handleSwitchSubject(quiz)}
                onDelete={() => this.handleSubjectDelete(quiz)}
                {...quiz}
              />
            )}
            {this.renderSubjectForm(this.state.newSubjectView)}
            {this.renderNewSubjectButton(this.state.newSubjectView)}
          </div>
        </div>

        {/*
          PLACE QUIZ COMPONENT HERE!!!!!!!!
        */}
        <QuizCreate className="fl w-75 tc" subject={this.state.currentSubject}/>
      </div>

    );
  }
}

function Subject({ name, quizzes, onClick, onDelete }) {
  return (
    <div className="w-90 card centermw6 br3 b--black-10 mv4">
      <div className="bg-near-white black-60 pv1 ph3 flex items-center justify-between">
        <h1 onClick={onClick} className="ttu f4 ">{name}</h1>
        <span onClick={onDelete} className="pointer">X</span>
      </div>
      <div className="pa3 b--black-10">
        {quizzes.map((quiz, id) => <div key={id}>{quiz}</div>)}
      </div>
    </div>
  );
}

Subject.propTypes = {
  name: PropTypes.string,
  quizzes: PropTypes.array,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};
