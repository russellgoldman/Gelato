import React, { Component } from 'react';
import { capitalizeFirstLetter } from '../../../misc-utilities';

export class QuizAnswers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizName: this.props.quizName,
      statusLocked: this.props.statusLocked,
      data: [
        {
          questionName: 'What is 2 x 2?',
          questionType: 0,
          answers: ['5', '1', '4', '3'],
          correctAnswerIndex: 2     // in the answers array
        }
      ],
      questionType: {
        // enumeration
        multipleChoice: {
          id: 0,
          chooseFrom: 4   // how many available answers are given
        },
        written: {
          id: 1,
          chooseFrom: 1
        },
        trueOrFalse: {
          id: 2,
          chooseFrom: 2
        }
      }
    };
  }

  questionNameChange(event) {
    this.setState({questionName: event.target.value})
  }

  questionNameClick(event) {
    // todo
  }

  passingGradeChange(event) {
    if (event.target.value < 0 || event.target.value > 100) {
      alert('Passing Grade must be a percentage between 0 and 100');
      return;
    }
    this.setState({passingGrade: event.target.value});
  }

  passingGradeClick(event) {
    if (this.passingGradePlaceHolder) {
      this.setState({passingGrade: ''});
      this.passingGradePlaceHolder = false;
    }
  }

  lockedButtonClick(event) {
    if (!this.state.statusLocked) {
      // if locked is inactive and clicked, make it active
      this.setState({statusLocked: !this.state.statusLocked});
    }
  }

  unlockedButtonClick(event) {
    if (this.state.statusLocked) {
      // if locked is active and clicked, make it inactive
      this.setState({statusLocked: !this.state.statusLocked});
    }
  }

  renderQuestionTypeButtons() {
    if (this.state.statusLocked) {
      // locked is active
      return (
        <div>
          <div style={{ display: 'inline', marginRight: '5px' }}>
            <button style={styles.statusEnable} type="button"
              onClick={this.lockedButtonClick.bind(this)}>Locked</button>
          </div>
          <div style={{ display: 'inline', marginLeft: '5px' }}>
          <button style={styles.statusDisable} type="button"
            onClick={this.unlockedButtonClick.bind(this)}>Unlocked</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div style={{ display: 'inline', marginRight: '5px' }}>
          <button style={styles.statusDisable} type="button"
            onClick={this.lockedButtonClick.bind(this)}>Locked</button>
        </div>
        <div style={{ display: 'inline', marginLeft: '5px' }}>
          <button style={styles.statusEnable} type="button"
            onClick={this.unlockedButtonClick.bind(this)}>Unlocked</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={styles.outerContainer}>
        <div style={styles.space}/>
        <div style={styles.innerContainer}>
          <div style={styles.subjectContainer}>
            <p style={{ color: '#F5f5f5', marginLeft: '12px', paddingTop: '20px', marginBottom: '-8px' }}>Subject > {capitalizeFirstLetter(this.props.subject.name)}</p>
            <h1 style={{ color: '#343452', marginLeft: '12px' }}>{this.state.quizName}</h1>
          </div>
          <div style={styles.spaceHorizontal}>
          </div>
          <div style={styles.questionInputFormContainer}>
            <form>
              <label style={{ fontFamily: 'Helvetica', fontSize: '22px', fontWeight: 'bold' }}>
                Question 1
                <div>
                  <div style={{ margin: '10px' }}/>
                  <input style={styles.questionInputStyle} type="text" value={this.state.questionName}
                    onChange={this.questionNameChange.bind(this)} onClick={this.questionNameClick.bind(this)} />
                </div>
              </label>
            </form>
          </div>
          <div style={styles.questionTypeContainer}>
            <p style={{ display: 'inline', fontFamily: 'Helvetica', fontSize: '22px', fontWeight: 'bold' }}>Question Type</p>
            <div style={{ margin: '10px' }}/>
            <div>
              {this.renderQuestionTypeButtons()}
            </div>
          </div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row', maxHeight: '45px' }}>
            <button style={styles.deleteQuestionButtonContainer} type="button">Delete Question</button>
            <button style={styles.addQuestionButtonContainer} type="button">Add Question</button>
            <div style={{ flex: 1 }}/>
            <button style={styles.saveAndPublishButtonContainer} type="button">Save and Publish</button>
          </div>
          <div style={styles.spaceHorizontal}/>
        </div>
      </div>
    );
  }
};

const styles = {
  outerContainer: {
    display: 'flex',
    flex: 1,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 150,
    backgroundColor: 'white',
    marginLeft: '15px',
    marginRight: '15px'
  },
  space: {
    flex: 1,
    backgroundColor: '#dbdbdb'
  },
  subjectContainer: {
    flex: 1,
    backgroundColor: '#9fa8da'
  },
  spaceHorizontal: {
    flex: 0.2
  },
  questionInputFormContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10px'
  },
  questionInputStyle: {
    marginTop: '5px',
    width: '500px',
    fontSize: '15px'
  },
  passingGradeInputStyle: {
    marginTop: '5px',
    width: '500px',
    fontSize: '15px'
  },
  questionTypeContainer: {
    flex: 1,
    marginLeft: '10px'
  },
  statusEnable: {
    backgroundColor: 'white',
    color: '#Ba68c8',
    padding: '7px 50px',
    textAlign: 'center',
    fontSize: '14px',
    borderRadius: '5px',
    borderColor: '#c9c9c9'
  },
  statusDisable: {
    backgroundColor: '#f4f4f4',
    color: 'black',
    padding: '7px 50px',
    textAlign: 'center',
    fontSize: '14px',
    borderRadius: '5px',
    borderColor: '#c9c9c9'
  },
  deleteQuestionButtonContainer: {
    flex: 1,
    backgroundColor: '#Bdbdbd',
    color: 'white',
    padding: '7px 50px',
    textAlign: 'center',
    fontSize: '14px',
    borderRadius: '5px',
    borderColor: '#c9c9c9',
    marginLeft: '10px',
    marginBottom: '2px'
  },
  addQuestionButtonContainer: {
    flex: 1,
    backgroundColor: '#Ba68c8',
    color: 'white',
    padding: '7px 50px',
    textAlign: 'center',
    fontSize: '14px',
    borderRadius: '5px',
    borderColor: '#c9c9c9',
    marginLeft: '10px',
    marginBottom: '2px'
  },
  saveAndPublishButtonContainer: {
    flex: 1,
    backgroundColor: '#4db6ac',
    color: 'white',
    padding: '7px 50px',
    textAlign: 'center',
    fontSize: '14px',
    borderRadius: '5px',
    borderColor: '#c9c9c9',
    marginLeft: '10px',
    marginBottom: '2px'
  }
};
