import React, { Component } from 'react';
import Opportunity from '../components/Opportunity';

/**
 * OpportunityContainer
 */
export class OpportunityContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Opportunity />
    )
  }
}

// OpportunityContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default OpportunityContainer;
