import React, { Component } from 'react'

export class OAuth extends Component {
  render() {
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black'
    }
    
    const buttonStyle = {
        maxWidth: '150px'
    }
    return(
      <div style={divStyle}>
        <a href="http://localhost:3001/auth/google" className="btn btn-danger" style={buttonStyle}><span className="fa fa-google-plus">Login with Google</span></a>
        <a href="http://localhost:3001/auth/linkedin" className="btn btn-danger" style={buttonStyle}><span className="fa fa-linkedin">Login with Linkedin</span></a>
        <a href="http://localhost:3001/auth/facebook" className="btn btn-danger" style={buttonStyle}><span className="fa fa-facebook">Login with Facebook</span></a>
      </div>
    );
  }
}

export default OAuth