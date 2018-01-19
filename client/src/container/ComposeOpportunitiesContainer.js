import React, { Component } from 'react';
import moment from 'moment';

/**
 * ComposeMessagesContainer
 */
export class ComposeOpportunitiesContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      startTime: '',
      startDate: '',
      endTime: '',
      endDate: '',
      details: ''
    }
  }

  handleChange(e) {
    const state = this.state;
    for (var prop in state) {
      if(prop === e.target.id) {
        state[e.target.id] = e.target.value
        this.setState(state);
      }
    }
  }

  santizeDate(e) {
    const dateString = e.target.value;
    
    if(moment(dateString).isValid()) {
      console.log(true);
    } else {
      console.log(false)
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form>
          <label htmlFor="name">Name of Event</label>
          <input type="text" name="name" id="name" onChange={this.handleChange.bind(this)} />
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" placeholder="123 Muffin Ln." onChange={this.handleChange.bind(this)}/>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <div>
              <input type="text" id="startDate" onBlur={this.santizeDate.bind(this)} />
              <input type="text" id="startTime" onBlur={this.santizeDate.bind(this)} />
            </div>
            <label htmlFor="endTime">Ending Time</label>
            <div>
              <input type="text" id="endDate" onBlur={this.handleChange.bind(this)} />
              <input type="text" id="endTime" onBlur={this.handleChange.bind(this)} />
            </div>
          </div>
          <label htmlFor="details">Description</label>
          <textarea name="details" id="details" cols="30" rows="10"  onChange={this.handleChange.bind(this)}/>
          <label htmlFor="image">Upload Image here</label>
          <input type="file" name="image" id="image" />
          <button onClick={(e) => {
              e.preventDefault();
              console.log('it worked!')
            }}>Create</button>
        </form>
      </div>
    );
  }
}


export default ComposeOpportunitiesContainer;
