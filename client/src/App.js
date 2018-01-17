import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigateTo } from './redux/modules/oauth.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    

  componentDidUpdate(prevProps) {
    const { dispatch, redirectUrl } = this.props
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

    if (isLoggingIn) {
      dispatch(navigateTo(redirectUrl))
    } else if (isLoggingOut) {
      // do any kind of cleanup or post-logout redirection here
    }
  }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OfferYou</h1>
        </header>
      {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loggedIn,
    redirectUrl: state.redirectUrl
  }
}

export default connect(mapStateToProps)(App);
