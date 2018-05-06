import React from 'react';
import { Route, Redirect } from 'react-router';
import StudentClassSelect from '../../components/student-class-select/StudentClassSelect';
import StudentSideNav from '../../components/student-side-nav/StudentSideNav';
import QuestSelect from '../../components/quest-select/QuestSelect';
import SideQuestSelect from '../../components/side-quest-select/SideQuestSelect';
import BattleField from '../../components/battle-field/BattleField';
import MCQuestion from '../../components/mc-question/MCQuestion';
import monsterSprite from './dragon.png';
import greenMonster from './green-monster.png';
import mushroomMonster from './mushroom.png';

export class StudentView extends React.Component {

  constructor() {
    super();
     this.state = {
      prevAnswer: null,
      attack: false,
      correctAnswer: false,
      quizComplete: false,
      questions: [
        {
          id: 0,
          question: "What is 2x2",
          answers: [
            1,
            4,
            3,
            5
          ],
          correctAnswer: 4,
          monster: monsterSprite
        },
        {
          id: 1,
          question: "What is 2x4",
          answers: [
            1,
            2,
            8,
            5
          ],
          correctAnswer: 8,
          monster: monsterSprite
        },
        {
          id: 2,
          question: "What is 5x5",
          answers: [
            25,
            50,
            10,
            30
          ],
          correctAnswer: 25,
          monster: monsterSprite
        }
      ],
      currentQuestionId: 0,
    }
  }
  
  handleAnswer = (answer) => {
    const { questions, currentQuestionId, prevAnswer } = this.state;
    const question = questions[currentQuestionId];
    
    if (answer === prevAnswer) {
      this.setState({ attack: false });
      return;
    };
    this.setState({
      prevAnswer: answer,
      correctAnswer: answer === question.correctAnswer,
      attack: true,
    });
  }
  
  stopAttack = () => {
    // set new question vars based on next question
    //stop animation and re render question UI
    console.log("stopped!");
    let new_question_num = this.state.currentQuestionId + 1;
    if (new_question_num >= this.state.questions.length) {
      // redirect to landing page if quiz is complete
      return <Redirect to=".././landing/index.js"/>;
    };
    this.setState({
      prevAnswer: null,
      attack: false,
      correctAnswer: false,
      currentQuestionId: new_question_num
    });
  }

  render () {
    return (<div>
        <div className='screen-container'> 
          <StudentSideNav />
          <div className='battle-screen-container'>
            <BattleField {...this.state.questions[this.state.currentQuestionId]} onAnimationComplete={this.stopAttack} attack={this.state.attack} hit={this.state.correctAnswer} />
            <MCQuestion {...this.state.questions[this.state.currentQuestionId]} onAnswerSelected={this.handleAnswer}/>
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
