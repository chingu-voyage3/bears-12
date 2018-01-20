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
      startTime: moment().format('hh:mm a'),
      startDate: moment().format('MM/DD/YYYY'),
      endTime: moment().format('hh:mm a'),
      endDate: moment().format('MM/DD/YYYY'),
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
    const currentDate = moment();
    const dateString = e.target.value;
    const state = this.state;


    if(moment(dateString, 'MM/DD/YYYY', true).isValid() || moment(dateString, 'hh:mm a', true).isValid()) {
      state[e.target.id] = dateString;
      this.setState(state);
      return;
    } 

    if(e.target.id === 'endTime' || e.target.id === 'startTime') {
      state[e.target.id] = currentDate.format('hh:mm a');
      this.setState(state);
      
      return;
    } else {
      state[e.target.id] = currentDate.format('MM/DD/YYYY');
      this.setState(state);
      return;
    }
  }

  render() {
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
              <input type="text" 
                     id="startDate" 
                     value={this.state.startDate} 
                     onBlur={this.santizeDate.bind(this)} 
                     onChange={this.handleChange.bind(this)} />
              <input type="text" 
                     id="startTime" 
                     value={this.state.startTime} 
                     onBlur={this.santizeDate.bind(this)} 
                     onChange={this.handleChange.bind(this)}/>
            </div>
            <label htmlFor="endTime">Ending Time</label>
            <div>
              <input type="text" 
                     id="endDate" 
                     value={this.state.endDate} 
                     onBlur={this.santizeDate.bind(this)} 
                     onChange={this.handleChange.bind(this)} />
              <input type="text" 
                     id="endTime" 
                     value={this.state.endTime} 
                     onBlur={this.santizeDate.bind(this)} 
                     onChange={this.handleChange.bind(this)}/>
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
