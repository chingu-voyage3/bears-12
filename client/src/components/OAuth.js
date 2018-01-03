import React, { Component } from 'react'
import hello from 'hellojs/dist/hello.all.js';
import OAuthKeys from '../config/OAuthKeys.js';

export class OAuth extends Component {
  constructor () {
      super();
      this.state = {
          thumbnail: null,
          name: null,
          loggedIn: false
      }
      const GOOGLE_CLIENT_ID = OAuthKeys.Google.ClientID
      
      hello.init({
          google: GOOGLE_CLIENT_ID
      },{
          display: 'popup',
          scope: 'basic',
          force: false
      });
      
      const google = hello.use('google');
      let that = this;
      
      hello.on('auth.login', function(auth){
        google.api("me").then(function(r){
            that.setState({
                thumbnail: r.thumbnail,
                name: r.name,
                loggedIn: true
            });
        }, function(e) {
            that.setState({askForLogin: true});
        }); 
      });
      
      hello.on('auth.logout', function() {
        that.setState({
            thumbnail: null,
            name: null,
            loggedIn: false
        })
      });
  }
    
  loginGoog () {
      let that = this;
      hello.login('google');
  }

  logoutGoog () {
      let that = this;
      hello.logout('google');
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