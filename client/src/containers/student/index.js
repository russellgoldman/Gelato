import React from 'react';
import StudentClassSelect from '../../components/student-class-select/StudentClassSelect';
import StudentSideNav from '../../components/student-side-nav/StudentSideNav';
import QuestSelect from '../../components/quest-select/QuestSelect';
import SideQuestSelect from '../../components/side-quest-select/SideQuestSelect';
import BattleField from '../../components/battle-field/BattleField';
import MCQuestion from '../../components/mc-question/MCQuestion';

export class StudentView extends React.Component {

  constructor() {
    super();
    this.state = {
      currentAnswer: null,
      prevAnswer: null,
      attack: false,
      correctAnswer: 4,
    }
  }
  
  handleAnswer = (answer) => {
    const { prevAnswer, currentAnswer } = this.state;
    if (answer === prevAnswer) {
      this.setState({ attack: false });
    };

    this.setState({
      prevAnswer: currentAnswer,
      currentAnswer: answer,
      attack: true,
    });
  }

  render () {
    return (<div>
      <div className='screen-container'> 
        <StudentSideNav />
        <div className='battle-screen-container'>
          <BattleField onAnimationComplete={this.stopAttack} attack={this.state.attack} hit={this.state.currentAnswer === this.state.correctAnswer} />
          <MCQuestion onAnswerSelected={this.handleAnswer}/>
        </div>
      </div>
      {/*<div className='main-screen'>
        <StudentSideNav />
        <StudentClassSelect />
        <QuestSelect />
        <div className='sub-screen'>
          <SideQuestSelect />
        </div>
      </div>
      <div><button className='play-btn'>PLAY</button></div>*/}
    </div>);
  }
}
