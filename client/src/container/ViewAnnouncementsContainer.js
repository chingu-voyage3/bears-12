import React, { Component } from 'react';
import AnnouncementCard from '../components/AnnouncementCard';

/**
 * ReadMessagesContainer
 */
export class ViewAnnouncementsContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      messageList: [{
        nonProfit: 'Hotdog Fingers Society',
        dateSent: '12/31/17 12:00 AM',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quos, adipisci nemo optio repudiandae modi aspernatur ut cupiditate temporibus natus voluptatum ipsa numquam architecto nulla quod delectus. Unde, dolores perspiciatis.'
      }]
    }
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageList.map((message, idx) => {
              return <AnnouncementCard message={message} key={idx} />
            })
          }
        </ul>
      </div>
    );
  }
}

// ReadMessagesContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default ViewAnnouncementsContainer;
