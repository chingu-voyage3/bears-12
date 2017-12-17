import React, { Component } from 'react';

/**
 * LoginContainer
 */
export class LoginContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const buttonOutline = {
      border: '1px solid black'
    };
    return (
      <div>
        <div>
          <h2>Login to OfferYou</h2>
          <ul style={ {listStyle: 'none'} }>
            <li>
              <div style={buttonOutline}>
                <span>Login with Facebook</span>
              </div>
            </li>
            <li>
              <div style={buttonOutline}>
                <span>Login with Linkedin</span>
              </div>
            </li>
            <li>
              <div style={buttonOutline}>
                <span>Login with Twitter</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <a href="#">Sign up here!</a>
        </div>
      </div>
    );
  }
}

// LoginContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default LoginContainer;
