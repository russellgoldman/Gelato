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
    this.firstQuizNameClick = true;

    this.state = {
      quizName: 'Enter a name here',
      passingGrade: 70,
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
    if (this.firstQuizNameClick) {
      this.setState({quizName: ''});
      this.firstQuizNameClick = false;
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.subjectName}>{capitalizeFirstLetter(this.props.subject.name)}</h1>
        <h2>New Quiz</h2>
        <form>
          <label>
            Name:
            <div style={styles.quizNameInputContainer}>
              <input type="text" value={this.state.quizName} onChange={this.quizNameChange.bind(this)}
                onClick={this.quizNameClick.bind(this)} />
            </div>
          </label>
        </form>
      </div>
    );
  }
};

const styles = {
  outerContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'yellow',
  },
  innerContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    marginLeft: '5%',
    marginRight: '5%'
  },
  subjectName: {
    textAlign: 'center'
  },
  quizNameInputContainer: {
    marginLeft: '0px',
  }
};
