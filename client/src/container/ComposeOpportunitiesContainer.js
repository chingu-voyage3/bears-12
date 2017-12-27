import React, { Component } from 'react';

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
      endTime: '',
      details: ''
    }
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
    console.log(this.state)
    return (
      <div>
        <form>
          <label htmlFor="name">Name of Event</label>
          <input type="text" name="name" id="name" onChange={this.handleChange.bind(this)} />
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" placeholder="123 Muffin Ln." onChange={this.handleChange.bind(this)}/>
          <div>
            <label htmlFor="startTime">Starting Time</label>
            <input type="text" name="startTime" id="startTime" onChange={this.handleChange.bind(this)}/>
            <label htmlFor="endTime">Ending Time</label>
            <input type="text" name="endTime" id="endDate" onChange={this.handleChange.bind(this)}/>
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
