import {connect} from 'react-redux';
import React from 'react';
import HtmlRenderer from './../components/renderers/HtmlDrumRenderer';
import ThreeJSRenderer from '../components/renderers/ThreeJSRenderer';

const CanvasContainer = (props)=>{
  //const render = (<HtmlRenderer {...props}/>);
  const render = (<ThreeJSRenderer {...props}/>);
  return (
    <div className={"canvas-container"}>
      {render}
    </div>
    )
}

export default connect((state, props)=> {
  
  return {...state.spin};

 }, null)(CanvasContainer);
