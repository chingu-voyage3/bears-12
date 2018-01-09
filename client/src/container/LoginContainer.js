import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth.js';

/**
 * LoginContainer
 */
export class LoginContainer extends Component { // eslint-disable-line react/prefer-stateless-function
    
    
  render() {
    return (
      <div>
        <div>
          <h2>Login to OfferYou</h2>
        </div>
        <div>
          <OAuth/>
          <Link to="/join">Sign up here!</Link>
        </div>
      </div>
    );
  }
}

// LoginContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default LoginContainer;
