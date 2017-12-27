import React, { Component } from 'react'
import hello from 'hellojs/dist/hello.all.js';
import OAuthKeys from '../OAuthKeys.js';

export class OAuth extends Component {
  constructor () {
      super();
      this.state = {
          thumbnail: null,
          name: null,
          loggedIn: false
      }
  }

  GOOGLE_CLIENT_ID = OAuthKeys.Google.ClientID

  /*hello.on('auth.login', function (auth) {

      // add a greeting and access the thumbnail and name from
      // the authorized response

      hello(auth.network).api('/me').;
    });

    // remove the greeting when we log out

    hello.on('auth.logout', function () {
      var lab = document.getElementById("pic_and_greet");
      if (lab != null) document.body.removeChild( lab );
    });*/
    
  render() {
    return(
      <div>
        {!this.state.loggedIn && <button onClick="hello('google').login()">G+</button>}
        {this.state.loggedIn && <button onClick="hello('google').logout()">logout</button>}
        {this.state.loggedIn && <div id="pic_and_greet">
            <img src={this.state.thumbnail}/>
            {"Hey " + this.state.name}
        </div>}
      </div>
    );
  }
}

export default OAuth