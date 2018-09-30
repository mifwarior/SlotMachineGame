import React from 'react';

const OvalElement = ({name, value})=>{
  return (
    <div className="oval-element">
      <div className="oval-element-name">{name}</div>
      <div className="oval-element-value score-value">{value}</div>
    </div>
  );
};
  
export default OvalElement;