import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Titlebar } from '../../components/titlebar.js';
import teacher from '../../images/teacher.png';
import { Analytics } from './Analytics';
import { Subjects } from './Subjects';
import './index.css';

const Sidebar = () => (<p>hello</p>);

const views = {
  analytics: 'views/analytics',
  quizEdit: 'views/create-game',
};

export class TeacherView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: views.quizEdit
    };

    this.handleSwitchToAnalytics = this.handleSwitchToAnalytics.bind(this);
    this.handleSwitchToGame = this.handleSwitchToGame.bind(this);
  }

  handleSwitchToGame() {
    this.setState({
      currentView: views.quizEdit
    });
  }

  handleSwitchToAnalytics() {
    this.setState({
      currentView: views.analytics
    });
  }

  render() {
    return (
      <div>
        <Titlebar imgSrc={teacher} imgAlt="Teacher avatar" name="Russell Goldman"></Titlebar>
        <Sidebar>
        </Sidebar>
        <Tabs className="">

          <TabList className="flex list">
            <Tab
              onClick={this.handleSwitchToAnalytics} 
              className="outline w-25 pa3 mr2">
              Analytics
            </Tab>
            <Tab 
              onClick={this.handleSwitchToGameView}
              className="outline w-25 pa3 mr2">
              Create Section
            </Tab>
          </TabList>

          <TabPanel className="">
            <Analytics />
          </TabPanel>
          <TabPanel className="">
            <Subjects />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
