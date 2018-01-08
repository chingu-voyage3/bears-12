import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <a href="http://localhost:3001/auth/google" className="btn btn-danger"><span className="fa fa-google-plus">Login with Google</span></a>
              </div>
            </li>
            <li>
              <div style={buttonOutline}>
                <a href="http://localhost:3001/auth/linkedin" className="btn btn-danger"><span className="fa fa-linkedin">Login with Linkedin</span></a>
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
          <Link to="/signup">Sign up here!</Link>
        </div>
      </div>
    );
  }
}

// LoginContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default LoginContainer;
