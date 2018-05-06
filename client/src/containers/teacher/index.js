import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Analytics } from './Analytics';
import { Subjects } from './Subjects';
import { Sidebar } from './Sidebar';
import './index.css';


const views = {
  analytics: 'views/analytics',
  quizEdit: 'views/create-game',
};

export class TeacherView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: views.analytics
    };

    this.handleSwitchToAnalytics = this.handleSwitchToAnalytics.bind(this);
    this.handleSwitchToQuizEditor = this.handleSwitchToQuizEditor.bind(this);
  }

  handleSwitchToQuizEditor() {
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
    const isCurrentTab = view => this.state.currentView === view
      ? 'bb bw2 b--purple purple'
      : '';
    return (
      <div className="bg-light-gray">
        <div className="flex br2 min-h4">
          <Sidebar />
          <Tabs className="w-100 bg-white br4 ma3">
            <TabList className="flex list mt0 mb0">
              <Tab
                onClick={this.handleSwitchToAnalytics}
                className={`f3 pointer pa3 mr4 ${isCurrentTab(views.analytics)}`}>
                Analytics
              </Tab>
              <Tab
                onClick={this.handleSwitchToQuizEditor}
                className={`f3 pointer pa3 mr4 ${isCurrentTab(views.quizEdit)}`}>
                Quiz Editor
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
      </div>
    );
  }
}
