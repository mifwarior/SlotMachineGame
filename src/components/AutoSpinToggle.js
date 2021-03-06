import React from 'react';
import propTypes from 'prop-types';

const AutoSpinToggle = ({name, toggle, onClick})=>{
  const activeStyle = "autospin-toggle" + (toggle?" autospin-toggle-active":"");
  return (
    <div className={activeStyle} onClick={onClick}>
      <span>{name}</span>
    </div>
  );
};

AutoSpinToggle.propTypes = {
  name: propTypes.string.isRequired,
  toggle: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired
}
  
export default AutoSpinToggle;
