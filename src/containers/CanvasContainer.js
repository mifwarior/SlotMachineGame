import { connect } from 'react-redux';
import React from 'react';
import HtmlRenderer from './../components/renderers/HtmlDrumRenderer';
import ThreeJSRenderer from '../components/renderers/ThreeJSRenderer';

class AudioPool{
  constructor(url, count){
    this.url = url;
    this.pool = [];
    for( let i= 0; i< count; i++){
      this.pool.push(new Audio(url));
    }
  }
  play(){
    for(let i = 0; i < this.pool.length; i++) {
      if(this.pool[i].currentTime === 0 || this.pool[i].ended) {
        this.pool[i].play();
        return;
      }
    }
  }
}

class CanvasContainer extends React.Component {

  constructor(...args){
    super(...args);
    

    this.audio = new AudioPool('./assets/422642__trullilulli__sfx-ambiance-clock-tick.wav',5);
  }
  
  render() {
    const render = (<ThreeJSRenderer {...this.props} onTick={ ()=>{this.audio.play()}}/>);
    return (
      <div className={"canvas-container"}>
        {render}
        
      </div>
    )
  }
}

export default connect((state, props) => {

  return { ...state.spin };

}, null)(CanvasContainer);
