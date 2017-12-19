import React, { Component } from 'react';
import Profile from "../components/Profile.js";

/**
 * ProfileContainer
 */
export class ProfileContainer extends Component { // eslint-disable-line react/prefer-stateless-function
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
      userid: 1
    }];
    return (
      <div>
        {
          mockData.map((data, idx) => {
            return <Profile key={idx} data={data} />
          })
        }
      </div>
    );
  }
}

// ProfileContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default ProfileContainer;
