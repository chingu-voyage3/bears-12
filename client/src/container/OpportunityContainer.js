import React, { Component } from 'react';

/**
 * OpportunityContainer
 */
export class OpportunityContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>Opportunity: Coming Soon!</div>
    );
  }
}

OpportunityContainer.propTypes = {
  prop: PropTypes.type.isRequired
}

export default OpportunityContainer;
