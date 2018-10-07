import React, { Component } from 'react';
import './App.css';
import Background from './components/Background';
import CanvasContainer from './containers/CanvasContainer';
import Header from './containers/Header';
import Footer from './containers/Footer';
import GameOver from './containers/GameOver';



class App extends Component {
  render() {
    return (
      <div className="content">
        <Background/>
        <Header/>
        <CanvasContainer/>
        <Footer/>
        <GameOver/>
      </div>
    );
  }
}

export default App;
