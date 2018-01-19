import React, { Component } from 'react';
import NonprofitProfile from "../components/NonprofitProfile";
import UserProfile from "../components/VolunteerProfile";


/**
 * ProfileContainer
 */
export class ProfileContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    np : true
  }

  switchUser(){
    this.setState({
      np: !this.state.np
    })
  }


  render() {
    const mockData = [{
      name: 'Hotdog Fingers Society',
      userType: 'Non-Profit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quod, officia expedita aliquid vero dolorum, veritatis perferendis illum esse dicta nulla aspernatur earum itaque dolorem id distinctio, voluptatibus voluptatem nesciunt!',
      location: {
        address: '123 Muffin Lane, Columbus, Ohio',
        lat: 0,
        long: 0
      },
      image: 'download.jpeg',
      userid: 1
    },
    {
      name: 'Alex',
      userType: 'Volunteer',
      image: 'original.png',
      bio: 'Meditating and Programming champion'
    }];
    let profile = null;
    if( this.state.np ){
      profile = 
          <NonprofitProfile data={mockData[0]} />

    } else {
      profile =
          <UserProfile data={mockData[1]} />
    }

    return (
      <div>
      {profile}
      <button onClick={()=> this.switchUser()}> Switch User Type </button>
      </div>
    );
  }
}
export default ProfileContainer;
