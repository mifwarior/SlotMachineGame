import React from 'react';
import propTypes from 'prop-types';

const ScoreField = ({name, value})=>{
  return (
    <div className="score">
      <span>{name}</span>
      <span className="score-value">{value.toString()}</span>
    </div>
  );
};

ScoreField.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.number.isRequired
}
  
export default ScoreField;
