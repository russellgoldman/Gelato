import React, { Component } from 'react';
import {
  greenHillZone,
  hyruleCastle,
  luigiMansion,
  pokemonLeague
} from '../../../images/maps';
import { capitalizeFirstLetter } from '../../../misc-utilities';

export class QuizCreate extends Component {
  constructor(props) {
    super(props);

    // if the quiz name input has not yet been clicked, then the placeholder text will disappear on the first click
    this.quizNamePlaceholder = this.passingGradePlaceHolder = true;

    this.state = {
      quizName: 'Name of the quiz',
      passingGrade: 'Grade needed to slay the monster',
      statusLocked: true,   // false is unlocked
      maps: [
        {
          mapName: "Green Hill Zone",
          imgSrc: {greenHillZone}
        },
        {
          mapName: "Hyrule Castle",
          imgSrc: {hyruleCastle}
        },
        {
          mapName: "Luigi's Mansion",
          imgSrc: {luigiMansion}
        },
        {
          mapName: "Pokémon League",
          imgSrc: {pokemonLeague}
        }
      ]
    };
  }

  quizNameChange(event) {
    this.setState({quizName: event.target.value});
  }

  quizNameClick(event) {
    if (this.quizNamePlaceholder) {
      this.setState({quizName: ''});
      this.quizNamePlaceholder = false;
    }
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

  renderStatusButtons() {
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

  displayQuizName() {
    if (this.state.quizName !== 'Name of the quiz') {
      return this.state.quizName;
    }
    return 'New Quiz';
  }

  render() {
    return (
      <div style={styles.outerContainer}>
        <div style={styles.space}/>
        <div style={styles.innerContainer}>
          <div style={styles.subjectContainer}>
            <p style={{ color: '#F5f5f5', marginLeft: '12px', paddingTop: '20px', marginBottom: '-8px' }}>Subject > {capitalizeFirstLetter(this.props.subject.name)}</p>
            <h1 style={{ color: '#343452', marginLeft: '12px' }}>{this.displayQuizName()}</h1>
          </div>
          <div style={styles.spaceHorizontal}>
          </div>
          <div style={styles.quizInputFormContainer}>
            <form>
              <label style={{ fontFamily: 'Roboto', fontSize: '22px', fontWeight: 'bold' }}>
                Name
                <div>
                  <div style={{ margin: '10px' }}/>
                  <input style={styles.quizNameInputStyle} type="text" value={this.state.quizName}
                    onChange={this.quizNameChange.bind(this)} onClick={this.quizNameClick.bind(this)} />
                </div>
              </label>
            </form>
          </div>
          <div style={styles.quizInputFormContainer}>
            <form>
              <label style={{ fontFamily: 'Roboto', fontSize: '22px', fontWeight: 'bold' }}>
                <div>
                  <p style={{ display: 'inline', fontFamily: 'Roboto',
                    fontSize: '22px', fontWeight: 'bold' }}>Passing Grade (%)</p>
                  <div style={{ margin: '10px' }}/>
                  <input style={styles.passingGradeInputStyle} type="text" value={this.state.passingGrade}
                    onChange={this.passingGradeChange.bind(this)} onClick={this.passingGradeClick.bind(this)} />
                </div>
              </label>
            </form>
          </div>
          <div style={styles.statusContainer}>
            <p style={{ display: 'inline', fontFamily: 'Roboto', fontSize: '22px', fontWeight: 'bold' }}>Status</p>
            <p style={{ display: 'inline', color: 'gray',fontFamily: 'Roboto',
              fontSize: '16px'}}> - If quiz is accessible to students</p>
            <div style={{ margin: '10px' }}/>
            <div>
              {this.renderStatusButtons()}
            </div>
          </div>
          <div>
            <button style={styles.nextButtonContainer} type="button">Next</button>
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
    backgroundColor: '#9AA9FF'
  },
  spaceHorizontal: {
    flex: 0.2
  },
  quizInputFormContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10px'
  },
  quizNameInputStyle: {
    marginTop: '5px',
    width: '500px',
    fontSize: '15px'
  },
  passingGradeInputStyle: {
    marginTop: '5px',
    width: '500px',
    fontSize: '15px'
  },
  statusContainer: {
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
  nextButtonContainer: {
    backgroundColor: '#4db6ac',
    color: 'white',
    padding: '7px 70px',
    textAlign: 'center',
    fontSize: '16px',
    borderRadius: '5px',
    borderColor: '#c9c9c9',
    marginLeft: '10px',
    marginBottom: '2px'
  }
};
