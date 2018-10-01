import { connect } from 'react-redux';
import ScoreField from './../components/ScoreField';
import RectangleButton from './../components/RectangleButton';
import React from 'react';

const Header = ({score, coins}) => {

  return (
    <div className="header">
      <div className="menu">

        <RectangleButton onClick={console.log}>PAY TABLE</RectangleButton>

        <div className="group">
          <ScoreField name="WIN" value={score}/>
          <ScoreField name="COIN" value={coins} />
        </div>

        <div className="group">
          <RectangleButton onClick={console.log}>Home</RectangleButton>
          <RectangleButton onClick={console.log}>Settings</RectangleButton>
        </div>
      </div>
    </div>
  )
}

export default connect((state, props) => {

  return { ...state };

}, null)(Header);
