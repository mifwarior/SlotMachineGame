import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import HalfRoundScore from './components/HalfRoundScore';
import OvalElement from './components/OvalElement';
import AutoSpinToggle from './components/AutoSpinToggle';
import SpinButton from './containers/SpinButton';
import AtomButton from './components/AtomButton';
import Background from './components/Background';
import CanvasContainer from './containers/CanvasContainer';
import Header from './containers/Header';


class App extends Component {
  render() {
    return (
      <div className="content">
        <Background/>
        <Header/>

        <CanvasContainer/>

        <div className="footer">
          <div className="menu">
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
