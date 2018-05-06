import React from 'react';
import PropTypes from 'prop-types';
import { InputCard, Card } from '../../components/card';

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
      { name: 'Division', quizzes: ['quiz1', 'quiz2']  },
      { name: 'Multiplication', quizzes: ['quiz1'] },
      { name: 'Addition', quizzes: [] },
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
      subjects: [newSubject, ...subjects]
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
      <InputCard onInputChange={this.handleSubjectFormChange}>
        <div className="">
          <div className="flex justify-between pv2 ph2">
            <button
              onClick={() => this.handleShowNewSubjectButton()}
              className="bn br2 pointer pv2 ph3 bg-light-red">cancel</button>
            <button
              onClick={() => this.handleSubjectFormSubmit()}
              className="bn br2 pointer pv2 ph3 bg-green">submit</button>
          </div>

        </div>
      </InputCard>
    );
  }

  renderNewSubjectButton(show) {
    if (show !== this.views.newSubjectButton)
      return (<div
        onClick={() => this.handleCreateSubject()}
        className=" pa3 fr mb3 new-subject-button"></div>
      );
    return (
      <div
        onClick={() => this.handleCreateSubject()}
        className="btn-circle bg-green br-100 pa3 fr mb3 new-subject-button"><div>+</div></div>
    );
  }

  render() {
    const { subjects, currentSubject } = this.state;
    return (
      <div className="flex">
        <div className="fl w-30 ">
          <div className="flex-column flex bg-bright-blue subject-title">
            <div>
              {this.renderNewSubjectButton(this.state.newSubjectView)}
            </div>
            <div>
              <h1 className="f3 white normal pl4">Subjects</h1>
            </div>
          </div>
          <div className="flex flex-column items-center overflow-y-scroll STUPID-FIXED-HEIGHT">
            <small className="gray pv2">These are the Worlds your students see</small>
            {this.renderSubjectForm(this.state.newSubjectView)}
            {subjects.map((quiz, id) =>
              <Subject
                key={id}
                onClick={() => this.handleSwitchSubject(quiz)}
                onDelete={() => this.handleSubjectDelete(quiz)}
                {...quiz}
              />
            )}
          </div>
        </div>

        {/*
          PLACE QUIZ COMPONENT HERE!!!!!!!!
        */}
        {this.state.currentSubject
          ? <QuizCreate className="fl w-60 tc" subject={this.state.currentSubject}/>
          : <div>TODO: add class</div>
        }
      </div>

    );
  }
}

function Subject({ name, quizzes, onClick, onDelete }) {
  return (
    <Card title={name} onClose={onDelete} onTitleClick={onClick}>
      <div className="">
        <div className="">
          <div className="flex-column flex items-center">
            {quizzes.map((quiz, id, a) => 
              <Quiz key={id} name={quiz} isLast={id === (a.length - 1)}/>
            )}
            {quizzes.length === 0 &&
                <button onClick={onClick} className="pointer w-70 ma2 bn pa2 bg-green pa2 br2">Add Quiz</button>
            }
          </div>
        </div>
      </div>
    </Card>
  );
}

Subject.propTypes = {
  name: PropTypes.string,
  quizzes: PropTypes.array,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

function Quiz({ name, isLast }) {
  return (
    <div className={`quiz-hover w-100 pv2 ph3 tc ${!isLast ? 'bb' : ''} b--light-gray`}>
      {name}
    </div>
  );
}
Quiz.propTypes = {
  name: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
};
