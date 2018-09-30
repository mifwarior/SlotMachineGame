import React from 'react';
import propTypes from 'prop-types';

const SpinButton = ({name, onClick})=>{
  return (
    <div onClick={onClick} className="button-spin">
      <span>{name}</span>
    </div>
  );
};

SpinButton.propTypes = {
  name: propTypes.string.isRequired,
  onClick: propTypes.func
}
  
export default SpinButton;
