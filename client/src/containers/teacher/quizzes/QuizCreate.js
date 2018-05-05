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
      quizName: 'Name of Quiz',
      passingGrade: 'Grade needed to slay the monster',
      locked: true,   // false is unlocked
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

  render() {
    return (
      <div style={styles.outerContainer}>
        <div style={styles.space}/>
        <div style={styles.innerContainer}>
          <div style={styles.subjectContainer}>
            <h1>{capitalizeFirstLetter(this.props.subject.name)}</h1>
          </div>
          <div style={styles.newQuizLabel}>
            <h2>New Quiz</h2>
          </div>
          <div style={styles.quizInputFormContainer}>
            <form>
              <label>
                Name of Quiz:
                <div>
                  <input style={styles.quizNameInputStyle} type="text" value={this.state.quizName}
                    onChange={this.quizNameChange.bind(this)} onClick={this.quizNameClick.bind(this)} />
                </div>
              </label>
            </form>
          </div>
          <div style={styles.quizInputFormContainer}>
            <form>
              <label>
                Passing Grade (%):
                <div>
                  <input style={styles.passingGradeInputStyle} type="text" value={this.state.passingGrade}
                    onChange={this.passingGradeChange.bind(this)} onClick={this.passingGradeClick.bind(this)} />
                </div>
              </label>
            </form>
          </div>
          <div style={styles.statusContainer}>
            <p>Status:</p>
            <div>
              <button style={styles.statusEnable} type="button">Locked</button>
              <button style={styles.statusDisable} type="button">Unlocked</button>
            </div>
          </div>
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
    backgroundColor: '#F4F4F4',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '2px 3px 1px #dfdfdf'
  },
  newQuizLabel: {
    flex: 1,
    textAlign: 'left'
  },
  quizInputFormContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quizNameInputStyle: {
    marginTop: '5px',
    width: '300px',
  },
  passingGradeInputStyle: {
    marginTop: '5px',
    width: '50px',
    textAlign: 'center'
  },
  statusContainer: {
    flex: 1
  },
  statusEnable: {
    backgroundColor: '#3f51b5',
    color: 'white',
    padding: '7px 40px',
    textAlign: 'center',
    fontSize: '20px',
    borderRadius: '5px',
    margin: '0px 5px'
  },
  statusDisable: {
    backgroundColor: '#F4F4F4',
    color: 'black',
    padding: '7px 40px',
    textAlign: 'center',
    fontSize: '17px',
    borderRadius: '5px',
    margin: '0px 5px'
  }
};
