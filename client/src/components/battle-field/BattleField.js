import React, { Component } from 'react';
import userSprite from './user-sprite.gif';
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
      () => this.setState({ animate: false },() =>  this.props.onAnimationComplete())
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
          })
        }, 2000))
     } 
   }

  render() {
    return (
        <div>
          <div className='battle-top-container'>
            <div className='monster-sprite'>
              <h3>Scary Monster</h3>
              <img src={monsterSprite} alt='monster sprite'></img>
            </div>
            <div className={`user-sprite ${this.state.animate ? 'move-user' : ''}`}>
              <h3>Player 1</h3>
              <img src={userSprite} alt='user sprite'></img>
            </div>
          </div>
          <div className='question-ui'>
            {this.props.attack && "attacked!"}
            {/* {this.props.hit && this.renderHit()} */}
          </div>
        </div>
    );
  }
}

export default BattleField;
