import React from 'react';

const ScoreField = ({name, value})=>{
  return (
    <div className="score">
      <span>{name}</span>
      <span className="score-value">{value}</span>
    </div>
  );
};
  
export default ScoreField;
