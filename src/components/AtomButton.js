import React from 'react';
import propTypes from 'prop-types';

const AtomButton = ({name, onClick})=>{
  return (
    <span className="button-atom">
      {name}
    </span>
  );
};

AtomButton.propTypes = {
  name: propTypes.string.isRequired,
  onClick: propTypes.func
}
  
export default AtomButton;