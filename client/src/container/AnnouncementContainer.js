import React, { Component } from 'react';
import ViewAnnouncementsContainer from './ViewAnnouncementsContainer';
import ComposeAnnouncementsContainer from './ComposeAnnouncementsContainer';
import '../App.css';

/**
 * MessageContainer
 */
export class AnnouncementContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor () {
      super();
      this.state = {
          viewIsVisible: true,
          composeIsVisible: false
      }
  }
  switchToView () {
      this.setState({
          viewIsVisible: true,
          composeIsVisible: false
      })
  }
  switchToCompose () {
      this.setState({
          viewIsVisible: false,
          composeIsVisible: true
      })
  }

    
  render() {
    const buttonStyle = {
        width: '100px',
        height: '50px',
        cursor: 'pointer',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderRadius: '5px',
        borderColor: '#333',
        backgroundColor: '#333',
        fontSize: 'medium',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    const buttonContainerStyle = {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
    
    return (
      <div>
        <div style={buttonContainerStyle}>
          <div style={buttonStyle} onClick={() => this.switchToView()}>Previous Announcements</div>
          <div style={buttonStyle} onClick={() => this.switchToCompose()}>Compose New Announcement</div>
        </div>
        <div>
          {this.state.viewIsVisible && <ViewAnnouncementsContainer/>}
          {this.state.composeIsVisible && <ComposeAnnouncementsContainer/>}
        </div>
      </div>
    );
  }
}

export default AnnouncementContainer;
