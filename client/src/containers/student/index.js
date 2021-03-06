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
import '../../App.css';

export class StudentView extends React.Component {

  constructor() {
    super();
     this.state = {
      prevAnswer: null,
      attack: false,
      correctAnswer: false,
      quizComplete: false,
      showBattle: false,
      questions: [
        {
          id: 0,
          question: "What do you get when you multiply 2 by 2?",
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
          question: "What do you get when you multiply 2 by 4?",
          answers: [
            1,
            2,
            8,
            5
          ],
          correctAnswer: 8,
          monster: greenMonster
        },
        {
          id: 2,
          question: "What do you get when you multiply 5 by 5?",
          answers: [
            25,
            50,
            10,
            30
          ],
          correctAnswer: 25,
          monster: mushroomMonster
        }
      ],
      currentQuestionId: 0,
    }
  }

  toggleBattle = () => this.setState(prevState => ({
    ...prevState,
    showBattle: !prevState.showBattle
  }))
  
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
      new_question_num = 0;
      // redirect to landing page if quiz is complete
      // return <Redirect to=".././landing/index.js"/>;
    };
    this.setState({
      prevAnswer: null,
      attack: false,
      correctAnswer: false,
      currentQuestionId: new_question_num
    });
  }

  renderBattle = () => {
    return (<div>
      <div className='screen-container'> 
        <StudentSideNav />
        <div className='battle-screen-container'>
          <BattleField {...this.state.questions[this.state.currentQuestionId]} onAnimationComplete={this.stopAttack} attack={this.state.attack} hit={this.state.correctAnswer} />
          <MCQuestion {...this.state.questions[this.state.currentQuestionId]} onAnswerSelected={this.handleAnswer}/>
        </div>
      </div>
  </div>);
  }

  render () {
    return (<div>
      <div className='main-screen'>
        {this.state.showBattle ? this.renderBattle() :
          (<React.Fragment> 
            <h2 className='greeting-msg'>Hi Alice, Welcome to</h2> <h2 className='course-msg'>Grade 5 Math!</h2>
            <StudentSideNav />
            <StudentClassSelect />
            <QuestSelect />
            <div className='sub-screen'>
              <SideQuestSelect />
            </div>
            <div><button className='play-btn' onClick={this.toggleBattle}>PLAY</button></div>
          </React.Fragment>)}
      </div>
     
    </div>);
  }
}
