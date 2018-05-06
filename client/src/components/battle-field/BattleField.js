import React, { Component } from 'react';
import userSprite from './user-sprite4.png';
import monsterSprite from './monster-sprite.png';
import './BattleField.css';

let color = 'red';
class BattleField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }


  animate = () => {
    const stopAnimation = () => setTimeout(
      () => this.setState({ animate: false }, () => this.props.onAnimationComplete())
    , 2000);

    // this.setState({
    //   animate: true,
    // }, 
    stopAnimation()
  }

  renderHit() {
    this.animate();
    return ("hello!");
   }

   componentDidUpdate(prevProps) {
     const { hit, attack } = this.props;
     if (hit && prevProps.hit === false) {
       console.log("hit");
        this.setState({
          animate: true
        }, () => setTimeout(() => {
          this.setState({
            animate: false
          }, this.props.onAnimationComplete)
        }, 2000))
     } 
   }

  render() {
    return (
        <div>
          <div className='battle-top-container'>
          <div className={`user-sprite ${this.state.animate ? 'move-user' : ''}`}>
              <h3 className='player-name'>Player 1</h3>
              <img src={userSprite} alt='user sprite'></img>
            </div>

            <div className={`monster-sprite ${this.state.animate ? 'move-monster' : ''}`}>
              <div className='hit-box'>
                <h1>-1</h1>
              </div>
              <h3 className='monster-name'>Scary Monster</h3>
              <img src={monsterSprite} alt='monster sprite'></img>
            </div>
          </div>
          <div className='hit-ui'>
            {this.props.attack &&  "attacked!"}
            {this.props.hit && "damage dealt!"}
          </div>
        </div>
    );
  }
}

export default BattleField;
