import React from 'react';
import propTypes from 'prop-types';

const AutoSpinToggle = ({name, toggle})=>{
  const activeStyle = "autospin-toggle" + (toggle?" autospin-toggle-active":"");
  return (
    <div className={activeStyle}>
      <span>{name}</span>
    </div>
  );
};

AutoSpinToggle.propTypes = {
  name: propTypes.string.isRequired,
  toggle: propTypes.bool.isRequired
}
  
export default AutoSpinToggle;
