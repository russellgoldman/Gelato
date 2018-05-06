import React, { Component } from 'react';
import { capitalizeFirstLetter } from '../../../misc-utilities';
import { checkboxSelect, checkboxNeutral } from '../../../images';

export class QuizAnswers extends Component {
  constructor(props) {
    super(props);
    const QuestionTypeOptions = ['Multiple Choice', 'Written', 'True or False'];
    this.QuestionTypeOptions = QuestionTypeOptions;   // adding the local constant onto the class QuizAnswers
    this.questionNamePlaceholder = true;

    this.state = {
      quizName: this.props.quizName,
      statusLocked: this.props.statusLocked,
      questionName: 'Write your question here',
      answers: ['Option A', 'Option B', 'Option C', 'Option D'],
      renderCheckbox: [checkboxSelect, checkboxNeutral, checkboxNeutral, checkboxNeutral],
      correctAnswerIndex: [0],   // indices of correct answers
      questionTypeChoice: QuestionTypeOptions[0]   // preset is Multiple Choice
    };
  }

  questionNameChange(event) {
    this.setState({questionName: event.target.value})
  }

  questionNameClick(event) {
    if (this.questionNamePlaceholder) {
      this.setState({questionName: ''});
      this.questionNamePlaceholder = false;
    }
  }

  multipleChoiceButtonClick(event) {
    if (this.state.questionTypeChoice !== 'Multiple Choice') {
      this.setState({questionTypeChoice: this.QuestionTypeOptions[0]});
    }
  }

  writtenButtonClick(event) {
    if (this.state.questionTypeChoice !== 'Written') {
      this.setState({questionTypeChoice: this.QuestionTypeOptions[1]});
    }
  }

  trueOrFalseButtonClick(event) {
    if (this.state.questionTypeChoice !== 'True or False') {
      this.setState({questionTypeChoice: this.QuestionTypeOptions[2]});
    }
  }

  renderQuestionTypeButtons() {
    if (this.state.questionTypeChoice === 'Multiple Choice') {
      // Multiple Choice is selected
      return (
        <div>
          <div style={{ display: 'inline', marginRight: '5px' }}>
            <button style={styles.questionTypeEnable} type="button"
              onClick={this.multipleChoiceButtonClick.bind(this)}>Multiple Choice</button>
          </div>
          <div style={{ display: 'inline', marginLeft: '5px', marginRight: '5px' }}>
            <button style={styles.questionTypeDisable} type="button"
              onClick={this.writtenButtonClick.bind(this)}>Written</button>
          </div>
          <div style={{ display: 'inline', marginLeft: '5px' }}>
            <button style={styles.questionTypeDisable} type="button"
              onClick={this.trueOrFalseButtonClick.bind(this)}>True or False</button>
          </div>
        </div>
      );
    }
    else if (this.state.questionTypeChoice === 'Written') {
      return (
        <div>
          <div style={{ display: 'inline', marginRight: '5px' }}>
            <button style={styles.questionTypeDisable} type="button"
              onClick={this.multipleChoiceButtonClick.bind(this)}>Multiple Choice</button>
          </div>
          <div style={{ display: 'inline', marginLeft: '5px', marginRight: '5px' }}>
            <button style={styles.questionTypeEnable} type="button"
              onClick={this.writtenButtonClick.bind(this)}>Written</button>
          </div>
          <div style={{ display: 'inline', marginLeft: '5px' }}>
            <button style={styles.questionTypeDisable} type="button"
              onClick={this.trueOrFalseButtonClick.bind(this)}>True or False</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div style={{ display: 'inline', marginRight: '5px' }}>
          <button style={styles.questionTypeDisable} type="button"
            onClick={this.multipleChoiceButtonClick.bind(this)}>Multiple Choice</button>
        </div>
        <div style={{ display: 'inline', marginLeft: '5px', marginRight: '5px' }}>
          <button style={styles.questionTypeDisable} type="button"
            onClick={this.writtenButtonClick.bind(this)}>Written</button>
        </div>
        <div style={{ display: 'inline', marginLeft: '5px' }}>
          <button style={styles.questionTypeEnable} type="button"
            onClick={this.trueOrFalseButtonClick.bind(this)}>True or False</button>
        </div>
      </div>
    );
  }

  toggleCheckbox(id) {
    if (renderCheckbox[id] === checkboxSelect) {
      // currently selected, let's unselect it
      this.setState({renderCheckbox[id]: checkboxNeutral});
      return;
    }
    // otherwise it is unselected, and so we select it
    this.setState({renderCheckbox[id]: checkboxSelect});
  }

  render() {
    return (
      <div style={styles.outerContainer}>
        <div style={styles.space}/>
        <div style={styles.innerContainer}>
          <div style={styles.subjectContainer}>
            <p style={{ color: '#F5f5f5', marginLeft: '12px', paddingTop: '20px', marginBottom: '-8px' }}>Subject > {capitalizeFirstLetter(this.props.subject.name)}</p>
            <h1 style={{ color: '#343452', marginLeft: '12px'}}>{this.state.quizName}</h1>
          </div>
          <div style={styles.spaceHorizontal}>
          </div>
          <div style={{ flex: 0.2 }}/>
          <div style={styles.questionInputFormContainer}>
            <form>
              <label style={{ fontFamily: 'Roboto', fontSize: '22px', fontWeight: 'bold'}}>
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
            <p style={{ display: 'inline', fontSize: '22px', fontWeight: 'bold' }}>Question Type</p>
            <div style={{ margin: '10px' }}/>
            <div>
              {this.renderQuestionTypeButtons()}
            </div>
          </div>
          <div style={{ flex: 0.5, marginLeft: '10px' }}>
            <p style={{ display: 'inline', fontSize: '22px', fontWeight: 'bold' }}>Answers</p>
            <p style={{ display: 'inline', color: 'gray', fontSize: '16px'}}> - Select all that are correct</p>
            <div style={{ margin: '10px' }}/>
          </div>
          <div style={styles.answersColumnContainer}>
            <div style={styles.answerRowContainer}>
              <img src={checkboxSelect} alt='Checkbox Select' style={styles.answerCheckboxStyle} onclick={this.toggleCheckbox(0)}/>
              <input style={styles.answerInputStyle} type="text" value="Option A"/>
              <div style={styles.spaceHorizontal1}/>
              <img src={checkboxNeutral} alt='Checkbox Neutral' style={styles.answerCheckboxStyle} onclick={this.toggleCheckbox(1)}/>
              <input style={styles.answerInputStyle} type="text" value="Option B"/>
            </div>
            <div style={{ flex: 1 }}/>
            <div style={styles.answerRowContainer}>
              <img src={checkboxNeutral} alt='Checkbox Neutral' style={styles.answerCheckboxStyle} onclick={this.toggleCheckbox(2)}/>
              <input style={styles.answerInputStyle} type="text" value="Option C"/>
              <div style={styles.spaceHorizontal1}/>
              <img src={checkboxNeutral} alt='Checkbox Neutral' style={styles.answerCheckboxStyle} onclick={this.toggleCheckbox(3)}/>
              <input style={styles.answerInputStyle} type="text" value="Option D"/>
            </div>
            <div style={{ flex: 2 }}/>
          </div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row', maxHeight: '45px' }}>
            <button style={styles.deleteQuestionButtonContainer} type="button">Delete Question</button>
            <button style={styles.addQuestionButtonContainer} type="button">Add Question</button>
            <div style={{ flex: 1 }}/>
            <button style={styles.saveAndPublishButtonContainer} type="button">Save and Publish</button>
          </div>
          <div style={styles.spaceHorizontal2}/>
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
    backgroundColor: '#9AA9FF'
  },
  spaceHorizontal1: {
    flex: 0.1
  },
  spaceHorizontal2: {
    flex: 0.2
  },
  questionInputFormContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10px'
  },
  questionInputStyle: {
    marginTop: '5px',
    width: '500px',
    fontSize: '15px',
    flex: '1',
  },
  answerInputStyle: {
    width: '100px',
    fontSize: '15px',
    flex: 0.5,
    textAlign: 'center'
  },
  answerCheckboxStyle: {
    flex: 1,
    alignItems: 'stretch',
    maxWidth: '50px'
  },
  questionTypeContainer: {
    flex: 0.7,
    marginLeft: '10px'
  },
  questionTypeEnable: {
    backgroundColor: 'white',
    color: '#Ba68c8',
    padding: '7px 50px',
    textAlign: 'center',
    fontSize: '14px',
    borderRadius: '5px',
    borderColor: '#c9c9c9'
  },
  questionTypeDisable: {
    backgroundColor: '#f4f4f4',
    color: 'black',
    padding: '7px 50px',
    textAlign: 'center',
    fontSize: '14px',
    borderRadius: '5px',
    borderColor: '#c9c9c9'
  },
  answersColumnContainer: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center'
  },
  answerRowContainer: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    width: '60%'
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
