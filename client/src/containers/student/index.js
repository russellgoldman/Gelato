import React from 'react';
import StudentClassSelect from '../../components/student-class-select/StudentClassSelect';
import StudentSideNav from '../../components/student-side-nav/StudentSideNav';
import QuestSelect from '../../components/quest-select/QuestSelect';
import SideQuestSelect from '../../components/side-quest-select/SideQuestSelect';

export const StudentView = () => (
  <div>
    <div className='main-screen'>
      <StudentSideNav />
      <StudentClassSelect />
      <QuestSelect />
      <div className='sub-screen'>
        <SideQuestSelect />
      </div>
    </div>
    <div><button className='play-btn'>PLAY</button></div>
  </div>
);
