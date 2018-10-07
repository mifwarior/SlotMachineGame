import { connect } from 'react-redux';
import React from 'react';
//import HtmlRenderer from './../components/renderers/HtmlDrumRenderer';
import ThreeJSRenderer from '../components/renderers/ThreeJSRenderer';
import AudioManager from '../utils/AduioManager';


class CanvasContainer extends React.Component {

  constructor(...args) {
    super(...args);

    this.audioTick = AudioManager.audioTick;
    this.audioComplete = AudioManager.audioComplete;
  }

  render() {
    return (
      <div className={"canvas-container"}>
        <ThreeJSRenderer
          {...this.props}
          onTick={() => { this.audioTick.play() }}
          onComplete={() => { this.audioComplete.play() }}
        />
      </div>
    )
  }
}

export default connect((state, props) => {

  return { ...state.spin };

}, null)(CanvasContainer);
