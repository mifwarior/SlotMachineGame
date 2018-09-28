import React from 'react';

const HalfRoundScore = ({name, value})=>{
  return (
    <div className="half-round-score">
      <div className="half-round-score-name">{name}</div>
      <div className="score-value">{value}</div>
    </div>
  );
};
  
export default HalfRoundScore;
