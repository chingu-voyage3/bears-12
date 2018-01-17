import React, { Component } from 'react'

export class OAuth extends Component {
  render() {
    const divStyle = {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        maxWidth: '150px',
        maxHeight: '250px'
    }
    
    const buttonStyle = {
        maxWidth: '150px'
    }
    return(
      <div style={divStyle}>
        <a href="http://localhost:3001/auth/google" className="btn btn-danger" style={buttonStyle}><span className="fa fa-google-plus">Login with Google</span></a>
        <a href="http://localhost:3001/auth/linkedin" className="btn btn-primary" style={buttonStyle}><span className="fa fa-linkedin">Login with Linkedin</span></a>
        <a href="http://127.0.0.1:3001/auth/twitter" className="btn btn-info" style={buttonStyle}><span className="fa fa-twitter">Login with Twitter</span></a>
      </div>
    );
  }
}

export default OAuth