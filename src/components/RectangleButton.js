import React from 'react';

const RectangleButton = ({onClick, children})=>{
  return (
    <div className="button" onClick={onClick}>{children}</div>
  );
};
  
export default RectangleButton;
