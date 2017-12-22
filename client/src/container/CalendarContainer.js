import React, { Component } from 'react';
import Calendar from 'react-calendar';

/**
 * CalendarContainer
 *
 * I just pulled a basic, configurable calendar
 * with an MIT license from:
 * https://www.npmjs.com/package/react-calendar
 */
export class CalendarContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date });

  render() {
    const styleDiv = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    console.log(this.state.date);

    return (
      <div style={styleDiv}>
        <h3>Calender of Events</h3>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

//CalendarContainer.propTypes = {
//  prop: PropTypes.type.isRequired
//}

export default CalendarContainer;
