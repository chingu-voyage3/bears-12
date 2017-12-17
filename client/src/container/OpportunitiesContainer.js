import React, { Component } from 'react';
import OpCard from '../components/OpportunityCard';
import moment from 'moment';

/**
 * OpportunitesContainer
 */
export class OpportunitesContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const mockData = [{
      image: 'sample.png',
      title: 'Lorem Ipsum',
      description: 'This is a description',
      startDate: '12/31/2017',
      location: 'Columbus, Ohio'
    }];

    return (
      <div>
        {
          mockData.map((data, idx) => {
            return <OpCard key={idx} data={data} />
          })
        }
      </div>
    );
  }
}

// OpportunitesContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default OpportunitesContainer;
