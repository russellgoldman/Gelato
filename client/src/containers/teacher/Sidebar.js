import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';

const Triangle = () => (
  <div className="triangle">
  </div>
);
export const Sidebar = ({ classes }) => (
  <div className="w-20 bg-dark-muted-blue p0">
    <div className="h4 pl3 flex items-center  bg-bright-blue">
      <h1 className="f4 fw3 ma0 bg-bright-blue white">Your Classes</h1>
      <div
        className="btn-circle bg-teal fr mb3 new-class-button">+</div>
    </div>
    {classes.map((c, i) =>
      <div
        className={`light-gray fw3 pl3 pr2 pv3 ${c.active ? 'bg-darker-muted-blue': ''}`}
        key={i}>
        {c.name}
        {c.active && <Triangle />}
      </div>
    )}
  </div>
);

Sidebar.propTypes = {
  classes: PropTypes.array,
};
