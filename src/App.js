import React, { Component } from 'react';
import './App.css';
import Background from './components/Background';
import CanvasContainer from './containers/CanvasContainer';
import Header from './containers/Header';
import Footer from './containers/Footer';


class App extends Component {
  render() {
    return (
      <div className="content">
        <Background/>
        <Header/>
        <CanvasContainer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
