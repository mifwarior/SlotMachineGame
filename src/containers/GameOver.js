import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const GameOver = ({ gameOver, score, totalBet }) => {
  if (gameOver) {
    return (
      <div className="game-over-container">
        <div className="game-over-header">GAME OVER</div>
        <div className="game-over-score">
          <div>Your best score is <span>{score}</span></div>
          <div>Your total bet is <span>{totalBet}</span></div>
        </div>
      </div>
    );
  }
  return null;
};

GameOver.propTypes = {
  gameOver: propTypes.bool.isRequired,
  score: propTypes.number.isRequired,
  totalBet: propTypes.number.isRequired
}


export default connect((state, props) => {

  return { ...state };

}, null)(GameOver);

