import React, { Component } from 'react';
import Profile from "../components/Profile.js";
import CalendarContainer from "../container/CalendarContainer.js";
import NonprofitUserContainer from "./NonprofitUserContainer";
/**
 * ProfileContainer
 */
export class ProfileContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const mockData = {
      name: 'Hotdog Fingers Society',
      userType: 'Non-Profit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quod, officia expedita aliquid vero dolorum, veritatis perferendis illum esse dicta nulla aspernatur earum itaque dolorem id distinctio, voluptatibus voluptatem nesciunt!',
      location: {
        address: '123 Muffin Lane, Columbus, Ohio',
        lat: 0,
        long: 0
      },
      userid: 1
    };
    let profile = null;
    if( mockData.userType === 'Non-Profit'){
      profile = 
      <div>
          <NonprofitUserContainer />
          <CalendarContainer/>  
      </div>

    } else {
      profile =
      <div>
        {
          mockData.map((data, idx) => {
            return <Profile key={idx} data={data} />
          })
        }
         
      </div>
    }

    return (
      <div>
      {profile}
      </div>
    );
  }
}

// ProfileContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default ProfileContainer;
