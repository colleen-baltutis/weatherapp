import React, { Component } from 'react';
import Header from './components/Header.js';
import Forecast from './containers/Forecast';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Forecast />
      </div>
    );
  }
}

export default App;
