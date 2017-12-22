import React, { Component } from 'react';
import ViewAnnouncementsContainer from './ViewAnnouncementsContainer'
import ComposeAnnouncementsContainer from './ComposeAnnouncementsContainer'

/**
 * MessageContainer
 */
export class AnnouncementContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h3>Previous Announcements</h3>
        <ViewAnnouncementsContainer/>
        <h3>Compose New Announcement</h3>
        <ComposeAnnouncementsContainer/>
      </div>
    );
  }
}

export default AnnouncementContainer;
