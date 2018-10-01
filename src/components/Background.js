import React from 'react';

const createRound = ({key, radius}) => {
  const width = (Math.random() * key * 10)|0;
  const height = (Math.random() * key * 10)|0;

  const r = Math.random()*256;
  const g = Math.random()*256;
  const b = Math.random()*256;

  return ( <div key={key} className="round" style={{
    "top":height+"%",
    "left":width+"%",
    borderRadius: (radius + "px"),
    backgroundColor: `rgb(${r},${g},${b})`
  }}></div>);
};

const Background = () => {
  const elements = [];
  const roundsCount = 25;
  for (let i = 0; i < roundsCount; i++) {
    elements.push(createRound({key:i, radius: 100}));
  }
  return (
    <div className="background">
      <div className="background-filter"></div>
      {elements}
    </div>
  );
};

export default Background;