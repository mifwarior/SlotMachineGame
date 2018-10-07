import { connect } from 'react-redux';
import React from 'react';
import { AddBet, ToggleAutoSpin, Spin } from '../actions';
import AtomButton from '../components/AtomButton';
import AutoSpinToggle from '../components/AutoSpinToggle';
import SpinButton from '../components/SpinButton';
import HalfRoundScore from '../components/HalfRoundScore';
import propTypes from 'prop-types'
import OvalElement from '../components/OvalElement';

const Footer = ({ bet, autoSpin, onAddBet, onToggleAutoSpin, onSpin, spin }) => {

  return (
    <div className="footer">
      <div className="menu">
        <HalfRoundScore name="TOTAL BET" value={bet} />
        <OvalElement name="Lines" value={spin.symbols} />
        <div className="group">
          <AtomButton name="<" onClick={() => { onAddBet(-1) }} />
          <OvalElement name="Bet" value={bet} />
          <AtomButton name=">" onClick={() => { onAddBet(1) }} />
        </div>
        <AutoSpinToggle name="Auto spin" toggle={autoSpin} onClick={onToggleAutoSpin} />
        <SpinButton name="Spin" onClick={onSpin} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  bet: propTypes.number.isRequired,
  autoSpin: propTypes.bool.isRequired,
  onAddBet: propTypes.func.isRequired,
  onToggleAutoSpin: propTypes.func.isRequired
}

export default connect((state, props) => {

  return { ...state };

}, (dispatch, props) => {
  return {
    onAddBet: (count) => {
      dispatch(AddBet(count))
    },
    onToggleAutoSpin: () => { dispatch(ToggleAutoSpin()) },
    onSpin: () => { dispatch(Spin()) }
  }
})(Footer);
