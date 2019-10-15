import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fly from './fly';

class App extends Component {
  render() {
    console.log('silly console.log');
    return (
      <div className="App">
        <Fly />
      </div>
    );
  }
}

export default App;
