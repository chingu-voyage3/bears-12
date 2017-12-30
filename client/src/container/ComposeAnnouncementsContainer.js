import React, { Component } from 'react';

/**
 * ComposeMessagesContainer
 */
export class ComposeAnnouncementsContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
  
    this.state = {
       opportunity: '',
       bodyMessage: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    let state = this.state;
    for (var prop in state) {
      if(prop === e.target.id) {
        state[e.target.id] = e.target.value
        this.setState(state);
      }
    }
  }

  render() {
    return (
      <div>
        <form>
          <select id="opportunity" onChange={this.handleChange}>
            <option label="Please select an Opportunity" />
            <option label="opportunity1" value="opportunity1" />
            <option label="opportunity2" value="oppotunity2" />
          </select>
          <textarea placeholder="Please write your message here" 
            name="body" 
            id="bodyMessage" 
            cols="30" 
            rows="10"
            onChange={this.handleChange} />
          <button type="submit" onClick={(e) => e.preventDefault() }>Create Announcement</button>
        </form>
      </div>
    );
  }
}


export default ComposeAnnouncementsContainer;
