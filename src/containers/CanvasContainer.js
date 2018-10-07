import { connect } from 'react-redux';
import React from 'react';
//import HtmlRenderer from './../components/renderers/HtmlDrumRenderer';
import ThreeJSRenderer from '../components/renderers/ThreeJSRenderer';
import AudioManager from '../utils/AduioManager';
import { CalcTurn } from '../actions';
import propTypes  from 'prop-types'

class CanvasContainer extends React.Component {

  constructor(...args) {
    super(...args);

    this.audioTick = AudioManager.audioTick;
    this.audioComplete = AudioManager.audioComplete;
  }

  render() {
    const {onComplete} = this.props;
    return (
      <div className={"canvas-container"}>
        <ThreeJSRenderer
          {...this.props}
          onTick={() => { this.audioTick.play() }}
          onComplete={() => {
             this.audioComplete.play();
             onComplete();
            }}
        />
      </div>
    )
  }
}

CanvasContainer.propTypes = {
  onComplete: propTypes.func.isRequired
}

export default connect((state, props) => {

  return { ...state.spin };

}, (dispatch, props)=>{
  return {
    onComplete: ()=>{dispatch(CalcTurn());}
  }
})(CanvasContainer);
