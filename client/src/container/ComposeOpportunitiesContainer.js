import React, { Component } from 'react';
import moment from 'moment';

/**
 * ComposeMessagesContainer
 */
export class ComposeOpportunitiesContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      location: '',
      startTime: moment().format('hh:mm a'),
      startDate: moment().format('MM/DD/YYYY'),
      endTime: moment().format('hh:mm a'),
      endDate: moment().format('MM/DD/YYYY'),
      description: '',
      requiredSkills: '',
      redirect: false,
      errors: {},
    }
  }

  postOpportunity(errorsObj) {

    const state = this.state;
    const errorsLength = Object.keys(errorsObj);
    const url = '/opportunity/create';
    const jsonData = Object.assign({}, state);;

    jsonData.startDate = new Date(`${this.state.startDate} ${this.state.startTime}`);
    jsonData.endDate = new Date(`${this.state.endDate} ${this.state.endTime}`);

    let options = {
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };

    if(errorsLength.length === 0) {
      
      console.log('No validation errors time to send it off to the server!');

      fetch(url, options)
        .then((res) => {
          return res.json();
        })
        .then((success)=> {
          this.setState({ redirect: true });
        })
    } else {
      this.setState({ errors: errorsObj });
    }
  }

  handleValidation() {
    let errors = {};
    const state = this.state;
    const startDate = new Date(`${this.state.startDate} ${this.state.startTime}`);
    const endDate = new Date(`${this.state.endDate} ${this.state.endTime}`);
    const currentDate = new Date();
  
    if(state.title.length <= 5) {
    errors = Object.assign({ titleEmpty: 'Title of event must be atleast 5 characters long' }, errors)
    }

    if(state.location.length === 0) {
      errors = Object.assign({ locationEmpty: 'Please enter a valid location'}, errors)
    }

    if(state.description.length <= 140 || state.description.length >= 15000) {
      console.log(state.description.length)
      errors = Object.assign({ detailsLength: 'The description needs to be between 140 and 15,000 characters'}, errors);
    }

    if(startDate > endDate) {
      errors = Object.assign({ invalidStartDate: 'The start date cannot be set after the end date'}, errors);
    }

    if(startDate < currentDate || endDate < currentDate) {
      errors = Object.assign({ pastDate: 'Dates cannot be set in the past'}, errors);
    }

    return errors
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
    const errors = this.state.errors;
 
    return (
      <div>
        <form>
          { errors.titleEmpty ? <div className="error-label">{errors.titleEmpty}</div> : null } 
          <label htmlFor="name">Name of Event</label>
          <input type="text" name="name" id="title" onChange={this.handleChange.bind(this)} />
          { errors.locationEmpty ? <div className="error-label">{errors.titleEmpty}</div> : null}
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" placeholder="123 Muffin Ln." onChange={this.handleChange.bind(this)}/>
          { errors.invalidStartDate ? <div className="error-label">{errors.invalidStartDate}</div> : null}
          { errors.pastDate ? <div className="error-label">{errors.pastDate}</div> : null}
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
          { errors.detailsLength ? <div className="error-label">{errors.detailsLength}</div> : null}
          <label htmlFor="details">Description</label>
          <textarea name="details" id="description" cols="30" rows="10"  onChange={this.handleChange.bind(this)}/>
          <label htmlFor="image">Upload Image here</label>
          <input type="file" name="image" id="image" />
          <button onClick={(e) => {
              const validation = this.handleValidation();
              this.postOpportunity(validation);
              e.preventDefault();
              
            }}>Create</button>
        </form>
      </div>
    );
  }
}


export default ComposeOpportunitiesContainer;
