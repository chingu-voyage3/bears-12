import React, { Component } from 'react';
import OpportunitiesContainer from '../container/OpportunitiesContainer';


/**
 * MessageContainer
 */
export class MyOpportunitiesContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h3>My Current Opportunities</h3>
        <OpportunitiesContainer/>
        <h3>Expired Opportunities</h3>
        <OpportunitiesContainer/>
        <h3>New Opportunity</h3>
      </div>
    );
  }
}

export default MyOpportunitiesContainer;
