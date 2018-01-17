import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRedirectUrl } from '../redux/modules/oauth.js';

class EnsureLoggedInContainer extends Component {
  componentDidMount() {
    const { dispatch, currentURL, isLoggedIn } = this.props

    if (!isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      dispatch(setRedirectUrl(currentURL))
      
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return this.props.children
    } else {
      return <Redirect push to="/login"/>
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.loggedIn,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)