import React, { Component } from 'react';

import NavContainer from './container/NavContainer'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OfferYou</h1>
          <NavContainer />
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
