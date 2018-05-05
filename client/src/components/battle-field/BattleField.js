import React, { Component } from 'react';
import userSprite from './user-sprite.png';
import monsterSprite from './monster-sprite.png';
import './BattleField.css';

class BattleField extends Component {
  render() {
    return (
        <div>
          <div className='battle-top-container'>
            <div className='monster-sprite'>
              <h3>Scary Monster</h3>
              <img src={monsterSprite} alt='monster sprite'></img>
            </div>
            <div className='user-sprite'>
              <h3>Player 1</h3>
              <img src={userSprite} alt='user sprite'></img>
            </div>
          </div>
          <div className='question-ui'>
          </div>
        </div>
    );
  }
}

export default BattleField;
