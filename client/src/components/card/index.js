import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

const DefaultCard = ({ renderTitle, children }) => (
  <div className="card-container">
    {renderTitle()}
    <div className="card-body">
      {children}
    </div>
  </div>
);

DefaultCard.propTypes = {
  renderTitle: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export const Card = ({ title, children, onClose, onTitleClick }) => (
  <div className="card-container">
    <div onClick={onTitleClick} className="flex justify-between items-center">
      <h1 className="card-title">{title}</h1>
      <span onClick={onClose} className="x-hover ph3 f3 normal pointer light-gray">X</span>
    </div>
    <div className="card-body">
      {children}
    </div>
  </div>
);

Card.propTypes = {
  onClose: PropTypes.func,
  onTitleClick: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
};


export const InputCard = ({ onInputChange, children }) => (
  <div className="card-container">
    <input autoFocus className="input-card-input" onChange={onInputChange}/>
    <div className="card-body">
      {children}
    </div>
  </div>
);
InputCard.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default DefaultCard;
