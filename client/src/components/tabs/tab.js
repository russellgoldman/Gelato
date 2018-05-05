import React from 'react';
import PropTypes from 'prop-types';

export const Tab = (props) => {
  return (
    <li className="tab">
      <a
        style={{ backgroundColor: props.isActive ? 'gray' : 'white' }}
        onClick={(event) => {
          event.preventDefault();
          props.onClick(props.tabIndex);
        }}>
        <i className="tab-icon"/>
      </a>
    </li>
  );
};

Tab.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
};
