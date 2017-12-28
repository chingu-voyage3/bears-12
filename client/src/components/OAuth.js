import React, { Component } from 'react'
import hello from 'hellojs/dist/hello.all.js';
import OAuthKeys from '../OAuthKeys.js';

export class OAuth extends Component {
  constructor () {
      super();
      this.state = {
          thumbnail: null,
          name: null,
          loggedIn: false,
          askForLogin: true
      }
      
      const GOOGLE_CLIENT_ID = OAuthKeys.google.ClientID
      
      hello.init({
          google: GOOGLE_CLIENT_ID
      },{
          display: 'popup',
          scope: 'basic',
          force: false
      });
      
      const google = hello.use('google');
      
      let that = this;
      google.api("me").then(function(r){
        console.log("Successful login: ", r);
        that.setState({
            askForLogin: false,
            thumbnail: r.thumbnail,
            name: r.name,
            loggedIn: true
        });
      }, function(e) {
        console.log("Not successful yet");
        that.setState({askForLogin: true});
      });
  }
    
  componentDidMount () {
  }
    
  loginGoog () {
      console.log("Button Pressed");
      let that = this;
      hello.login('google');
  }

  logoutGoog () {
      console.log("Button Pressed");
      let that = this;
      hello.logout('google').then(() => {
          that.setState({
            thumbnail: null,
            name: null,
            loggedIn: false
          });
          console.log("Logged out");
      });
  }
    
  render() {
    return(
      <div>
        {!this.state.loggedIn ? <button onClick={this.loginGoog}>G+</button> : <div></div>}
        {this.state.loggedIn ? <button onClick={this.logoutGoog}>logout</button> : <div></div>}
        {this.state.loggedIn ? <div id="pic_and_greet">
            <img src={this.state.thumbnail}/>
            {"Hey " + this.state.name}
        </div> : <div></div>}
      </div>
    );
  }
}

export default OAuth