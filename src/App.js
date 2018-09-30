import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import RectangleButton from './components/RectangleButton';
import ScoreField from './components/ScoreField';
import HalfRoundScore from './components/HalfRoundScore';
import OvalElement from './components/OvalElement';
import AutoSpinToggle from './components/AutoSpinToggle';
import SpinButton from './components/SpinButton';
import AtomButton from './components/AtomButton';


class App extends Component {
  render() {

    return (
      <div>
        <div className="header">
          <RectangleButton onClick={console.log}>PAY TABLE</RectangleButton>

          <div className="group">
            <ScoreField name="WIN" value={0}/>
            <ScoreField name="COIN" value="10,000"/>
          </div>

          <div className="group">
            <RectangleButton onClick={console.log}>Home</RectangleButton>
            <RectangleButton onClick={console.log}>Settings</RectangleButton>
          </div>
        </div>
        <div></div>

        <div className="footer">
          <HalfRoundScore name="TOTAL BET" value={25}/>
          <OvalElement name="Lines" value={25}/>
          <div className="group">
            <AtomButton name="<"/>
            <OvalElement name="Bet" value={1}/>
            <AtomButton name=">"/>
          </div>
          <AutoSpinToggle name="Auto spin" toggle={false}/>
          <SpinButton name="Spin"/>
        </div>
      </div>
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
