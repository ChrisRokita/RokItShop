import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Rokshop! We use React!</h1>
        </header>
        <p className="App-intro">
          Glad to have you. Please take a look around and see if you like what our web management services have to offer
        </p>
      </div>
    );
  }
}

export default App;
