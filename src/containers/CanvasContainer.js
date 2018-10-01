import {connect} from 'react-redux';
import React from 'react';
import HtmlRenderer from './../components/renderers/HtmlDrumRenderer';

const CanvasContainer = (props)=>{

  return (
    <div className={"canvas-container"}>
      <HtmlRenderer {...props}/>
    </div>
    )
}

export default connect((state, props)=> {
  
  return {...state.spin};

 }, null)(CanvasContainer);
