import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: props.defaultTab || 0,
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex === this.state.defaultTab ? this.props.defaultTab : tabIndex
    });
  }

  renderTabs() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    console.log(children);

    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        onClick : this.handleTabClick,
        tabIndex: index,
        isActive: index === activeTabIndex
      });
    });
  }

  renderActiveTab() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;

    if(children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    return (
      <div className="tabs">
        <ul className="tabs-nav nav navbar-nav navbar-left">
          {this.renderTabs()}
        </ul>
        <div className="tabs-active-content">
          {this.renderActiveTab()}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  defaultTab: PropTypes.any,
  children: PropTypes.any,
};
